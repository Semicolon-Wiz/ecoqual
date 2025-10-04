import React from 'react'
import InstaWidget from './InstaWidget'
import { Heading } from '@/utils/Section'

export default function Instagram() {
    return (
        <section className='bg-warm'>
            <div className='w-full max-w-7xl relative mx-auto px-6 flex flex-col gap-12'>
                <div className='w-full relative flex items-center flex-col'>
                    <Heading>
                        Follow us on <span className='text-primary !font-roboto'>Instagram</span>
                    </Heading>
                </div>

                <div className='relative w-full'>
                    <InstaWidget />
                </div>
            </div>
        </section>
    )
}
