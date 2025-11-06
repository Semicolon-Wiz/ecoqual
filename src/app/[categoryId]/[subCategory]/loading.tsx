import { ProductSkeleton } from '@/components/Skeleton'
import { Section, Wrapper } from '@/utils/Section'
import React from 'react'

export default function Loading() {
    return (
        <Section classname='bg-gray-100'>
            <Wrapper>
                <div className='relative w-full flex flex-col gap-8'>
                    <div className="animate-pulse text-center space-y-3">
                        <div className="h-7 bg-gray-200 rounded-md w-1/3 mx-auto" />
                        <div className="h-6 bg-gray-200 rounded-md w-2/3 mx-auto" />
                        <div className="h-6 bg-gray-200 rounded-md w-2/3 mx-auto" />
                    </div>

                    <div className='w-full relative grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 md:gap-y-10 gap-y-5'>
                        {
                            Array.from({ length: 6 }).map((_, id) => (
                                <ProductSkeleton key={id} />
                            ))
                        }
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
