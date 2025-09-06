import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import React from 'react'

export default function Commitment() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Our Commitment to <span className='font-inter text-secondry'>Care</span>
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            Ecoqual Healthcare - where dignity meets innovation.
                        </Subheading>
                    </div>


                    <div className='flex-1 relative grid lg:grid-cols-[1fr_450px] grid-cols-1 gap-5'>
                        <div className="w-full h-full relative flex justify-center flex-col pr-5">
                            <h3 className='font-semibold lg:text-3xl md:text-xl text-base text-secondry'>
                                Why Hygiene in Healthcare Matters
                            </h3>
                            <Subheading classname='text-left mt-3 max-w-2xl'>
                                At Ecoqual Healthcare Solution, we believe that caregiving should be safe, dignified, and convenient. With our Wet Wash Gloves, we aim to make hygiene care simpler for caregivers while ensuring comfort and safety for patients. Whether in hospitals, care homes, or home care settings, our gloves are designed to support both caregivers and patients with trust and reliability.
                            </Subheading>
                        </div>

                        <div className="w-full h-full relative flex lg:justify-end justify-center items-center">

                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
