import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image';
import React from 'react'

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

interface Data {
    title: string;
    summary: string;
    icon: string;
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
                                <div className='relative w-full h-full p-5 border border-zinc-200 rounded-2xl' key={idx}>
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
                                <div className='relative w-full h-full p-5 border border-zinc-200 rounded-2xl' key={idx}>
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

type Content = {
    title: string;
    data: string;
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
                                <h2 className='font-bold md:text-2xl text-primary'>
                                    Product Overview
                                </h2>
                                <ul className='mt-5 list-decimal'>
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
                            className='w-full h-auto'
                        />
                        <div className='relative w-full h-full flex flex-col max-w-xl gap-10'>
                            <div className='w-full relative md:pl-10'>
                                <h2 className='font-bold md:text-2xl text-primary'>
                                    Product Specification
                                </h2>
                                <ul className='mt-5 list-decimal'>
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
                                <h2 className='font-bold md:text-2xl text-primary'>
                                    Functional Ingredient Breakdown
                                </h2>
                                <ul className='mt-5 list-decimal'>
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
                                        <th className="px-4 py-3 text-left text-sm font-semibold">Ingredient</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold">Classification / Function</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold">Relevance for Patients</th>
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