import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image';
import React from 'react'

interface Data {
    title: string;
    summary: string;
    image: string;
}

export default function WhereToUse() {
    const data: Data[] = [
        {
            title: 'Hospitals',
            summary: 'Ideal for patient care in wards, ICUs, and recovery rooms, helping maintain hygiene without the need for water or basins.',
            image: '/images/details/icon-9.svg'
        },
        {
            title: 'Home Care',
            summary: 'Perfect for bedridden patients, elderly care, or everyday hygiene needs at home, ensuring comfort and dignity.',
            image: '/images/details/icon-10.svg'
        },
        {
            title: 'Travel & On-the-Go Hygiene',
            summary: 'Convenient for long journeys, camping, or places with limited water access, offering a quick and refreshing clean-up anywhere.',
            image: '/images/details/icon-11.svg'
        },
    ]
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Where to Use <span className='font-inter text-secondry'>Wet Wash Gloves</span>
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            A versatile solution for every care setting.
                        </Subheading>
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                        {
                            data.map((items, idx) => (
                                <div className='relative w-full h-full p-5 border border-zinc-200 rounded-2xl' key={idx}>
                                    <div className='w-16 h-16 rounded-lg bg-neutral-100 flex items-center justify-center'>
                                        <Image src={items.image} width={40} height={40} alt={items.title} />
                                    </div>
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
