import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'

export default function WhyUs() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Why Choose <span className='font-inter text-secondry'>EQ Solutions?</span>
                        </Heading>
                        <Subheading classname='max-w-md mx-auto'>
                            Trusted by healthcare professionals worldwide for safety, quality, and innovation.
                        </Subheading>
                    </div>

                    <div className='relative flex-1 grid md:grid-cols-[450px_1fr] grid-cols-1 gap-5'>
                        <div className='w-full h-full relative flex items-center justify-center '>
                            <Image src='/images/logo/logo.svg' width={400} height={200} alt='Ecoqual' className='w-[300px]' />
                        </div>
                        <div className='w-full h-full relative pl-5'>
                            <p className='font-medium md:text-base text-sm text-zinc-700'>
                                Because we care like you do — with heart, honesty, and purpose.
                                Our products are made to protect lives, save time, and bring comfort.
                                We blend quality and economy so care never feels like a compromise.
                                Choose EcoQual — where every product begins with empathy and ends in trust.
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
