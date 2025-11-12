import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AboutEQWet() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            EQ <span className='!font-inter text-secondry'>Wet Wash Gloves</span>
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            Science of Clean, Built for Care.
                        </Subheading>
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-[1fr_50px_480px] grid-cols-1 gap-5'>
                        <div className="w-full h-full relative flex justify-center flex-col lg:pr-2 pr-0 lg:order-1 order-3 ">
                            <Subheading classname='text-left mt-3 lg:max-w-2xl !text-sm'>
                                EQ Wet Wash Gloves represent the next generation of patient hygiene — a thoughtful fusion of science, safety, and comfort engineered for modern healthcare environments. Each glove is crafted with a high-quality soft spunlace outer layer, infused with gentle cleansing ingredients that refresh the skin without irritation, making them ideal for daily hygiene routines across hospitals, nursing homes, and elder care settings. Beneath the soft touch of the outer layer lies a protective inner film that functions as a complete barrier, preventing cross-contamination and safeguarding both caregivers and patients from avoidable infection risks. This intelligent two-layer construction ensures that hygiene is not only thorough but also safe, controlled, and clinically dependable.
                                <br />
                                As a single-use, waterless solution, EQ Wet Wash Gloves eliminate the need for basins, towels, and additional supplies, addressing one of the most pressing challenges in patient care — maintaining hygiene without strain on time or resources
                            </Subheading>
                            <Link href={'/wet-wash-gloves'}
                                className='w-max px-5 py-1.5 flex gap-1 items-center justify-center mt-6 bg-primary text-white rounded-full'
                            >
                                <ArrowRight size={20} />
                                Know More
                            </Link>
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
