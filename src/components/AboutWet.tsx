import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import { BadgeCheck } from 'lucide-react'
import Image from 'next/image'

export default function AboutWet() {
    const dt1: string[] = [
        'Safe for all skin types',
        'Prevents infection risks',
        'Enriched with aloe vera & essential oils',
        'Can be used warm or at room temperature'
    ]
    const dt2: string[] = [
        'Better hand protection',
        'Reduces cross-contamination',
        'Saves time – no rinsing required',
        'Cost-effective & eco-friendly'
    ]
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Revolutionizing Hygiene Care with <span className='font-inter text-secondry'>Wet Wash Gloves</span>
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            Convenience and care in one simple glove.
                        </Subheading>
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-[1fr_450px] grid-cols-1 gap-5'>
                        <div className="w-full h-full relative flex justify-center flex-col pr-5">
                            <h3 className='font-semibold lg:text-3xl md:text-xl text-base text-secondry'>
                                A New Standard in Hygiene Care
                            </h3>
                            <Subheading classname='text-left mt-3 max-w-2xl'>
                                Wet Wash Gloves are pre-moistened, disposable gloves infused with gentle cleansing solutions. Unlike traditional methods using basins and water, they require no rinsing and offer a more hygienic and convenient solution for daily care.
                            </Subheading>

                            <h3 className='mt-6 font-semibold lg:text-3xl md:text-xl text-base text-primary-dark'>
                                Gentle Care for Every Patient
                            </h3>

                            <div className='mt-4 w-full flex flex-col gap-3'>
                                {
                                    dt1.map((data) => (
                                        <div key={data} className='flex-1 flex gap-2 items-center'>
                                            <BadgeCheck color='#afcb1e' size={24} className='shrink-0' />
                                            <span className='md:text-base text-sm text-zinc-700 font-medium'>{data}</span>
                                        </div>
                                    ))
                                }
                            </div>
                            <h3 className='mt-6 font-semibold lg:text-3xl md:text-xl text-base text-primary-dark'>
                                Convenience for Caregivers
                            </h3>

                            <div className='mt-4 w-full flex flex-col gap-3'>
                                {
                                    dt2.map((data) => (
                                        <div key={data} className='flex-1 flex gap-2 items-center'>
                                            <BadgeCheck color='#afcb1e' size={24} className='shrink-0' />
                                            <span className='md:text-base text-sm text-zinc-700 font-medium'>{data}</span>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>

                        <div className="w-full h-full relative flex lg:justify-end justify-center items-center">
                            <Image src={'/images/img.png'} alt='image'
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
