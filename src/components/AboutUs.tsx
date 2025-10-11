import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import React from 'react'
import ImageCarousel from './ImageCarousel'

export default function AboutUs() {
    const data: string[] = [
        "/images/about/banner-01.jpg",
        "/images/about/banner-02.jpg"
    ]
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading classname='text-center max-w-2xl mx-auto'>
                            <span className='font-inter text-secondry'>Welcome to EQ</span> — Caring for Every Hand That Cares.
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            At EQ, we believe innovation begins with empathy.
                        </Subheading>
                    </div>

                    <div className='relative flex-1 grid lg:grid-cols-[1fr_450px] grid-cols-1 gap-5 bg-white p-5 rounded-3xl border border-gray-200'>
                        <div className='lg:px-3 w-full h-full relative flex justify-center flex-col md:order-1 order-2'>
                            <p className='font-medium md:text-base lg:text-lg text-sm text-zinc-700 leading-[1.3] flex flex-col gap-2'>
                                <span>
                                    We develop <strong> smart, sustainable hygiene and healthcare solutions </strong> that address real-world challenges across <strong>India and the globe.</strong>
                                </span>
                                <span>
                                    Our mission is to <strong> reshape the hygiene and healthcare landscape</strong> while <strong> creating greater health awareness</strong> in society.
                                </span>
                                <span>
                                    Driven by our core values of <strong>Economic and Quality</strong>, every EQ product is crafted with <strong>precision, safety, and trust,</strong> ensuring comfort and confidence in every touch.
                                </span>
                                <span>
                                    Together, we&apos;re not just creating products — we&apos;re <strong>building a healthier, more aware world.</strong>
                                </span>
                            </p>
                        </div>
                        <div className='w-full h-full relative flex items-center justify-center md:order-2 order-1'>
                            <ImageCarousel image={data} />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}

export function OurMission() {
    const data: string[] = [
        "/images/about/banner-02.jpg",
        "/images/about/banner-04.jpg"
    ]
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col gap-8'>

                    <div className='flex-1 text-center'>
                        <Heading>
                            When Hygiene Fails, <span className='font-inter text-secondry'>Everything Is at Risk</span>
                        </Heading>
                    </div>

                    <div className='relative flex-1 grid lg:grid-cols-[450px_1fr] grid-cols-1 gap-5 bg-white p-5 rounded-3xl border border-gray-200'>
                        <div className='w-full h-full relative flex items-center justify-center'>
                            <ImageCarousel image={data} />
                        </div>
                        <div className='w-full h-full relative flex justify-center flex-col'>
                            <p className='font-medium md:text-base lg:text-lg text-sm text-zinc-700 leading-[1.3] flex flex-col gap-2'>
                                <span>
                                    Hygiene isn&apos;t just about cleaning — it&apos;s about <strong>preserving life, dignity, and confidence.</strong>
                                </span>
                                <span>
                                    But in hospitals, workplaces, and community environments, keeping spaces safe is still a daily struggle.
                                </span>
                                <span>
                                    Traditional systems and outdated methods are often <strong>slow, inconsistent, and costly</strong> to maintain the standards people deserve.
                                </span>
                                <span>
                                    The result? <strong>Rising infections, wasted time, higher costs, and reduced confidence — for both caregivers and the communities they serve.</strong>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}

export function OurVision() {
    const data: string[] = [
        "/images/about/banner-05.jpg",
        "/images/about/banner-06.jpg"
    ]
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Why <span className='font-inter text-secondry'>Safety and Infection</span> Control Matter
                        </Heading>
                    </div>

                    <div className='relative flex-1 grid lg:grid-cols-[1fr_450px] grid-cols-1 gap-5 bg-white p-5 rounded-3xl border border-gray-200'>
                        <div className='lg:px-3 w-full h-full relative flex justify-center flex-col md:order-1 order-2'>
                            <p className='font-medium md:text-base lg:text-lg text-sm text-zinc-700 leading-[1.3] flex flex-col gap-2'>
                                <span>
                                    Clean environments are the <strong>first line of defence against infection</strong> and the foundation of trust in care.
                                </span>
                                <span>
                                    Yet organizations — from hospital wards to workplace corridors — continue to face challenges that compromise safety, efficiency, and well-being:
                                </span>
                            </p>
                            <ul className='mt-3 flex flex-col gap-1 pl-5 list-disc text-zinc-700'>
                                <li>
                                    <strong>Complex, Time-Heavy Processes </strong>that slow down essential work and reduce productivity.
                                </li>
                                <li>
                                    <strong>Infection Exposure </strong>resulting from improper sanitization or reuse of materials.
                                </li>
                                <li>
                                    <strong>Rising Operational Costs </strong>driven by waste, inefficiency, and frequent replenishment.
                                </li>
                                <li>
                                    <strong>Discomfort and Fatigue </strong>among caregivers, staff, and users due to inadequate hygiene systems.
                                </li>
                            </ul>
                        </div>
                        <div className='w-full h-full relative flex items-center justify-center md:order-2 order-1'>
                            <ImageCarousel image={data} />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}

