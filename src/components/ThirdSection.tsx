import { ButtonPrimary, Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import React from 'react'

export default function ThirdSection() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            The Future of <span className='font-inter text-secondry'>Hygiene</span> in Healthcare
                        </Heading>
                        <Subheading>
                            Wet Wash Gloves deliver safety, efficiency, and dignity—reshaping caregiving for hospitals, elderly homes, and beyond.
                        </Subheading>
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-[1fr_450px] grid-cols-1 gap-5'>
                        <div className="w-full h-full relative flex justify-center flex-col pr-5">
                            <h3 className='font-semibold lg:text-3xl md:text-xl text-base text-secondry'>
                                A Smarter Way to Care
                            </h3>
                            <Subheading classname='text-left mt-3 max-w-2xl'>
                                Wet Wash Gloves are an innovative alternative to traditional bed baths and wet wipes. Designed for safety, comfort, and efficiency, these single-use gloves are infused with pH-balanced cleansers that protect fragile skin while ensuring superior hygiene. Easy to warm in a microwave for added comfort, they save caregivers time, reduce infection risks, and preserve patient dignity—setting a new standard for hygiene in hospitals, elderly care, and palliative settings worldwide.
                            </Subheading>
                            <ButtonPrimary classname='mt-8 w-max'>
                                Discover How It Works
                            </ButtonPrimary>
                        </div>

                        <div className="w-full h-full relative flex lg:justify-end justify-center items-center">
                            <Image src={'/images/product.png'} alt='image'
                                width={800}
                                height={500}
                                className='w-[450px]' />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
