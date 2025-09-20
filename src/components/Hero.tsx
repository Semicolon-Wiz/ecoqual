import { ButtonPrimary, ButtonSecondry, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import React from 'react'

interface Data {
    title: string;
    summary: string;
    image: string;
}

export default function Hero() {
    // const data: Data[] = [
    //     {
    //         title: 'Housekeeping & Cleaning Supplies',
    //         summary: 'Eco-friendly sanitizers, phenyls, disinfectants, and multi-purpose cleaning agents ensure spotless hygiene across healthcare and corporate facilities.',
    //         image: '/images/hero/icon-01.svg'
    //     },
    //     {
    //         title: 'Hospital Consumables',
    //         summary: 'From sterile HIV kits to durable gowns, aprons, gloves, and masks, our consumables deliver safety and protection in every setting.',
    //         image: '/images/hero/icon-02.svg'
    //     },
    //     {
    //         title: 'Patient Care Essentials',
    //         summary: 'Products designed to support comfort and infection control across wards, ICUs, and operation theatres, ensuring better patient well-being.',
    //         image: '/images/hero/icon-03.svg'
    //     },
    //     {
    //         title: 'Wet Wash Gloves',
    //         summary: 'A modern hygiene solution that reduces infection risks, enhances patient comfort, and saves caregiver time with safe, disposable, and convenient use.',
    //         image: '/images/hero/icon-04.svg'
    //     },
    // ]
    return (
        <Section classname=''>
            <Wrapper>
                <div className='w-full relative grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-5'>
                    <div className="w-full h-full relative flex flex-col justify-center md:items-start items-center">
                        <h1 className='font-extrabold lg:text-5xl md:text-4xl text-[28px] text-primary md:text-left text-center md:mt-0 mt-5 leading-[1.3]'>
                            Ecoqual Sets the Standard in <span className='!font-inter text-secondry'>Hygiene Care</span>
                        </h1>
                        <Subheading classname='md:!text-xl md:text-left !mt-2 text-center max-w-xl'>
                            From cleaning supplies to medical essentials, Ecoqual delivers safer and more reliable solutions for healthcare.
                        </Subheading>
                        <div className='relative mt-10 flex items-center gap-2 md:justify-start justify-center'>
                            <ButtonPrimary>
                                Contact Us
                            </ButtonPrimary>
                            <ButtonSecondry>
                                Request Demo
                            </ButtonSecondry>
                        </div>
                    </div>

                    <div className="w-full h-full relative flex items-center md:justify-end justify-center">
                        <Image src={'/images/hero/hero-main.png'} width={800} height={450}
                            alt='Hero Image'
                            className='w-full h-auto max-w-[570px] ' />
                    </div>
                </div>

                {/* <div className='relative w-full mt-14 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5'>
                    {
                        data.map((items, idx) => (
                            <div className='w-full h-full flex gap-2 items-start' key={idx}>
                                <div className='w-8 h-8 shrink-0'>
                                    <Image src={items.image} alt={items.title} width={32} height={32} className='w-8 h-8' />
                                </div>
                                <div className='flex-1 flex flex-col gap-1'>
                                    <h3 className='font-medium text-lg text-primary-dark leading-[1.2]'>
                                        {items.title}
                                    </h3>
                                    <Subheading classname='!text-left leading-[1.2]'>
                                        {items.summary}
                                    </Subheading>
                                </div>
                            </div>
                        ))
                    }
                </div> */}
            </Wrapper>
        </Section>
    )
}
