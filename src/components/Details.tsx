'use client'
import Background from '@/utils/Background';
import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image';
import React, { useState } from 'react'

interface Details {
    title: string;
    content: string;
    icon: string;
}
export default function Details() {
    const details: Details[] = [
        {
            title: 'Dermatologically Tested',
            content: 'Clinically evaluated to ensure safety and gentleness, making it suitable for daily use on all skin types.',
            icon: '/images/details/icon-1.svg'
        },
        {
            title: 'Hypoallergenic & Safe',
            content: 'Formulated to minimize allergic reactions, ensuring it’s safe even for babies and individuals with sensitive skin.',
            icon: '/images/details/icon-2.svg'
        },
        {
            title: 'Natural Essential Oils',
            content: 'Clinically evaluated to ensure safety and gentleness, making it suitable for daily use on all skin types.',
            icon: '/images/details/icon-3.svg'
        },
        {
            title: 'Aloe Vera Moisturizing',
            content: 'Enriched with aloe vera extract to hydrate the skin, prevent dryness, and leave it soft and nourished.',
            icon: '/images/details/icon-4.svg'
        },
        {
            title: 'Two-Sided Glove Design',
            content: 'Made with soft spun lace fabric on both sides, offering better coverage and ease of cleaning.',
            icon: '/images/details/icon-5.svg'
        },
        {
            title: 'Pre-Moistened, No Rinse Needed',
            content: 'Ready-to-use gloves pre-soaked with cleansing solution, eliminating the need for water, soap, or rinsing.',
            icon: '/images/details/icon-6.svg'
        },
        {
            title: 'Microwave-Friendly',
            content: 'Can be safely warmed in the microwave for added comfort during winter or cold environments.',
            icon: '/images/details/icon-7.svg'
        },
        {
            title: 'Comfortable Size (16 × 22 cm)',
            content: 'Designed in a standard glove size for easy handling, ensuring a secure and comfortable grip for caregivers.',
            icon: '/images/details/icon-8.svg'
        },
    ]
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Key Features of <span className='font-inter text-secondry'>Wet Wash Gloves</span>
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            Engineered for trust, safety, and ease.
                        </Subheading>
                    </div>

                    <div className='relative flex-1 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                        {
                            details.map((items, idx) => (
                                <div key={idx} className='relative w-full h-full p-5 bg-white border border-zinc-200 rounded-2xl'>
                                    <div className='w-16 h-16 rounded-lg bg-neutral-100 flex items-center justify-center'>
                                        <Image src={items.icon} width={40} height={40} alt={items.title} />
                                    </div>
                                    <h3 className='mt-5 font-semibold  md:text-xl text-base text-primary-dark'>
                                        {items.title}
                                    </h3>
                                    <p className='mt-1 md:text-base text-sm text-zinc-600'>
                                        {items.content}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
