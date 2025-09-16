import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import React from 'react'

export default function WetWash() {
    const steps = [
        {
            content: 'Tear across perforation above the zip lock, and open the zip lock pouch and remove 1 glove.',
            image: '/images/steps/step-1.png'
        },
        {
            content: 'Insert hand into the glove in between the two internal protective film layers. Immediately close zip lock to retain moisture in remaining gloves',
            image: '/images/steps/step-2.png'
        },
        {
            content: 'Wipe complete body using both sides of the glove.',
            image: '/images/steps/step-3.png'
        },
        {
            content: 'Once soiled then dispose glove and repeat the process with a second glove on the other hand.',
            image: '/images/steps/step-4.png'
        },
        {
            content: 'Pouch should be stored in a dry cool place and used within 5 days of opening, ensuring to keep the zip locked properly.',
            image: '/images/steps/step-5.png'
        },
    ]
    
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            How to use <span className='font-inter text-secondry'>Wet Wash Gloves</span>
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            Hygiene made simple—in just a few easy steps.
                        </Subheading>
                    </div>

                    <div className='relative w-full flex-1'>
                        {/* <Image src={'/images/products/wet-wash.png'} width={1200} height={800} alt='wet wash'
                        className='w-full h-auto object-cover'
                        /> */}
                        <div className='md:w-max mx-auto relative'>
                            <ul>
                                {
                                    steps.map((data, idx) => (
                                        <li className='relative flex lg:gap-10 md:gap-6 gap-3 md:items-start items-baseline' key={idx}>
                                            <div className={`before:absolute md:before:left-5 before:left-3 before:bg-primary before:w-[2px] before:z-0 ${idx !== steps.length - 1 ? 'before:h-full' : 'before:h-0' }`}>
                                                <div className='relative md:w-10 md:h-10 w-6 h-6 rounded-full bg-primary z-10' />
                                            </div>
                                            <div className={`relative ${idx !== steps.length - 1 ? 'pb-16' : 'pb-0' } flex-1 flex md:gap-10 gap-5 md:flex-row flex-col`}>
                                                <div className='relative max-w-md'>
                                                    <h2 className='font-semibold lg:text-3xl md:text-2xl text-lg text-primary'>
                                                        Step - 0{idx + 1}
                                                    </h2>
                                                    <p className='md:text-xl text-base text-gray-500 font-medium  pt-2'>
                                                        {data.content}
                                                    </p>
                                                </div>
                                                <Image src={data.image} alt='step' width={300} height={300} className='w-[280px] rounded-2xl' />
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
