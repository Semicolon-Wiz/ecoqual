import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NHM() {
    return (
        <Section classname='bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-100'>
            <Wrapper>
                <div className='w-full bg-white rounded-2xl shadow overflow-hidden'>
                    <div className='relative w-full'>
                        <div className='w-full relative grid md:grid-cols-2 grid-cols-1'>
                            <div className='relative'>
                                <Image src='/images/wet_wash/nhm.png' alt="National Health Mission" width={1920} height={1080} className='w-full h-full object-cover object-center' />
                            </div>
                            <div className='relative p-3 lg:p-7 md:p-5 flex-1 bg-gradient-to-r from-[#D0D0D0] to-white '>
                                <h3 className='lg:text-3xl md:text-2xl text-xl font-semibold'>
                                    Contributor to <span className='!font-inter text-secondry'>NHM & NPHCE Policies</span> of India
                                </h3>
                                <em className='block mt-3 text-blue-500 italic text-sm'>
                                    &quot;By integrating EQ Wet Wash Gloves, NHM and NPHCE can ensure superior infection control, improved patient dignity, and optimized resource utilization—making elderly care more sustainable, equitable, and efficient.&quot;
                                </em>
                                <Subheading classname='text-left lg:!text-sm !text-xs mt-3 !text-zinc-800'>
                                    The National Health Mission (NHM) provides a framework for strengthening healthcare delivery across India. Within this framework, the National Programme for Health Care of the Elderly (NPHCE) focuses on specialized geriatric care through District Hospitals, Community Health Centres (CHCs), and Primary Health Centres (PHCs).
                                </Subheading>
                                <Subheading classname='text-left lg:!text-sm !text-xs mt-3 !text-zinc-800'>
                                    EQ Wet Wash Gloves have been proposed as an innovative hygiene solution to support NHM and NPHCE objectives, addressing systemic challenges in geriatric hygiene management such as water scarcity, infection control, patient comfort, and operational efficiency.
                                </Subheading>
                                <Link href={'/wet-wash-gloves/contributor-nhm-nhpce-india'}
                                    className='w-max px-5 py-1.5 flex gap-1 items-center justify-center mt-6 bg-blue-600 text-white rounded-lg'
                                >
                                    <ArrowRight size={16} />
                                    Learn More About It
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
