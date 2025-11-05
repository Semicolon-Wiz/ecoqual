'use client';
import { Heading, MainHeading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import React from 'react'
import ImageCarousel from './ImageCarousel'
import { motion, scale } from 'motion/react'
import { ChevronsRight } from 'lucide-react';


export default function AboutUs() {
    const easeInOut: [number, number, number, number] = [0.42, 0, 0.58, 1];
    const leftVariant = {
        hidden: { opacity: 0, x: -80 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeInOut } },
    }
    const middleVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeInOut } },
    }
    const rightVariant = {
        hidden: { opacity: 0, x: 80 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeInOut } },
    }
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col gap-8 lg:gap-14'>
                    <div className='flex-1 text-center'>
                        <MainHeading>
                            <span className='!font-inter text-secondry'>EcoQual Healthcare Solutions </span>
                        </MainHeading>
                        <p className='md:text-2xl text-sm font-semibold text-primary-dark text-center'>
                            Caring for every hand that cares.
                        </p>
                        <Subheading classname='max-w-xl mx-auto'>
                            Towards Sustainable Innovation
                        </Subheading>
                    </div>

                    <motion.div
                        className='relative flex-1 grid lg:grid-cols-3 grid-cols-1 gap-5 bg-white'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <motion.div
                            className='w-full h-full relative flex flex-col bg-gray-50 p-5 border border-gray-300 rounded-2xl'
                            variants={leftVariant}
                        >
                            <h2 className='font-bold md:text-xl text-base leading-[1.2] '>
                                <span className='!font-inter text-secondry'>
                                    When Hygiene Fails, Everything Is at Risk
                                </span>
                            </h2>

                            <p className='lg:mt-5 mt-3 font-medium md:text-base text-sm text-zinc-700 leading-[1.2] flex flex-col gap-[6px]'>
                                <span>
                                    We develop smart, sustainable hygiene and healthcare solutions that address real-world challenges across India and the globe.
                                </span>
                                <span>
                                    Our mission is to reshape the hygiene and healthcare landscape while creating greater health awareness in society.
                                </span>
                                <span>
                                    Driven by our core values of Economic and Quality, every EQ product is crafted with precision, safety, and trust, ensuring comfort and confidence in every touch.
                                </span>
                                <span>
                                    Together, we&apos;re not just creating products — we&apos;re building a healthier, more aware world.
                                </span>
                            </p>
                        </motion.div>

                        <motion.div
                            variants={middleVariant}
                        >
                            <Image src='/images/about/about.jpg' alt='EcoQual Health Care Solutions' width={1920} height={1080} className='w-full h-full object-cover object-center rounded-2xl ' />
                        </motion.div>

                        <motion.div
                            variants={rightVariant}
                            className='w-full h-full relative flex flex-col bg-gray-50 p-5 border border-gray-300 rounded-2xl'
                        >
                            <h2 className='font-bold md:text-xl text-base leading-[1.2]'>
                                <span className='!font-inter text-secondry'>
                                    Preserving life, dignity, and confidence
                                </span>
                            </h2>
                            <p className='lg:mt-5 mt-3 font-medium md:text-base text-sm text-zinc-700 leading-[1.2] flex flex-col gap-[6px]'>
                                <span>
                                    Hygiene isn&apos;t just about cleaning — it&apos;s about preserving life, dignity, and confidence.
                                </span>
                                <span>
                                    But in hospitals, workplaces, and community environments, keeping spaces safe is still a daily struggle.
                                </span>
                                <span>
                                    Traditional systems and outdated methods are often slow, inconsistent, and costly to maintain the standards people deserve.
                                </span>
                                <span>
                                    The result? Rising infections, wasted time, higher costs, and reduced confidence — for both caregivers and the communities they serve.
                                </span>
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </Wrapper>
        </Section>
    )
}

