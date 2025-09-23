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
                            About <span className='font-inter text-secondry'>Ecoqual Healthcare Solutions</span>
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            Our Mission: Redefining Hygiene in Healthcare
                        </Subheading>
                    </div>

                    <div className='relative flex-1 grid md:grid-cols-[1fr_450px] grid-cols-1 gap-5'>
                        <div className='w-full h-full relative flex justify-center flex-col pr-5'>
                            <p className='font-medium md:text-base text-sm text-zinc-700'>
                                EcoQual Healthcare Solutions is dedicated to delivering innovative, economical, and sustainable hygiene products that enhance patient care and caregiver efficiency. With a strong focus on quality, safety, and convenience, EcoQual introduces its flagship innovation—EQ Wet Wash Gloves—a revolutionary alternative to traditional bed baths. Designed for hospitals, senior care facilities, home care, and community-based services, these pre-moistened, single-use gloves ensure effective cleaning without water, reducing the risk of infection while preserving patient dignity. Manufactured under ISO 13485 standards, they are dermatologically tested, pH-balanced, alcohol-free, and eco-friendly with biodegradable options. By minimizing water usage, energy consumption, and caregiver workload, EcoQual supports both healthcare excellence and environmental sustainability. Its solutions are versatile, extending to childcare, travel, food service, beauty, and emergency care. Guided by a vision of better hygiene with fewer resources, EcoQual Healthcare Solutions stands at the forefront of delivering safe, reliable, and efficient healthcare innovations.
                            </p>
                            <div className='mt-8 relative w-full flex gap-3'>
                                <Link href='/about' className='w-max text-white bg-primary md:text-base text-sm font-semibold px-5 py-2 transition-all duration-200 ease-linear hover:bg-[#849d13] rounded-full '>
                                    Read More
                                </Link>
                                <Link href='/product' className='w-max text-white bg-secondry md:text-base text-sm font-semibold px-5 py-2 transition-all duration-200 ease-linear hover:bg-[#068AC3] rounded-full '>
                                    View all Products
                                </Link>
                            </div>
                        </div>
                        <div className='w-full h-full relative flex items-center justify-center'>
                            <Image src='/images/about/1.png' width={400} height={200} alt='Ecoqual' className='w-[400px]' />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
