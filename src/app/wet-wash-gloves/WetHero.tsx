import { ButtonPrimary, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'

export default function WetHero() {
    return (
        <Section classname='bg-light-bg'>
            <Wrapper>
                <div className='w-full relative grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-5'>
                    <div className="w-full h-full relative flex flex-col justify-center md:items-start items-center">
                        <h1 className='font-extrabold lg:text-5xl md:text-4xl text-[28px] text-primary-dark md:text-left text-center md:mt-0 mt-5 leading-[1.3]'>
                            Redefining Hygiene with <span className='!font-inter text-secondry'>Wet Wash Gloves</span>
                        </h1>
                        <Subheading classname='md:!text-xl md:text-left !mt-2 text-center max-w-lg'>
                            A safer, faster, and more dignified alternative to traditional bed bathing.
                        </Subheading>
                        <ButtonPrimary classname='mt-8'>
                            Request a Demo
                        </ButtonPrimary>
                        <p className='mt-3 text-sm text-zinc-600'>
                            Trusted by caregivers, loved by patients
                        </p>
                    </div>

                    <div className="w-full h-full relative flex items-center md:justify-end justify-center">
                        <Image src={'/images/hero/hero-main.png'} width={800} height={450}
                            alt='Hero Image'
                            className='w-full h-auto max-w-[570px] ' />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