export function OurMission() {
    const data: string[] = [
        "/images/about/new-02.png",
        "/images/about/banner-04.jpg"
    ]
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col gap-8 lg:gap-14'>

                    <div className='flex-1 text-center'>
                        <Heading>
                            When Hygiene Fails, <span className='!font-inter text-secondry'>Everything Is at Risk</span>
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto text-xl!'>
                            Preserving life, dignity, and confidence
                        </Subheading>
                    </div>

                    <div className='relative flex-1 grid lg:grid-cols-[450px_1fr] grid-cols-1 gap-5'>
                        <div className='w-full h-full relative flex items-center justify-center'>
                            <ImageCarousel image={data} />
                        </div>
                        <div className='w-full h-full relative flex justify-center flex-col'>
                            <p className='font-medium md:text-base lg:text-lg text-sm text-zinc-700 leading-[1.3] flex flex-col gap-2'>
                                <span>
                                    Hygiene isn&apos;t just about cleaning — it&apos;s about preserving life, dignity, and confidence.
                                </span>
                                <span>
                                    But in hospitals, workplaces, and community environments, keeping spaces safe is still a daily struggle.
                                </span>
                                <span>
                                    Traditional systems and outdated methods are often slow, inconsistent, and costly to maintain the standards people deserve.
                                </span>
                                <span>
                                    The result? Rising infections, wasted time, higher costs, and reduced confidence — for both caregivers and the communities they serve.
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
        "/images/about/new-03.png",
        "/images/about/banner-06.jpg"
    ]
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col gap-8 lg:gap-14'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Why <span className='!font-inter text-secondry'>Safety and Infection</span> Control Matter
                        </Heading>
                    </div>

                    <div className='relative flex-1 grid lg:grid-cols-[1fr_450px] grid-cols-1 gap-5'>
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
    const data: string[] = [
        "/images/about/banner-7.jpg",
    ]
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col gap-8 lg:gap-14'>

                    <div className='flex-1 text-center'>
                        <Heading classname='text-center max-w-xl mx-auto'>
                            Our Commitment: <span className='!font-inter text-secondry'>Smarter Solutions, Healthier Tomorrow</span>
                        </Heading>
                    </div>

                    <div className='relative flex-1 grid lg:grid-cols-[450px_1fr] grid-cols-1 gap-5 '>
                        <div className='w-full h-full relative flex items-center justify-center'>
                            <ImageCarousel image={data} />
                        </div>
                        <div className='w-full h-full relative flex justify-center flex-col'>
                            <p className='font-normal md:text-base lg:text-base text-sm text-zinc-700 leading-[1.3] flex flex-col gap-2'>
                                <span>
                                    At EQ, we design with purpose — combining innovation, sustainability, and practicality to build smarter hygiene  ecosystems for today&apos;s world.
                                </span>
                                <span>
                                    Our solutions are eco-conscious, accessible, and human-centric, created to simplify hygiene, safeguard health, and support those who care for others.
                                </span>
                                <span>
                                    We go beyond products to create systems of trust — where every touchpoint enhances:
                                </span>
                            </p>
                            <ul className='font-normal mt-3 flex flex-col gap-1 pl-5 list-disc text-zinc-700'>
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
                            <p className='mt-3 font-normal md:text-base lg:text-base text-sm text-zinc-700 leading-[1.3] flex flex-col gap-2'>
                                <span>
                                    From healthcare to hospitality, from safety wear to sanitation, our mission is simple yet profound to make hygiene intelligent, sustainable, and deeply human.
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

