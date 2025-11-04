import { ButtonPrimary, ButtonSecondry, Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function UltrasoundGel() {
    return (
        <main className='relative w-full'>
            <Hero />
            <AboutUltrasoundGel />
        </main >
    )
}

function Hero() {
    return (
        <Section>
            <Wrapper>
                <div className='w-full relative grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-5'>
                    <div className="w-full h-full relative flex flex-col justify-center md:items-start items-center">
                        <h1 className='font-extrabold lg:text-5xl md:text-4xl text-[28px] text-primary md:text-left text-center md:mt-0 mt-5 leading-[1.3]'>
                            Engineered for <span className='!font-inter text-secondry'>Crystal-Clear Diagnostics</span>
                        </h1>
                        <Subheading classname='md:!text-xl md:text-left !mt-2 text-center max-w-xl'>
                            Our advanced ultrasound gel delivers superior acoustic performance and effortless glide for accurate, uninterrupted imaging.
                        </Subheading>
                        <div className='relative mt-10 flex items-center gap-2 md:justify-start justify-center'>
                            <ButtonPrimary>
                                Contact Us
                            </ButtonPrimary>
                            <ButtonSecondry>
                                View Demo
                            </ButtonSecondry>
                        </div>
                    </div>

                    <div className="w-full h-full relative flex items-center justify-center">
                        <Image src={'/images/hero/ultra.png'} width={800} height={450}
                            alt='Hero Image'
                            className='w-full h-auto max-w-[350px] ' />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
function AboutUltrasoundGel() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            EQ <span className='!font-inter text-secondry'>Ultrasound Gel</span>
                        </Heading>
                        <Subheading classname='max-w-2xl mx-auto'>
                            Trusted by professionals for its consistent texture, easy application, and unmatched clarity in every scan.
                        </Subheading>
                    </div>

                    <div className='relative flex-1 grid grid-cols-1 gap-5'>
                        <div className='w-full h-full relative flex flex-col pr-5 md:order-1 order-2'>
                            
                            <Subheading classname='text-left'>
                                EQ Ultrasound Gel is a premium, water-soluble gel designed to deliver smooth acoustic transmission and crystal-clear imaging for all standard ultrasound procedures. Developed with a focus on patient safety and equipment protection, the gel ensures maximum diagnostic accuracy while being gentle on the skin. Trusted by healthcare professionals, EQ Ultrasound Gel combines reliability, comfort, and quality, making it the preferred choice for hospitals, diagnostic labs, and clinics.
                            </Subheading>

                            <h3 className='mt-3 lg:text-2xl md:text-xl text-lg font-semibold text-primary'>
                                Key Benefits
                            </h3>
                            <ul className='mt-3 flex flex-col gap-0 md:text-base text-sm'>
                                <li>
                                    <strong className='text-zinc-700'>Hypoallergenic & Non-Irritant </strong> - Safe and gentle on all skin types.
                                </li>
                                <li>
                                    <strong className='text-zinc-700'>Excellent Acoustic Transmission </strong> - Ensures precise sound wave conduction for high-quality imaging.
                                </li>
                                <li>
                                    <strong className='text-zinc-700'>Water-Soluble & Non-Staining </strong> - Easy to clean, leaves no residue on skin or probes.
                                </li>
                                <li>
                                    <strong className='text-zinc-700'>Safe for Probes </strong> - Protects sensitive ultrasound probes from damage or staining.
                                </li>
                                <li>
                                    <strong className='text-zinc-700'>Easy Application </strong> - Smooth texture that spreads evenly without stickiness.
                                </li>
                            </ul>

                            <h3 className='mt-3 lg:text-2xl md:text-xl text-lg font-semibold text-primary'>
                                Available Packaging
                            </h3>
                            <ul className='mt-1 flex flex-col gap-0 md:text-base text-sm'>
                                <li>
                                    <strong className='text-zinc-700'>250 ml Bottles </strong> - Convenient for clinics and daily diagnostic use. (Carton of 100 units)
                                </li>
                                <li>
                                    <strong className='text-zinc-700'>5 Litre HDPE Containers </strong> - Cost-effective bulk packaging ideal for hospitals and diagnostic centers.
                                </li>
                            </ul>

                            <h3 className='mt-3 lg:text-2xl md:text-xl text-lg font-semibold text-primary'>
                                Why Choose EQ Ultrasound Gel?
                            </h3>
                            <ul className='mt-1 flex flex-col gap-0 md:text-base text-sm pl-6 list-disc'>
                                <li>Manufactured under strict quality standards for consistent performance.</li>
                                <li>Trusted by healthcare professionals for reliable, safe, and accurate imaging.</li>
                                <li>Designed to meet the needs of both high-volume hospitals and small diagnostic setups.</li>
                            </ul>

                        </div>

                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
