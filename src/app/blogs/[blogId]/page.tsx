import { Section, Wrapper } from '@/utils/Section'
import React from 'react'
import BlogContent from './BlogContent'
import { Metadata } from 'next'
import axios from 'axios'
import { getCanonicalUrl } from '@/utils/seo'

export default async function SingleBlogPage({ params }: { params: Promise<{ blogId: string }> }) {
    const { blogId } = await params
    return (
        <main className='relative w-full'>
            <Section>
                <Wrapper>
                    <div className='w-full relative max-w-4xl mx-auto'>
                        <BlogContent blogId={blogId} />
                    </div>
                </Wrapper>
            </Section>
        </main>
    )
}

interface Blog {
    id: number;
    title: string;
    slug: string;
    blog_image: string;
    description: string;
    paragraphs: Paragraph[]
}
interface BlogApi {
    success: boolean;
    message: string;
    data: Blog;
}
interface Paragraph {
    id: string;
    title: string;
    description: string;
    products: Product[]
}
interface Product {
    id: string;
    title: string;
    slug: string;
    description: string;
    image: string;
    category: Category
}

interface Category {
    id: string;
    title: string;
    slug: string;
}

export async function generateMetadata(
    { params }: { params: Promise<{ blogId: string }> }
): Promise<Metadata> {
    const { blogId } = await params

    try {
        const res = await axios.get<BlogApi>(`https://inforbit.in/demo/ecoqual/api/blog/${blogId}`);
        const blog = res.data?.data;

        if (!blog) {
            return {
                title: 'Blogs Not Found | EcoQual',
                description: 'The product you are looking for could not be found.',
                alternates: {
                    canonical: getCanonicalUrl(`/blogs`),
                },
            };
        }

        const title = blog.title || `${blog.title} | EcoQual`;
        const description = blog.description || blog.description

        const canonical = getCanonicalUrl(`/blogs/${blog.slug}`);

        return {
            title,
            description,
            alternates: {
                canonical,
            },
            openGraph: {
                title,
                description,
                url: canonical,
                siteName: 'EcoQual',
                images: [
                    {
                        url: blog.blog_image,
                        width: 1200,
                        height: 630,
                        alt: blog.title,
                    },
                ],
                locale: 'en_IN',
                type: 'website',
            },
            twitter: {
                card: 'summary_large_image',
                title,
                description,
                images: [
                    blog.blog_image
                ],
            },
        };
    } catch (error) {
        console.error('❌ Error generating metadata:', error);
        return {
            title: 'EcoQual | Premium Healthcare Products',
            description: 'Explore EcoQual’s innovative hygiene and healthcare solutions.',
            alternates: {
                canonical: getCanonicalUrl(`/`),
            },
        };
    }
}
