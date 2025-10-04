import { Section, Wrapper } from '@/utils/Section'
import React from 'react'
import BlogContent from './BlogContent'

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
