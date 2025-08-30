import { ButtonPrimary, ButtonSecondry, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import React from 'react'

interface Data {
    title: string;
    summary: string;
    image: string;
}

export default function Hero() {
    const data: Data[] = [
        {
            title: 'Reduces infection risks',
            summary: 'Designed to minimize cross-contamination, Wet Wash Gloves significantly lower infection risks in critical healthcare settings.',
            image: '/images/hero/icon-01.svg'
        },
        {
            title: 'Enhances patient comfort',
            summary: 'Soft, soothing material ensures gentle care while preserving patient dignity during hygiene routines.',
            image: '/images/hero/icon-02.svg'
        },
        {
            title: 'Single-use & microwaveable',
            summary: 'Ready-to-use, disposable gloves can be warmed in seconds, ensuring comfort, hygiene, and practicality anytime, anywhere.',
            image: '/images/hero/icon-03.svg'
        },
        {
            title: 'Saves time for caregivers',
            summary: 'Quick and easy to use, they streamline daily care, allowing healthcare professionals to focus more on patient well-being.',
            image: '/images/hero/icon-04.svg'
        },
    ]
    return (
        <Section classname='bg-light-bg'>
            <Wrapper>
                <div className='w-full relative grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-5'>
                    <div className="w-full h-full relative flex flex-col justify-center md:items-start items-center">
                        <h1 className='font-extrabold lg:text-5xl md:text-4xl text-2xl text-primary-dark md:text-left text-center'>
                            Because Every Patient Deserves <span className='!font-inter text-secondry'>Safer Care</span>
                        </h1>
                        <Subheading classname='md:!text-xl md:text-left !mt-2 text-center max-w-lg'>
                            Wet Wash Gloves - A New Standard in Hygiene That&apos;s Convenient, Effective, and Cost-Saving
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

                <div className='relative w-full mt-14 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5'>
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
                </div>
            </Wrapper>
        </Section>
    )
}
