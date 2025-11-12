import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AboutBioBhoomi() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading classname='max-w-3xl mx-auto'>
                            Empowering Healthcare Through <span className='!font-inter text-secondry'>Innovation and Indigenous Manufacturing</span>
                        </Heading>
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-[1fr_50px_480px] grid-cols-1 gap-5'>
                        <div className="w-full h-full relative flex justify-center flex-col lg:pr-2 pr-0 lg:order-1 order-3 ">
                            <h3 className='mt-3 lg:text-2xl md:text-xl text-lg font-semibold text-primary'>
                                Biobhoomi Consumables Pvt. Ltd.
                            </h3>
                            <Subheading classname='text-left mt-3 lg:max-w-2xl !text-sm'>
                                To streamline our growing operations and strengthen our focus on specialized healthcare consumables, <strong>Ecoqual Healthcare Solutions</strong> established <strong>Biobhoomi Consumables Pvt. Ltd.</strong> — a sister concern dedicated to advancing medical-grade manufacturing in India.
                                <br /><br />
                                <strong>Biobhoomi</strong> is a <strong>DIPP-certified healthcare enterprise</strong>, proudly incubated at <strong>AIC-BHU (Atal Incubation Centre, Banaras Hindu University).</strong> The company develops and supplies <strong>affordable, high-quality, and innovative medical consumables</strong> — such as <strong>ultrasound (USG) gel</strong> and other diagnostic essentials — addressing critical gaps in infection control and clinical efficiency.
                                <br />
                                Driven by a mission to deliver <strong>Made-in-India healthcare solutions</strong>, Biobhoomi aims to enhance <strong>patient safety, diagnostic accuracy, and accessibility,</strong> while reducing reliance on imported products. With a foundation built on <strong>innovation, compliance, and quality,</strong> Biobhoomi is poised to contribute meaningfully to both <strong>India&apos;s national healthcare mission</strong> and emerging <strong>global markets.</strong>
                                <br />
                                Together, <strong>Ecoqual and Biobhoomi</strong> represent a unified vision — creating sustainable, reliable, and future-ready solutions for healthcare professionals and institutions worldwide.
                            </Subheading>
                        </div>

                        <div className='order-2'></div>

                        <div className="w-full h-full relative flex lg:justify-end justify-center items-center lg:order-3 order-1 ">
                            <Image src={'/images/wet_wash/EQ.png'} alt='image'
                                width={1920}
                                height={1080}
                                className='w-full h-auto' />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