export function OurValues() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col gap-8'>

                    <div className='flex-1 text-center'>
                        <Heading classname='text-center max-w-xl mx-auto'>
                            Our Commitment: <span className='font-inter text-secondry'>Smarter Solutions, Healthier Tomorrow</span>
                        </Heading>
                    </div>

                    <div className='relative flex-1 grid lg:grid-cols-[450px_1fr] grid-cols-1 gap-5 bg-white p-5 rounded-3xl border border-gray-200'>
                        <div className='w-full h-full relative flex items-center justify-center'>
                            <Image src='/images/about/4.png' width={400} height={200} alt='Ecoqual'
                                className='w-[350px]' />
                        </div>
                        <div className='w-full h-full relative flex justify-center flex-col'>
                            <p className='font-medium md:text-base lg:text-lg text-sm text-zinc-700 leading-[1.3] flex flex-col gap-2'>
                                <span>
                                    At EQ, we design with <strong>purpose — combining innovation, sustainability, and practicality to build smarter hygiene</strong> ecosystems for today&apos;s world.
                                </span>
                                <span>
                                    Our solutions are <strong>eco-conscious, accessible, and human-centric, created to simplify hygiene, safeguard health, and support those who care for others.</strong>
                                </span>
                                <span>
                                    We go beyond products to create systems of trust — where every touchpoint enhances:
                                </span>
                            </p>
                            <ul className='mt-3 flex flex-col gap-1 pl-5 list-disc text-zinc-700'>
                                <li>
                                    <strong>Simpler hygiene management</strong>
                                </li>
                                <li>
                                    <strong>Lower infection risk</strong>
                                </li>
                                <li>
                                    <strong>Improved safety, comfort, and efficiency</strong>
                                </li>
                            </ul>
                            <p className='mt-3 font-medium md:text-base lg:text-lg text-sm text-zinc-700 leading-[1.3] flex flex-col gap-2'>
                                <span>
                                    From healthcare to hospitality, from safety wear to sanitation, our mission is simple yet profound <strong>
                                        to make hygiene intelligent, sustainable, and deeply human.
                                    </strong>
                                </span>
                                <strong>
                                    At EQ, we&apos;re building a healthier, safer tomorrow — for every hand that cares.
                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}

export function OurImpact() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Ecoqual Making a Difference in Healthcar
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            Helping providers deliver safe efficient care across communities
                        </Subheading>
                    </div>

                    <div className='relative flex-1 grid lg:grid-cols-[1fr_450px] grid-cols-1 gap-5'>
                        <div className='w-full h-full relative flex justify-center flex-col pr-5 md:order-1 order-2'>
                            <p className='font-medium md:text-base lg:text-xl text-sm text-zinc-700'>
                                Every product we create carries the promise of better healthcare. From water-saving wet wash gloves that provide comfort and dignity to patients, to hospital consumables that protect frontline workers, Ecoqual products are helping healthcare providers deliver safer and more efficient care. By aligning with the goals of the National Health Mission, we continue to support infection control, elder care, and equitable access to essential products, making a meaningful difference in the lives of patients, caregivers, and communities across India.
                            </p>
                        </div>
                        <div className='w-full h-full relative flex items-center justify-center md:order-2 order-1'>
                            <Image src='/images/about/5.png' width={400} height={200} alt='Ecoqual'
                                className='w-[350px]' />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}