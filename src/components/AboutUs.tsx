import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Story of <span className='font-inter text-secondry'>Ecoqual Healthcare Solutions</span>
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            Innovative, economical, and sustainable hygiene products
                        </Subheading>
                    </div>

                    <div className='relative flex-1 grid md:grid-cols-[1fr_450px] grid-cols-1 gap-5'>
                        <div className='w-full h-full relative flex justify-center flex-col pr-5'>
                            <p className='font-medium md:text-base text-sm text-zinc-700'>
                                Ecoqual was established with a clear purpose – to make healthcare safer, cleaner, and more dignified through solutions that combine quality, affordability, and sustainability. Backed by BioBhoomi Consumables Pvt. Ltd., we bring together advanced manufacturing, strict quality checks, and innovative thinking to create products that meet the real needs of healthcare providers and patients. What began as a simple idea has now grown into a trusted brand that supports hospitals, clinics, and institutions across India in maintaining high standards of hygiene and infection control.
                            </p>
                        </div>
                        <div className='w-full h-full relative flex items-center justify-center'>
                            <Image src='/images/about/1.png' width={400} height={200} alt='Ecoqual'
                                className='w-[350px]' />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}

export function OurMission() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>

                    <div className='flex-1 text-center'>
                        <Heading>
                            Mission of <span className='font-inter text-secondry'>EQ Solutions!</span>
                        </Heading>
                        <Subheading classname='max-w-md mx-auto'>
                            Dedicated to reducing infection risks.
                        </Subheading>
                    </div>

                    <div className='relative flex-1 grid md:grid-cols-[450px_1fr] grid-cols-1 gap-5'>
                        <div className='w-full h-full relative flex items-center justify-center'>
                            <Image src='/images/about/2.png' width={400} height={200} alt='Ecoqual'
                                className='w-[350px]' />
                        </div>
                        <div className='w-full h-full relative pl-5'>
                            <p className='font-medium md:text-xl text-sm text-zinc-700'>
                                Our mission is to deliver reliable and affordable healthcare consumables that protect patients, support caregivers, and strengthen public health systems. We are dedicated to reducing infection risks in hospitals, ensuring comfort and dignity in patient care, and developing solutions that respect both people and the environment. By focusing on sustainable practices such as water conservation and eco-friendly innovation, we aim to make high-quality healthcare products accessible to every corner of the country, bridging the gap between need and availability.
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}

export function OurVision() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Ecoqual for <span className='font-inter text-secondry'>Safer and Cleaner Healthcare</span>
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            Creating hospitals that are safer facilities that are cleaner and care that respects patient dignity
                        </Subheading>
                    </div>

                    <div className='relative flex-1 grid md:grid-cols-[1fr_450px] grid-cols-1 gap-5'>
                        <div className='w-full h-full relative flex justify-center flex-col pr-5'>
                            <p className='font-medium md:text-xl text-sm text-zinc-700'>
                                At Ecoqual, our vision is to become a leader in sustainable healthcare innovation, building a future where hospitals are safer, facilities are cleaner, and patients receive care with dignity and trust. We see healthcare as more than treatment - it is about creating an environment where patients feel protected and caregivers feel empowered. Our long-term goal is to ensure that quality healthcare consumables are not a privilege but a basic right, available to every individual, regardless of location or circumstance.
                            </p>
                        </div>
                        <div className='w-full h-full relative flex items-center justify-center'>
                            <Image src='/images/about/3.png' width={400} height={200} alt='Ecoqual'
                                className='w-[350px]' />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}

export function OurValues() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>

                    <div className='flex-1 text-center'>
                        <Heading>
                            Ecoqual Principles of Trust Care Sustainability and Innovation
                        </Heading>
                        <Subheading classname='max-w-md mx-auto'>
                            Guiding every product and solution we create for healthcare.
                        </Subheading>
                    </div>

                    <div className='relative flex-1 grid md:grid-cols-[450px_1fr] grid-cols-1 gap-5'>
                        <div className='w-full h-full relative flex items-center justify-center'>
                            <Image src='/images/about/4.png' width={400} height={200} alt='Ecoqual'
                                className='w-[350px]' />
                        </div>
                        <div className='w-full h-full relative pl-5'>
                            <p className='font-medium md:text-xl text-sm text-zinc-700'>
                                The foundation of Ecoqual is built on values that guide us every day. We believe in trust, because the people who use our products rely on them to protect lives. We believe in care, because patients and caregivers deserve solutions designed with their safety and comfort in mind. We believe in sustainability, because true progress means protecting people while also protecting the planet. And above all, we believe in innovation that is practical, scalable, and capable of solving real-world problems in healthcare.
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}

export function OurImpact() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Ecoqual Making a Difference in Healthcar
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            Helping providers deliver safe efficient care across communities
                        </Subheading>
                    </div>

                    <div className='relative flex-1 grid md:grid-cols-[1fr_450px] grid-cols-1 gap-5'>
                        <div className='w-full h-full relative flex justify-center flex-col pr-5'>
                            <p className='font-medium md:text-xl text-sm text-zinc-700'>
                                Every product we create carries the promise of better healthcare. From water-saving wet wash gloves that provide comfort and dignity to patients, to hospital consumables that protect frontline workers, Ecoqual products are helping healthcare providers deliver safer and more efficient care. By aligning with the goals of the National Health Mission, we continue to support infection control, elder care, and equitable access to essential products, making a meaningful difference in the lives of patients, caregivers, and communities across India.
                            </p>
                        </div>
                        <div className='w-full h-full relative flex items-center justify-center'>
                            <Image src='/images/about/5.png' width={400} height={200} alt='Ecoqual'
                                className='w-[350px]' />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}