import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import React from 'react'

interface Data {
    title: string;
    summary: string;
    image: string;
}
export default function SecondComponent() {
    const data: Data[] = [
        {
            title: 'Time-Consuming',
            summary: 'Traditional bed baths require multiple steps, consuming valuable caregiver time that could be focused on direct patient care.',
            image: '/images/svg/icons/clock.svg'
        },
        {
            title: 'Risk of Infections',
            summary: 'Reusable cloths and wipes can spread bacteria, putting vulnerable patients at greater risk of hospital-acquired infections.',
            image: '/images/svg/icons/virus.svg'
        },
        {
            title: 'High Costs',
            summary: 'Frequent laundering, disposable wipes, and staff time add to healthcare costs, impacting efficiency and resources.',
            image: '/images/svg/icons/cost.svg'
        },
        {
            title: 'Patient Discomfort',
            summary: 'Conventional hygiene methods can cause discomfort, embarrassment, or even harm fragile skin, reducing overall care quality.',
            image: '/images/svg/icons/user.svg'
        },
    ]
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            When Hygiene Becomes a Challenge, <span className='!font-inter text-secondry'>Care Suffers</span>
                        </Heading>
                        <Subheading>
                            Traditional hygiene methods are slow, risky, and costly.
                        </Subheading>
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-[1fr_450px] grid-cols-1 gap-5'>
                        <div className="w-full h-full relative flex justify-center flex-col pr-5">
                            <h3 className='font-semibold lg:text-3xl md:text-xl text-base text-secondry'>
                                Why Hygiene in Healthcare Matters
                            </h3>
                            <Subheading classname='text-left mt-3 max-w-2xl'>
                                Maintaining proper hygiene in healthcare is critical for patient safety, but traditional methods like bed baths and wet wipes often fall short. Hospitals, elderly homes, and palliative care centers face ongoing challenges: they are time-consuming, increase the risk of infections, and can compromise patient comfort and dignity. These issues not only affect patient outcomes but also strain caregivers and increase healthcare costs.
                            </Subheading>
                            <div className='relative w-full mt-6 grid md:grid-cols-2 grid-cols-1 gap-2'>
                                {
                                    data.map((items, idx) => (
                                        <div className='w-full h-full flex gap-3 items-start bg-gray-100 p-3 py-5 rounded-2xl border border-gray-300 hover:bg-gray-100/50 transition-colors duration-200 ease-in-out' key={idx}>
                                            <div className='w-8 h-w-8 shrink-0'>
                                                <Image src={items.image} alt={items.title} width={56} height={56} className='w-8 h-8' />
                                            </div>
                                            <div className='flex-1 flex flex-col gap-1'>
                                                <h3 className='font-medium text-lg text-primary-dark leading-[1.2]'>
                                                    {items.title}
                                                </h3>
                                                <Subheading classname='!text-left leading-[1.2] !text-sm'>
                                                    {items.summary}
                                                </Subheading>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="w-full h-full relative flex lg:justify-end justify-center items-center">
                            <Image src={'/images/svg/second-section.svg'} alt='image'
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
