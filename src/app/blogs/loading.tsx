import { CategorySkeleton } from '@/components/Skeleton'
import { Section, Wrapper } from '@/utils/Section'
import React from 'react'

export default function Loading() {
    return (
        <Section>
            <Wrapper>

                <div className="w-full relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {
                        Array.from({ length: 3 }).map((_, id) => (
                            <CategorySkeleton key={id} />
                        ))
                    }
                </div>
            </Wrapper>
        </Section>
    )
}
