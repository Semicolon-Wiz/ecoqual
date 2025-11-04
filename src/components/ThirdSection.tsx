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
                            What is <span className='!font-inter text-secondry'>Wet Wash Gloves</span>
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            Wet Wash Gloves deliver safety, efficiency, and dignity—reshaping caregiving for hospitals, elderly homes, and beyond.
                        </Subheading>
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-[1fr_450px] grid-cols-1 gap-5'>
                        <div className="w-full h-full relative flex justify-center flex-col pr-5">
                            <h3 className='font-semibold lg:text-3xl md:text-xl text-base text-secondry'>
                                A New Standard in Hygiene Care
                            </h3>
                            <Subheading classname='text-left mt-3 max-w-2xl'>
                                Traditional bed baths are water-heavy, time-consuming, and infection-prone. EQ Wet Wash Gloves offer a modern alternative: pre-moistened, single-use cleansing gloves designed to protect delicate skin, improve caregiver efficiency, and preserve dignity.
                                Microwave-safe for warmth, dermatologically tested for safety, and available in biodegradable options, they set a new benchmark for healthcare facilities, senior care, and home care services.
                            </Subheading>
                            <ButtonPrimary classname='mt-8 w-max'>
                                Discover How It Works
                            </ButtonPrimary>
                        </div>

                        <div className="w-full h-full relative flex lg:justify-end justify-center items-center">
                            <Image src={'/images/img.png'} alt='image'
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
