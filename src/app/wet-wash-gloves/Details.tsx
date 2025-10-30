import { ButtonPrimary, ButtonSecondry, Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


interface Data {
    title: string;
    summary: string;
    icon: string;
    link?: string
}
type Content = {
    title: string;
    data: string;
}
interface NewData {
    title: string;
    summary: string;
    image: string;
}

export function WetWashHero() {
    const data: NewData[] = [
        {
            title: 'Reduces infection risks',
            summary: 'Designed to minimize cross-contamination, Wet Wash Gloves significantly lower infection risks in critical healthcare settings.',
            image: '/images/hero/icon-01.svg'
        },
        {
            title: 'Enhances patient comfort',
            summary: 'Soft, soothing material ensures gentle care while preserving patient dignity during hygiene routines.',
            image: '/images/hero/icon-02.svg'
        },
        {
            title: 'Single-use & microwaveable',
            summary: 'Ready-to-use, disposable gloves can be warmed in seconds, ensuring comfort, hygiene, and practicality anytime, anywhere.',
            image: '/images/hero/icon-03.svg'
        },
        {
            title: 'Saves time for caregivers',
            summary: 'Quick and easy to use, they streamline daily care, allowing healthcare professionals to focus more on patient well-being.',
            image: '/images/hero/icon-04.svg'
        },
    ]
    return (
        <Section>
            <Wrapper>
                <div className='w-full relative grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-5'>
                    <div className="w-full h-full relative flex flex-col justify-center md:items-start items-center">
                        <h1 className='font-extrabold lg:text-5xl md:text-4xl text-[28px] text-primary md:text-left text-center md:mt-0 mt-5 leading-[1.3]'>
                            Because Every Patient Deserves <span className='!font-inter text-secondry'>Safer Care</span>
                        </h1>
                        <Subheading classname='md:!text-xl md:text-left !mt-2 text-center max-w-xl'>
                            Wet Wash Gloves - A New Standard in Hygiene That&apos;s Convenient, Effective, and Cost-Saving
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

                    <div className="w-full h-full relative flex items-center md:justify-end justify-center">
                        <Image src={'/images/hero/wet-hero.png'} width={800} height={450}
                            alt='Hero Image'
                            className='w-full h-auto max-w-[570px] ' />
                    </div>
                </div>

                <div className='relative w-full mt-14 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3'>
                    {
                        data.map((items, idx) => (
                            <div className='w-full h-full flex gap-2 items-start bg-light-bg p-3 rounded-lg border border-primary ' key={idx}>
                                <div className='w-10 h-10 shrink-0'>
                                    <Image src={items.image} alt={items.title} width={40} height={40} className='w-10 h-10' />
                                </div>
                                <div className='flex-1 flex flex-col gap-1'>
                                    <h3 className='font-medium text-base text-primary'>
                                        {items.title}
                                    </h3>
                                    <Subheading classname='!text-left leading-[1.3] !text-xs'>
                                        {items.summary}
                                    </Subheading>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Wrapper>
        </Section>
    )
}
export function WetWashDetails() {
    const dt1 = [
        {
            title: 'Two-Sided Soft Fabric',
            content: 'Dual-textured surface offers gentle yet effective cleaning for all skin types.',
            icon: '/images/wet_wash/icon-01.svg'
        },
        {
            title: 'Mild Cleansing Solution',
            content: 'Infused with a skin-friendly, pH-balanced formula for lasting freshness.',
            icon: '/images/wet_wash/icon-02.svg'
        },
        {
            title: 'Pre-Moisturized & Rinse-Free',
            content: 'Ready-to-use gloves ensure hygiene anywhere, anytime — without water.',
            icon: '/images/wet_wash/icon-03.svg'
        },
    ]
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            What are Wet Wash Gloves?
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            Smart, water-free cleansing for modern hygiene needs.
                        </Subheading>
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-[1fr_480px] grid-cols-1 gap-5'>
                        <div className="w-full h-full relative flex justify-center flex-col pr-5 lg:order-1 order-2">
                            <Subheading classname='text-left mt-3 max-w-2xl !text-lg'>
                                EQ Wet Wash Gloves are pre-moistened, single-use cleansing gloves designed for easy and effective hygiene care without the need for water or soap. Scientifically developed and clinically tested, they support hospital hygiene standards while ensuring comfort, convenience, and skin protection.
                            </Subheading>

                            <Subheading classname='text-left mt-2 max-w-2xl !text-primary italic !font-normal !text-lg'>
                                Made with soft, two-sided fabric and a gentle cleansing solution, these gloves make cleaning quick, safe, and water-free — no rinsing required.
                            </Subheading>

                            <div className='mt-8 w-full grid grid-cols-2 gap-5'>
                                {
                                    dt1.map((data) => (
                                        <div key={data.title} className='w-full h-full p-5 bg-gray-50 border border-gray-300 rounded-2xl '>
                                            <div className='w-full flex gap-5 items-center'>
                                                <div className='shrink-0 w-12 h-12 rounded-full bg-primary p-2 '>
                                                    <Image src={data.icon} alt={data.title} width={36} height={36} />
                                                </div>
                                                <h2 className='font-semibold md:text-lg text-base text-primary leading-[1.2] '>
                                                    {data.title}
                                                </h2>
                                            </div>
                                            <p className='mt-3 font-medium text-base text-zinc-700'>
                                                {data.content}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>

                        <div className="w-full h-full relative flex lg:justify-end justify-center items-center lg:order-2 order-1">
                            <Image src={'/images/hero/wet-wash.png'} alt='image'
                                width={800}
                                height={500}
                                className='w-[550px]' />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
export function Benefites() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Benefits of <span className='font-inter text-secondry'>Wet Wash Gloves?</span>
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            A Hygienic, Efficient, and Patient-Centric Solution.
                        </Subheading>
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-[1fr_450px] grid-cols-1 gap-5'>
                        <Subheading classname='text-left mt-3 max-w-2xl'>
                            Wet Wash Gloves are transforming clinical hygiene practices by offering a fast, waterless, and highly effective alternative to traditional cleaning methods. In critical care and burn units, where patients are often highly vulnerable and the risk of infection is elevated, these gloves help prevent cross-contamination by eliminating the need for reusable textiles and water-based cleaning. During times of high patient load—such as outbreaks, seasonal surges, or emergencies—they enable healthcare staff to perform body cleansing in nearly half the time compared to conventional methods, significantly improving workflow efficiency. In situations where water access is limited, such as remote locations, night shifts, or resource-strapped wards, Wet Wash Gloves provide a completely water-independent hygiene solution. Moreover, in emergency scenarios like trauma admissions or intensive care intubations, where patients may be immobile or unconscious, the gloves allow for immediate and gentle hygiene without the need to move the patient, ensuring dignity and safety in urgent care environments.
                        </Subheading>
                        <Image src='/images/details/eco.png' width={450} height={400} alt='Wet Wash Gloves'
                            className='w-full h-auto'
                        />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
export function WetWashWorking() {
    const data: Data[] = [
        {
            title: 'Enhanced Hygiene',
            summary: 'Prevents cross-contamination in polytrauma, neurosurgery, and burn units. Supports NABH & HICC.',
            icon: '/images/benefite/icon-1.svg'
        },
        {
            title: 'Time-Saving',
            summary: 'Reduces cleaning time by over 50%. Ideal during peak load or staff shortages.',
            icon: '/images/benefite/icon-2.svg'
        },
        {
            title: 'No Water Needed',
            summary: 'Perfect for resource-limited areas, emergencies, or night shifts.',
            icon: '/images/benefite/icon-3.svg'
        },
        {
            title: 'Patient Comfort',
            summary: 'Gentle for post-op and immobile patients. No need to move them.',
            icon: '/images/benefite/icon-4.svg'
        },
        {
            title: 'Staff Relief',
            summary: 'Minimizes physical and mental fatigue for caregivers.',
            icon: '/images/benefite/icon-5.svg'
        },
        {
            title: 'Emergency Ready',
            summary: 'Ready-to-use solution for immediate hygiene needs.',
            icon: '/images/benefite/icon-6.svg'
        },
    ];
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Why Wet Wash Gloves <span className='font-inter text-secondry'>Work Better</span>
                        </Heading>
                        <Subheading classname='max-w-2xl mx-auto'>
                            Explore the key advantages that make Wet Wash Gloves a smarter, faster, and safer alternative to traditional patient hygiene methods.
                        </Subheading>
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                        {
                            data.map((items, idx) => (
                                <div className='relative w-full h-full p-5 bg-white border border-zinc-200 rounded-2xl' key={idx}>
                                    <div className='w-16 h-16 rounded-lg bg-neutral-100 flex items-center justify-center'>
                                        <Image src={items.icon} width={40} height={40} alt={items.title} />
                                    </div>
                                    <h2 className='mt-8 font-semibold text-primary-dark  md:text-xl text-base'>
                                        {items.title}
                                    </h2>
                                    <Subheading classname='text-left mt-4 leading-[1.3] !font-normal'>
                                        {items.summary}
                                    </Subheading>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
export function WhereToUse() {
    const data: Data[] = [
        {
            title: 'Hospital & Critical Care Units',
            summary: 'Wet Wash Gloves are especially suited for Intensive Care Units (ICUs), High Dependency Units (HDUs), polytrauma wards, and neurosurgery or burn care units where patients are often immobilized and traditional bathing methods can increase the risk of infection or injury. The gloves offer a safe, hygienic way to maintain cleanliness without moving the patient or disturbing medical dressings.',
            icon: '/images/details/icon-9.svg'
        },
        {
            title: 'Emergency & Disaster Settings',
            summary: 'In ambulances, disaster relief zones, or field hospitals, hygiene is critical, but water access is often limited. Wet Wash Gloves enable fast, effective cleaning in emergency admissions and trauma care—without requiring any external resources.',
            icon: '/images/details/icon-10.svg'
        },
        {
            title: 'Elderly and Long-Term Care',
            summary: 'In geriatric care, particularly for bedridden elderly, patients with dementia, or those with restricted mobility, Wet Wash Gloves provide a gentle, non-invasive hygiene solution that enhances dignity and comfort. They are especially valuable in nursing homes, rehabilitation centers, and home care environments.',
            icon: '/images/details/icon-12.svg'
        },
        {
            title: 'Post-Operative & Isolation Units',
            summary: 'Patients recovering from surgery or placed in isolation often cannot be moved for routine cleaning. Wet Wash Gloves allow for on-bed hygiene maintenance without risking cross-contamination or patient discomfort. Their single-use design aligns with infection control protocols in sensitive environments.',
            icon: '/images/details/icon-13.svg'
        },
        {
            title: 'Military, Remote, and Travel Medicine',
            summary: 'For military healthcare camps, remote medical units, or air and rail ambulances, Wet Wash Gloves are a compact, hygienic, and waterless cleaning option that ensures patient hygiene standards can still be met—even in non-clinical, outdoor, or mobile environments.',
            icon: '/images/details/icon-14.svg'
        },
    ]
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Application of <span className='font-inter text-secondry'>Wet Wash Gloves</span>
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            Versatile Use Across Diverse Clinical and Care Settings.
                        </Subheading>

                        <Subheading classname='max-w-3xl mx-auto mt-5 leading-[1.2]'>
                            Wet Wash Gloves are designed to address hygiene needs across a wide range of patient care environments. Their pre-moistened, ready-to-use format makes them ideal not only for hospitals but also for settings where access to water or mobility is limited.
                        </Subheading>
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                        {
                            data.map((items, idx) => (
                                <div className='relative w-full h-full p-5 bg-white border border-zinc-200 rounded-2xl' key={idx}>
                                    <div className='w-16 h-16 rounded-lg bg-neutral-100 flex items-center justify-center'>
                                        <Image src={items.icon} width={40} height={40} alt={items.title} />
                                    </div>
                                    <h2 className='mt-8 font-semibold text-primary-dark  md:text-xl text-base'>
                                        {items.title}
                                    </h2>
                                    <Subheading classname='text-left mt-4 leading-[1.3] !font-normal'>
                                        {items.summary}
                                    </Subheading>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
export function Comparison() {
    return (
        <Section classname='bg-primary'>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading classname='text-white'>
                            Traditional Bathing vs. Wet Wash Gloves
                        </Heading>
                        <Subheading classname='!text-white max-w-3xl mx-auto mt-2 leading-[1.2]'>
                            See how Wet Wash Gloves outperform conventional methods across every key metric — from time and hygiene safety to staff efficiency and water usage.
                        </Subheading>
                    </div>

                    <div className='flex-1 relative grid md:grid-cols-2 grid-cols-1 gap-5'>
                        <div className="w-full h-full pr-5">
                            <h3 className='md:text-2xl text-lg font-bold text-white text-center'>
                                Wet Wash Gloves
                            </h3>
                            <ul className='mt-5 list-decimal text-gray-50 md:text-xl text-base flex flex-col gap-5'>
                                <li>In contrast, Wet Wash Gloves need no water at all — they&apos;re pre-moistened and ready to use, making them ideal for water-scarce environments or emergencies.</li>
                                <li>Wet Wash Gloves cut this time down to just 3 to 5 minutes, enabling faster turnarounds in high-load situations.</li>
                                <li>Wet Wash Gloves are single-use and sterile, ensuring minimal risk and greater infection control in sensitive care settings.</li>
                                <li>Wet Wash Gloves lighten the load, reducing repetitive effort and simplifying hygiene tasks — especially during long shifts or emergencies.</li>
                            </ul>
                        </div>
                        <div className="w-full h-full pr-5">
                            <h3 className='md:text-2xl text-lg font-bold text-white text-center'>
                                Traditional Bathing
                            </h3>
                            <ul className='mt-5 list-decimal text-gray-50 md:text-xl text-base flex flex-col gap-5'>
                                <li>Traditional methods require 2-5 liters of water per patient, often involving buckets, basins, or showers.</li>
                                <li>With traditional cleaning routines, the average cleaning time is 10 to 15 minutes per patient — often longer for non-cooperative or immobile patients.</li>
                                <li>Traditional methods carry a moderate to high risk of cross-contamination, especially when reusable cloths or water containers are shared.</li>
                                <li>Manual cleaning with traditional methods can be physically taxing and time-consuming, adding to staff fatigue.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
export function Technical() {
    const contentOne: Content[] = [
        {
            title: 'Product Name',
            data: 'Wet Wash Gloves'
        },
        {
            title: 'Model Number',
            data: 'EQ-43'
        },
        {
            title: 'Fabric Used',
            data: 'Nonwoven Spunlace Fabric (Minimum 90 GSM, 80% Polyester, 20% Viscose)'
        },
        {
            title: 'Dimensions',
            data: '230 mm x 145 mm'
        },
        {
            title: 'Packaging',
            data: '5 Pieces per Resealable Poly Pack'
        },
        {
            title: 'Shelf Life',
            data: '2 Years'
        },
        {
            title: 'Scented',
            data: 'Yes'
        },
        {
            title: 'Sterile',
            data: 'No'
        },
        {
            title: 'Protective Inner Film',
            data: '100 Gauge (Food Grade Transparent)'
        },
    ];

    const contentTwo: Content[] = [
        {
            title: 'Shape',
            data: 'Rectangular'
        },
        {
            title: 'Colour',
            data: 'White'
        },
        {
            title: 'Embossing',
            data: 'Dot Embossing'
        },
        {
            title: 'Scented',
            data: 'Yes'
        },
        {
            title: 'Sterile',
            data: 'No'
        },
        {
            title: 'Protective Inner Film',
            data: '100 Gauge (Food Grade Transparent)'
        },
        {
            title: 'Shelf Life',
            data: '2 Years'
        },
        {
            title: 'Packaging',
            data: 'Resealable Poly Pack'
        }
    ];

    const contentThree: Content[] = [
        {
            title: 'Surface Disinfectant',
            data: 'Skin'
        },
        {
            title: 'Chemical Contains',
            data: 'No'
        },
        {
            title: 'Alcohol Contains',
            data: 'No'
        },
        {
            title: 'Dermatologically Tested',
            data: 'Yes'
        },
        {
            title: 'Skin Friendly',
            data: 'Yo'
        },
        {
            title: 'Material Composition',
            data: 'Nonwoven Spunlace Fabric'
        },
        {
            title: 'Safety Certifications',
            data: 'ISO 9001:2015'
        },
        {
            title: 'Startup India',
            data: 'DIPP164286'
        }
    ];

    const ingredients = [
        {
            sno: 1,
            ingredient: 'Water (Aqua)',
            function: 'Base Solvent',
            relevance: 'Ensures hydration, minimal irritation',
        },
        {
            sno: 2,
            ingredient: 'Aloe Vera Extract',
            function: 'Anti-inflammatory, soothing',
            relevance: 'Calms affected skin',
        },
        {
            sno: 3,
            ingredient: 'Glycerine',
            function: 'Humectant',
            relevance: 'Maintains hydration of dry, fragile skin',
        },
        {
            sno: 4,
            ingredient: 'Jojoba Oil',
            function: 'Skin barrier enhancer',
            relevance: 'Protects thin or peeling skin',
        },
        {
            sno: 5,
            ingredient: 'Ethyl Hexyl Glycerine',
            function: 'Emollient & Anti Microbial Agent',
            relevance: 'Prevents microbial colonization on weakened skin',
        },
        {
            sno: 6,
            ingredient: 'Sodium Benzoate',
            function: 'Preservative',
            relevance: 'Maintains product integrity by inhibiting microbial growth',
        },
    ];

    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            <span className='font-inter text-secondry'>Technical Details</span>
                        </Heading>
                        <Subheading classname='max-w-lg mx-auto'>
                            In-depth Product Specification | Functional Ingredients | Certificate of Analysis
                        </Subheading>
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-[1fr_550px] grid-cols-1 gap-5'>
                        <div className='relative w-full h-full flex flex-col max-w-xl gap-10'>
                            <div className='w-full relative'>
                                <h2 className='font-bold text-2xl text-primary'>
                                    Product Overview
                                </h2>
                                <ul className='mt-5 list-decimal pl-4'>
                                    {
                                        contentOne.map((data, idx) => (
                                            <li key={idx}>
                                                <strong className='font-montserrat text-zinc-700'>{data.title}:</strong> {data.data}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <Image src='/images/details/eco.png' width={450} height={400} alt='Wet Wash Gloves'
                            className='w-full h-auto'
                        />
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-[550px_1fr] grid-cols-1 gap-10'>
                        <Image src='/images/details/eco.png' width={450} height={400} alt='Wet Wash Gloves'
                            className='w-full h-auto lg:order-1 order-2 '
                        />
                        <div className='relative w-full h-full flex flex-col max-w-xl gap-10 lg:order-2 order-1 '>
                            <div className='w-full relative md:pl-10'>
                                <h2 className='font-bold text-2xl text-primary'>
                                    Product Specification
                                </h2>
                                <ul className='mt-5 list-decimal pl-4'>
                                    {
                                        contentTwo.map((data, idx) => (
                                            <li key={idx}>
                                                <strong className='font-montserrat text-zinc-700'>{data.title}:</strong> {data.data}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-[1fr_550px] grid-cols-1 gap-5'>
                        <div className='relative w-full h-full flex flex-col max-w-xl gap-10'>
                            <div className='w-full relative'>
                                <h2 className='font-bold text-2xl text-primary'>
                                    Functional Ingredient Breakdown
                                </h2>
                                <ul className='mt-5 list-decimal pl-4'>
                                    {
                                        contentThree.map((data, idx) => (
                                            <li key={idx}>
                                                <strong className='font-montserrat text-zinc-700'>{data.title}:</strong> {data.data}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <Image src='/images/details/eco.png' width={450} height={400} alt='Wet Wash Gloves'
                            className='w-full h-auto'
                        />
                    </div>

                    <div className='flex-1 relative w-full'>
                        <div className="w-full overflow-x-auto">
                            <table className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-md">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-sm font-semibold">S.No</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold min-w-40">Ingredient</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold min-w-48">Classification / Function</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold min-w-56">Relevance for Patients</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {ingredients.map((item) => (
                                        <tr
                                            key={item.sno}
                                            className="hover:bg-blue-50 transition duration-200"
                                        >
                                            <td className="px-4 py-3 text-gray-700 font-medium">{item.sno}</td>
                                            <td className="px-4 py-3 text-gray-700">{item.ingredient}</td>
                                            <td className="px-4 py-3 text-gray-700">{item.function}</td>
                                            <td className="px-4 py-3 text-gray-700">{item.relevance}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
export function ContributorMain() {
    const contentOne: Content[] = [
        {
            title: 'Water Scarcity',
            data: 'Conventional bed baths consume 2–5 litres of water per patient, creating inconsistent hygiene in water-stressed areas.'
        },
        {
            title: 'Infection Control',
            data: 'Shared basins and towels increase cross-contamination risks, leading to higher rates of HAIs, skin infections, and UTIs.'
        },
        {
            title: 'Time & Resource Intensive',
            data: 'Bed baths take 15–30 minutes per patient, reducing caregiver efficiency.'
        },
        {
            title: 'Patient Comfort & Dignity',
            data: 'Cold exposure, rough sponges, and limited privacy compromise comfort and dignity.'
        }
    ];
    const contentTwo: Content[] = [
        {
            title: 'Equity',
            data: 'Uniform quality hygiene care across rural and urban facilities.'
        },
        {
            title: 'Efficiency',
            data: 'Saves nursing time and reduces resource wastage.'
        },
        {
            title: 'Quality of Care',
            data: 'Better infection prevention and patient satisfaction.'
        },
        {
            title: 'Sustainability',
            data: 'Cuts dependency on water, laundry, and chemical disinfectants.'
        }
    ];
    const contentThree: Content[] = [
        {
            title: 'Reduction in HAIs',
            data: '≥30% in pilot facilities'
        },
        {
            title: 'Time Saved per Patient',
            data: '≥60%'
        },
        {
            title: 'Patient Satisfaction',
            data: '≥85% positive feedback'
        },
        {
            title: 'Cost Savings',
            data: ': ≥70% reduction in water & laundry expenses'
        }
    ];
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            <span className='font-inter text-secondry'>Contributor to NHM & NPHCE Policies of India</span>
                        </Heading>
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-[1fr_550px] grid-cols-1 gap-5'>
                        <div className='relative w-full h-full flex flex-col max-w-xl gap-10 lg:order-1 order-2'>
                            <div className='w-full relative'>
                                <h2 className='font-bold text-2xl text-primary'>
                                    Introduction
                                </h2>
                                <Subheading classname='text-left lg:!text-lg mt-3'>
                                    The National Health Mission (NHM) provides a framework for strengthening healthcare delivery across India. Within this framework, the National Programme for Health Care of the Elderly (NPHCE) focuses on specialized geriatric care through District Hospitals, Community Health Centres (CHCs), and Primary Health Centres (PHCs).
                                </Subheading>
                                <Subheading classname='text-left lg:!text-lg mt-3'>
                                    EQ Wet Wash Gloves have been proposed as an innovative hygiene solution to support NHM and NPHCE objectives, addressing systemic challenges in geriatric hygiene management such as water scarcity, infection control, patient comfort, and operational efficiency.
                                </Subheading>
                            </div>
                        </div>

                        <Image src='/images/about/why.png' width={450} height={400} alt='Wet Wash Gloves'
                            className='w-full h-auto lg:order-2 order-1'
                        />
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-[550px_1fr] grid-cols-1 gap-5'>

                        <Image src='/images/about/wet.png' width={450} height={400} alt='Wet Wash Gloves'
                            className='w-[350px] h-auto'
                        />

                        <div className='md:pl-10 relative w-full h-full flex flex-col gap-10'>
                            <div className='w-full relative'>
                                <h2 className='font-bold text-2xl text-primary'>
                                    Current Challenges in Geriatric Hygiene
                                </h2>
                                <Subheading classname='text-left lg:!text-lg mt-3'>
                                    Elderly patients, especially those who are bedridden or mobility-restricted, face significant hygiene gaps under existing practices.
                                </Subheading>
                                <ul className='mt-5 list-decimal pl-4'>
                                    {
                                        contentOne.map((data, idx) => (
                                            <li key={idx}>
                                                <strong className='font-montserrat text-zinc-700'>{data.title}:</strong> {data.data}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-[1fr_550px] grid-cols-1 gap-5'>
                        <div className='relative w-full h-full flex flex-col max-w-xl gap-10 lg:order-1 order-2'>
                            <div className='w-full relative'>
                                <h2 className='font-bold text-2xl text-primary'>
                                    EQ Wet Wash Gloves - A Policy-Aligned Solution
                                </h2>
                                <Subheading classname='text-left lg:!text-lg mt-3'>
                                    EQ Wet Wash Gloves offer a waterless, single-use, pre-moistened solution for full-body cleansing that is safe, efficient, and dignified.
                                </Subheading>
                                <h2 className='font-bold text-lg text-primary mt-5'>
                                    Key Benefits
                                </h2>
                                <ul className='mt-2 list-decimal pl-4'>
                                    <li> Zero water requirement </li>
                                    <li> Minimal cross-contamination risk </li>
                                    <li> Faster hygiene routine (6–8 minutes per patient) </li>
                                    <li> Improved patient dignity and comfort </li>
                                    <li> Reduced costs of water, laundry, and disinfectants </li>
                                </ul>
                            </div>
                        </div>

                        <Image src='/images/about/7.png' width={450} height={400} alt='Wet Wash Gloves'
                            className='w-full h-auto lg:order-2 order-1'
                        />
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-[550px_1fr] grid-cols-1 gap-5'>

                        <Image src='/images/about/9.png' width={450} height={400} alt='Wet Wash Gloves'
                            className='w-full h-auto'
                        />

                        <div className='md:pl-10 relative w-full h-full flex flex-col gap-10'>
                            <div className='w-full relative'>
                                <h2 className='font-bold text-2xl text-primary'>
                                    Alignment with NHM & NPHCE Objectives
                                </h2>

                                <ul className='mt-5 list-decimal pl-4'>
                                    {
                                        contentTwo.map((data, idx) => (
                                            <li key={idx}>
                                                <strong className='font-montserrat text-zinc-700'>{data.title}:</strong> {data.data}
                                            </li>
                                        ))
                                    }
                                </ul>

                                <h2 className='font-bold text-lg text-primary mt-5'>
                                    Supports NPHCE goals by
                                </h2>
                                <ul className='mt-5 list-decimal pl-4'>
                                    <li> Ensuring hygienic and dignified elder care. </li>
                                    <li> Reducing morbidity from preventable infections. </li>
                                    <li> Enabling community-based and home-based elderly care interventions. </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-[1fr_550px] grid-cols-1 gap-5'>
                        <div className='relative w-full h-full flex flex-col max-w-xl gap-10 lg:order-1 order-2'>
                            <div className='w-full relative'>
                                <h2 className='font-bold text-2xl text-primary'>
                                    Implementation Framework
                                </h2>

                                <h2 className='font-bold text-lg text-primary mt-5'>
                                    Phase 1: Pilot (6 months)
                                </h2>
                                <ul className='mt-1 list-decimal pl-4'>
                                    <li> Coverage: 10 District Hospitals + 20 CHCs under NPHCE </li>
                                    <li> Training: Orientation for nurses, ANMs, geriatric care attendants </li>
                                    <li>
                                        Monitoring Indicators :-
                                        <ul className='pl-4 list-disc'>
                                            <li> HAI incidence rates </li>
                                            <li> Nursing time utilization </li>
                                            <li> Patient comfort scores </li>
                                            <li> Resource utilization logs </li>
                                        </ul>
                                    </li>
                                </ul>

                                <h2 className='font-bold text-lg text-primary mt-5'>
                                    Phase 2: Statewide Scale-up
                                </h2>
                                <ul className='mt-1 list-decimal pl-4'>
                                    <li> Inclusion in Annual PIP under NHM&apos;s “Consumables for Geriatric Care” </li>
                                    <li> Centralized procurement via UPMSCL or NHM Procurement Cell </li>
                                    <li> Distribution to all NPHCE facilities, including home-based elderly care programs </li>
                                </ul>
                                <h2 className='font-bold text-lg text-primary mt-5'>
                                    Expected Measurable Outcomes
                                </h2>
                                <ul className='mt-5 list-decimal pl-4'>
                                    {
                                        contentThree.map((data, idx) => (
                                            <li key={idx}>
                                                <strong className='font-montserrat text-zinc-700'>{data.title}:</strong> {data.data}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <Image src='/images/details/eco.png' width={450} height={400} alt='Wet Wash Gloves'
                            className='w-full h-auto lg:order-2 order-1'
                        />
                    </div>

                    <div className='flex-1 relative '>
                        <Heading>
                            Conclusion
                        </Heading>
                        <Subheading classname='text-left'>
                            By integrating EQ Wet Wash Gloves, NHM and NPHCE can ensure superior infection control, improved patient dignity, and optimized resource utilization—making elderly care more sustainable, equitable, and efficient.
                        </Subheading>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
export function Packaging() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            <span className='font-inter text-secondry'>Packaging & Supply Details</span>
                        </Heading>
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-[1fr_550px] grid-cols-1 gap-5'>
                        <div className='relative w-full h-full flex flex-col gap-10 lg:order-1 order-2'>
                            <div className='w-full relative'>
                                <h2 className='font-bold text-2xl text-primary'>
                                    Packaging That Fits Every Setup
                                </h2>
                                <Subheading classname='text-left lg:!text-lg mt-3'>
                                    EQ Wet Wash Gloves are thoughtfully packaged to meet the diverse requirements of healthcare providers, caregivers, and institutions. Whether it is for individual patient care, small clinics, or large-scale hospital use, the gloves are available in multiple pack sizes that ensure convenience and flexibility. Each pouch is lightweight, easy to open, and hygienically sealed to maintain product safety until use.
                                </Subheading>
                                <Subheading classname='text-left lg:!text-lg mt-3'>
                                    The packaging is designed to support efficient distribution, storage, and inventory management, making it suitable for routine care as well as emergency or large-volume supply. From compact packs for bedside care to bulk cartons for institutional procurement, EQ Wet Wash Gloves provide a scalable solution that adapts to different levels of demand.
                                </Subheading>
                            </div>
                        </div>

                        <Image src='/images/details/eco.png' width={450} height={400} alt='Wet Wash Gloves'
                            className='w-full h-auto lg:order-2 order-1'
                        />
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-[1fr_550px] grid-cols-1 gap-5'>
                        <div className='relative w-full h-full flex flex-col gap-7 lg:order-1 order-2'>
                            <div className='w-full relative'>
                                <h2 className='font-bold text-2xl text-primary'>
                                    Packaging Options
                                </h2>
                                <ul className='mt-5 list-decimal flex flex-col gap-4 pl-4'>
                                    <li>
                                        Small Size Gloves
                                        <ul className='pl-4 list-disc'>
                                            <li>
                                                <strong className='font-montserrat text-zinc-700'>10 Pouches:</strong> 50 pcs in total
                                            </li>
                                            <li>
                                                <strong className='font-montserrat text-zinc-700'>20 Pouches:</strong> 100 pcs in total
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Standard Size Gloves
                                        <ul className='pl-4 list-disc'>
                                            <li>
                                                <strong className='font-montserrat text-zinc-700'>5 Pouches:</strong> 50 pcs in total
                                            </li>
                                            <li>
                                                <strong className='font-montserrat text-zinc-700'>10 Pouches:</strong> 100 pcs in total
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <h2 className='font-bold text-2xl text-primary mt-5'>
                                    Supply & Distribution
                                </h2>
                                <ul className='mt-3 list-decimal pl-4'>
                                    <li>
                                        <strong className='font-montserrat text-zinc-700'>Unit-based packs:</strong> Hygienic single-use pouches for direct patient care.
                                    </li>
                                    <li>
                                        <strong className='font-montserrat text-zinc-700'>Bulk cartons:</strong> Suitable for hospitals, nursing homes, and community health programs.
                                    </li>
                                    <li>
                                        <strong className='font-montserrat text-zinc-700'>Scalable supply model:</strong> From pilot projects to statewide procurement.
                                    </li>
                                    <li>
                                        <strong className='font-montserrat text-zinc-700'>Quality Assurance:</strong> Manufactured as per global quality standards, ensuring safety, reliability, and compliance.
                                    </li>
                                </ul>
                            </div>
                            <Link href='#' className='w-max text-white bg-primary md:text-base text-sm font-semibold px-5 py-2 transition-all duration-200 ease-linear hover:bg-[#849d13] rounded-full '>
                                Order Sample Pack
                            </Link>
                        </div>

                        <Image src='/images/details/eco.png' width={450} height={400} alt='Wet Wash Gloves'
                            className='w-full h-auto lg:order-2 order-1'
                        />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}



export function AllPageLinks() {
    const data: Data[] = [
        {
            title: 'Benefits of Wet Wash Gloves?',
            summary: 'A Hygienic, Efficient, and Patient-Centric Solution.',
            icon: '/images/details/icon-9.svg',
            link: 'wet-wash-gloves/benefits'
        },
        {
            title: 'Why Wet Wash Gloves Work Better',
            summary: 'Explore the key advantages that make Wet Wash Gloves a smarter, faster, and safer alternative to traditional patient hygiene methods.',
            icon: '/images/details/icon-10.svg',
            link: 'wet-wash-gloves/working'
        },
        {
            title: 'Application of Wet Wash Gloves',
            summary: 'Versatile Use Across Diverse Clinical and Care Settings.',
            icon: '/images/details/icon-12.svg',
            link: 'wet-wash-gloves/application'
        },
        {
            title: 'Key Features of Wet Wash Gloves',
            summary: 'Engineered for trust, safety, and ease.',
            icon: '/images/details/icon-13.svg',
            link: 'wet-wash-gloves/key-features'
        },
        {
            title: 'Why Choose Wet Wash Gloves?',
            summary: 'Safe, Convenient, Effective, and Economical—everything modern healthcare needs in one simple solution.',
            icon: '/images/details/icon-14.svg',
            link: 'wet-wash-gloves/why-wet-wash-gloves'
        },
        {
            title: 'How to use Wet Wash Gloves',
            summary: 'Hygiene made simple—in just a few easy steps.',
            icon: '/images/details/icon-14.svg',
            link: 'wet-wash-gloves/how-to-use-wet-wash-gloves'
        },
        {
            title: 'Traditional Bathing vs. Wet Wash Gloves',
            summary: 'See how Wet Wash Gloves outperform conventional methods across every key metric — from time and hygiene safety to staff efficiency and water usage.',
            icon: '/images/details/icon-14.svg',
            link: 'wet-wash-gloves/traditional-bathing-vs-wet-wash-gloves'
        },
    ]
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Application of <span className='font-inter text-secondry'>Wet Wash Gloves</span>
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            Versatile Use Across Diverse Clinical and Care Settings.
                        </Subheading>
                    </div>

                    <div className='flex-1 relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                        {
                            data.map((items, idx) => (
                                <div className='relative w-full h-full p-3 bg-white border border-zinc-200 rounded-2xl' key={idx}>
                                    <div className='w-16 h-16 rounded-lg bg-neutral-100 flex items-center justify-center'>
                                        <Image src={items.icon} width={40} height={40} alt={items.title} />
                                    </div>
                                    <h2 className='mt-8 font-semibold text-primary-dark  md:text-xl text-base'>
                                        {items.title}
                                    </h2>
                                    <Subheading classname='text-left mt-4 leading-[1.3] !font-normal line-clamp-2 '>
                                        {items.summary}
                                    </Subheading>
                                    <Link href={items.link ?? '#'} className='block mt-3 ml-auto text-blue-500 w-max '>
                                        Learn More
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}



