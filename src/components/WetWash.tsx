import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import React from 'react'

export default function WetWash() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            How <span className='font-inter text-secondry'>Wet Wash</span> Gloves Work
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            Hygiene made simple—in just a few easy steps.
                        </Subheading>
                    </div>

                    <div className='relative w-full flex-1'>
                        <Image src={'/images/products/wet-wash.png'} width={1200} height={800} alt='wet wash'
                        className='w-full h-auto object-cover'
                        />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
