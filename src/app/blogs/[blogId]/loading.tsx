import { BlogSkeleton } from '@/components/Skeleton'
import { Section, Wrapper } from '@/utils/Section'
import React from 'react'

export default function Loading() {
    return (
        <main className='relative w-full'>
            <Section>
                <Wrapper>
                    <div className='w-full relative max-w-4xl mx-auto'>
                        <BlogSkeleton />
                    </div>
                </Wrapper>
            </Section>
        </main>
    )
}
