import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image';
import React from 'react'

interface Data {
    title: string;
    summary: string;
    image: string;
}
export default function FourthSection() {
    const data: Data[] = [
        {
            title: 'Safe',
            summary: 'Reduces cross-contamination and infection risks with single-use, hygienic design trusted in healthcare environments.',
            image: '/images/svg/icons/safe.svg'
        },
        {
            title: 'Convenient',
            summary: 'Ready-to-use and microwaveable for patient comfort—no need for water, soap, or additional supplies.',
            image: '/images/svg/icons/convi.svg'
        },
        {
            title: 'Effective',
            summary: 'Infused with pH-balanced cleansers that protect delicate skin while ensuring thorough hygiene.',
            image: '/images/svg/icons/effective.svg'
        },
        {
            title: 'Economical',
            summary: 'Saves caregiver time, reduces laundry costs, and streamlines resources for healthcare facilities.',
            image: '/images/svg/icons/economical.svg'
        },
    ]
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Why Choose <span className='!font-inter text-secondry'>Wet Wash Gloves?</span>
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            Safe, Convenient, Effective, and Economical—everything modern healthcare needs in one simple solution.
                        </Subheading>
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
                        {
                            data.map((items, idx)=>(
                                <div className='w-full h-full bg-light-bg rounded-xl p-5 shadow' key={idx}>
                                    <Image src={items.image} width={64} height={64} alt={items.title} className='w-12 h-12'/>
                                    <h2 className='mt-8 font-semibold text-primary-dark lg:text-2xl md:text-xl text-base'>
                                        {items.title}
                                    </h2>
                                    <Subheading classname='text-left mt-2 leading-[1.2]'>
                                        {items.summary}
                                    </Subheading>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
