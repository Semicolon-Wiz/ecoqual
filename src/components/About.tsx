import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            About <span className='font-inter text-secondry'>Ecoqual Healthcare Solutions</span>
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            Our Mission: Redefining Hygiene in Healthcare
                        </Subheading>
                    </div>

                    <div className='relative flex-1 grid md:grid-cols-[1fr_450px] grid-cols-1 gap-5'>
                        <div className='w-full h-full relative flex justify-center flex-col pr-5'>
                            <p className='font-medium md:text-base text-sm text-zinc-700'>
                                EcoQual is built on care — for people, health, and everyday hygiene.
                                We create smart, economical products that make life safer and cleaner.
                                Every design reflects our belief that care should be easy and dignified.
                                At EcoQual, we don&apos;t just sell products — we help people care better.

                            </p>
                            <div className='mt-8 relative w-full flex gap-3'>
                                <Link href='/about' className='w-max text-white bg-primary md:text-base text-sm font-semibold px-5 py-2 transition-all duration-200 ease-linear hover:bg-[#849d13] rounded-full '>
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className='w-full h-full relative flex items-center justify-center'>
                            <Image src='/images/logo/logo.svg' width={400} height={200} alt='Ecoqual' className='w-[250px]' />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
