'use client';

import { BlogSkeleton } from "@/components/Skeleton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export interface Blog {
    id: number;
    title: string;
    slug: string;
    blog_image: string;
    description: string;
    paragraphs: Paragraph[]
}
export interface BlogApi {
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

export default function BlogContent({ blogId }: { blogId: string }) {

    async function FetchBlogs(blogId: string): Promise<Blog> {
        const response = await axios.get<BlogApi>(`https://inforbit.in/demo/ecoqual/api/blog/${blogId}`)
        return response.data.data;
    }

    const { data, error, isLoading } = useQuery<Blog, Error>({
        queryKey: ["blogs", blogId],
        queryFn: () => FetchBlogs(blogId),
        staleTime: 1000 * 60 * 5,
        enabled: Boolean(blogId),
    });

    if (!data && isLoading) {
        return <BlogSkeleton />
    }

    return (
        <>
            <h1 className='font-bold lg:text-4xl md:text-2xl text-xl text-primary leading-[1.3] '>
                {data?.title}
            </h1>
            <Image src={data?.blog_image ?? ''} alt={data?.title ?? ''} width={800} height={500} className='w-full  object-contain mt-5 rounded-lg' />
            <div className="mt-8 lg:text-base text-sm text-zinc-600 font-medium"
                dangerouslySetInnerHTML={{ __html: data?.description ?? '' }}
            />
            {
                data?.paragraphs.map((items: Paragraph) => (
                    <div key={items.id} className="relative w-full mt-5">
                        <h2 className="font-semibold text-zinc-800 lg:text-2xl md:text-lg text-base ">
                            {items.title}
                        </h2>
                        <div className="mt-1 lg:text-base text-sm text-zinc-600 font-medium"
                            dangerouslySetInnerHTML={{ __html: items?.description ?? '' }}
                        />
                        {
                            items.products.length > 0 && (
                                <div className="mt-2 bg-gray-50 rounded-2xl w-full p-4 grid lg:grid-col-3 md:grid-cols-3 grid-cols-1 gap-4">
                                    {
                                        items.products.map((product: Product) => (
                                            <div key={product.id} className="relative w-full bg-white rounded-lg p-3 ">
                                                <Link href={`/product/${product.category.slug}/${product.slug}`}>
                                                    <Image
                                                        src={product.image}
                                                        alt={product.title}
                                                        width={300}
                                                        height={200}
                                                        className="w-full h-56 object-cover rounded-lg"
                                                    />
                                                </Link>
                                                <span className="flex items-center justify-center px-4 py-1.5 text-xs text-neutral-700 bg-gray-100 w-max rounded-full mt-3">
                                                    {product.category.title}
                                                </span>
                                                <Link href={`/product/${product.category.slug}/${product.slug}`} className="block mt-1 font-medium !font-montserrat text-xl pl-2 text-primary">
                                                    {product.title}
                                                </Link>
                                                <div className="mt-1 text-sm text-zinc-600 font-medium line-clamp-2"
                                                    dangerouslySetInnerHTML={{ __html: product.description ?? '' }}
                                                />
                                                <Link
                                                    href={`/product/${product.category.slug}/${product.slug}`} className=" w-max block mt-3 text-blue-700 ml-auto text-sm">
                                                    View this product
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>
                ))
            }
        </>
    )
}
