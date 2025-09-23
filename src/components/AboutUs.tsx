import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import Link from 'next/link'
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
                                Ecoqual was established with a clear purpose – to make healthcare safer, cleaner, and more dignified through solutions that combine quality, affordability, and sustainability. Backed by <strong>BioBhoomi Consumables Pvt. Ltd.</strong>, we bring together advanced manufacturing, strict quality checks, and innovative thinking to create products that meet the real needs of healthcare providers and patients. What began as a simple idea has now grown into a trusted brand that supports hospitals, clinics, and institutions across India in maintaining high standards of hygiene and infection control.
                            </p>
                        </div>
                        <div className='w-full h-full relative flex items-center justify-center'>
                            <Image src='/images/about/1.png' width={400} height={200} alt='Ecoqual' className='w-[400px]' />
                        </div>
                    </div>
                </div>
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
                            <Image src='/images/about/2.png' width={400} height={200} alt='Ecoqual' className='w-[400px]' />
                        </div>
                        <div className='w-full h-full relative pl-5'>
                            <p className='font-medium md:text-base text-sm text-zinc-700'>
                                Our mission is to deliver reliable and affordable healthcare consumables that protect patients, support caregivers, and strengthen public health systems. We are dedicated to reducing infection risks in hospitals, ensuring comfort and dignity in patient care, and developing solutions that respect both people and the environment. By focusing on sustainable practices such as water conservation and eco-friendly innovation, we aim to make high-quality healthcare products accessible to every corner of the country, bridging the gap between need and availability.
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