export function MoreAboutUs() {
    return (
        <Section classname="bg-white">
            <Wrapper>
                <div className="relative w-full flex flex-col gap-10">
                    <div className="text-center">
                        <MainHeading>
                            <span className="font-inter text-secondry">Inspired by Clean Innovation</span>
                        </MainHeading>
                        <Subheading classname="max-w-xl mx-auto">
                            Redefining hygiene with smarter, safer, and sustainable solutions.
                        </Subheading>
                    </div>

                    <div className="relative prose prose-zinc max-w-none leading-relaxed text-zinc-700 lg:text-base md:text-sm text-sm">

                        <div className="md:float-right md:ml-6 mb-4 w-full lg:w-[400px] md:w-[300px] relative rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/about/me.jpg"
                                alt="EcoQual Healthcare Solutions"
                                width={400}
                                height={300}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <h2 className='lg:text-2xl md:text-xl text-lg mb-2 font-semibold text-primary-dark leading-[1.2]'>
                            The significance of starting our business in Varanasi.
                        </h2>
                        <p>
                            <strong>EcoQual Healthcare Solutions</strong> founded in <strong>November 2019</strong> by <strong>Mr. Siddhant Mehra</strong>,
                            it emerged from a rich legacy in the traditional Banarasi silk trade,
                            combined with a vision to create meaningful impact through innovation and sustainability.
                        </p>
                        {/* <div className='flex flex-col gap-4'> */}

                            <p className='mt-3 text-justify'>
                                As cities in northern India faced escalating air pollution and rising levels of harmful particulate matter (PM 2.5),
                                Siddhant felt compelled to act. Drawing from his expertise in textiles and precision manufacturing,
                                he began exploring ways to protect people from polluted air. This journey led him to specialize in fabric innovation,
                                where he developed a deep understanding of filtration techniques and materials.
                            </p>

                            <p className='mt-3 text-justify'>
                                In 2020, as the COVID-19 pandemic caused global disruptions, EcoQual adapted rapidly to the growing need for
                                personal protective equipment. This pivot underscored the company&apos;s commitment to hygiene, protection, and preventive care,
                                and set the stage for our entry into a broader range of healthcare and sanitation solutions.
                                We expanded our offerings to include sanitizers, phenyls, detergents, and floor cleaners.
                            </p>

                            <p className='mt-3 text-justify'>
                                As the pandemic unfolded, we saw firsthand the challenges healthcare workers, particularly nurses, faced with exposure
                                to cross-contamination. This inspired a wave of innovation that led us to develop the
                                <strong> EcoQual Wet Wash Gloves</strong> in 2023 — a safer, more hygienic alternative to traditional patient sponging methods.
                                These gloves became a game-changer in caregiving standards, especially within hospitals and senior living facilities.
                            </p>

                            <p className='mt-3 text-justify'>
                                Our continued work in healthcare revealed another critical gap: the inconsistency and lack of professionalism in caregiver
                                and sanitation uniforms. This insight led to the creation of institutional uniforms, designed for both functionality and durability.
                                We&apos;ve proudly partnered with municipal bodies (Nagar Nigam) and contributed to <strong>G20 events</strong> by outfitting sanitation teams across various cities.
                            </p>

                            <p className='mt-3 text-justify'>
                                Furthermore, our close collaboration with hospitals and healthcare institutions highlighted the need for high-quality, sterile,
                                and ready-to-use surgical essentials. As a result, we expanded into Surgical Consumables, offering a comprehensive range of
                                sterile gowns, drapes, caps, masks, and customized procedure packs that enhance safety and efficiency for medical staff and patients.
                            </p>

                            <p className='mt-3 text-justify'>
                                To streamline our growing operations and focus more on specialized healthcare consumables, we established
                                <strong> Biobhoomi Consumables Pvt. Ltd.</strong>, a sister company that manufactures medical-grade products like ultrasound (USG) jelly,
                                reinforcing our commitment to excellence in healthcare.
                            </p>

                            <p className='mt-3 text-justify'>
                                From a single-product vision to a research-driven enterprise, EcoQual is dedicated to improving communities well-being.
                                Each milestone is a step toward our mission: to make life safer, cleaner, and more dignified through thoughtful design,
                                rigorous research, and responsible manufacturing.
                            </p>
                        {/* </div> */}

                        <p className="italic text-zinc-600 mt-6">
                            At EcoQual, innovation begins with a simple question:
                            <br />
                            <strong className="text-zinc-800">“How can we enhance everyday care through integrity and ingenuity?”</strong>
                            <br />
                            With every answer, we move closer to our vision of creating lasting, positive change.
                        </p>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}

export function InstitutionsList() {
    interface InstitutionCategory {
        name: string;
        institutions: string[];
        icon: string;
    }

    const institutionsData: InstitutionCategory[] = [
        {
            name: "Government",
            institutions: [
                "BLW Hospital (Railways)",
                "NER Hospital (Railways)",
                "MPMMMCC & HBC Varanasi & Muzaffarpur Bihar (Tata Cancer Hospital)",
                "Sir Sundarlal Hospital (BHU)",
                "LPS Cardiology Institute (Kanpur)",
                "Maa Vindhyawasini Autonomous State Medical College, Mirzapur",
                "Maharaja Balwant Singh District Hospital, Bhadohi",
                "District Woman Hospital, Jaunpur",
            ],
            icon: '/images/wet_wash/new-icon-01.svg'
        },
        {
            name: "NGO",
            institutions: ["Ram Krishna Mission Home of Service"],
            icon: '/images/wet_wash/new-icon-02.svg',
        },
        {
            name: "Private",
            institutions: [
                "Ashirwad Hospital, Varanasi",
                "Galaxy Hospital",
                "Shubham Hospital",
                "Apex Hospital",
                "Trimurti Hospital",
            ],
            icon: '/images/wet_wash/new-icon-03.svg',
        },
        {
            name: "Other Institutions",
            institutions: [
                "State Bank of India",
                "Nagar Nigam Varanasi",
                "ICICI Bank",
                "The Banaras Club",
                "Automobile Dealerships (Tata, Kia, Bajaj, Honda etc.)",
                "Sunbeam Group of Institutions",
            ],
            icon: '/images/wet_wash/new-icon-04.svg',
        }
    ];

    const bg = [
        "#85D0B1",
        "#9688E9",
        "#E87966",
        "#F2C94C"
    ]

    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            <span className='!font-inter text-secondry'>Institutions We Serve</span>
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            Proudly supplying sustainable hygiene products to hospitals NGOs and corporate institutions across India.
                        </Subheading>
                    </div>
                    <div className='relative w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-3 gap-2.5'>
                        {
                            institutionsData.map((value, idx) => (
                                <div
                                    key={idx + 2}
                                    style={{ backgroundColor: bg[idx] }}
                                    className={`w-full h-full relative p-3 lg:p-5 text-white rounded-xl `}>
                                    <span className='block w-full font-semibold text-2xl max-w-[200px]'>
                                        {value.name}
                                    </span>
                                    <div className='mt-10 w-full flex flex-col gap-1'>
                                        {
                                            value.institutions.map((item, id) => (
                                                <div key={id} className='flex items-center gap-2 text-sm'>
                                                    <ChevronsRight size={16} className='shrink-0' />
                                                    {item}
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <Image src={value.icon} alt={value.name} width={75} height={75}
                                        className='absolute top-3 right-3'
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}