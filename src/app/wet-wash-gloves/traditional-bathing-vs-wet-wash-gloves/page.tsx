import React from 'react'
import { Comparison } from '../Details'
import { Metadata } from 'next';

export default function page() {
    return (
        <main className='relative w-full bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-100'>
            <Comparison />
        </main>
    )
}

export const metadata: Metadata = {
    title: 'Traditional Bathing vs Wet Wash Gloves | Ecoqual Hygiene Comparison',
    description: 'Compare traditional bed-bathing methods with Ecoqual Wet Wash Gloves — discover faster cleansing, less water use, better skin care and efficiency in patient hygiene.',
    alternates: {
        canonical: 'https://www.ecoqual.in/wet-wash-gloves/traditional-bathing-vs-wet-wash-gloves',
    },
    openGraph: {
        title: 'Traditional Bathing vs Wet Wash Gloves | Ecoqual Hygiene Comparison',
        description: 'Compare traditional bed-bathing methods with Ecoqual Wet Wash Gloves — discover faster cleansing, less water use, better skin care and efficiency in patient hygiene.',
        url: 'https://www.ecoqual.in/wet-wash-gloves/traditional-bathing-vs-wet-wash-gloves',
        siteName: 'EcoQual Healthcare Solution',
        images: [
            {
                url: '/images/hero/wet-hero.png',
                width: 1200,
                height: 630,
                alt: 'EcoQual Healthcare Solution',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Traditional Bathing vs Wet Wash Gloves | Ecoqual Hygiene Comparison',
        description: 'Compare traditional bed-bathing methods with Ecoqual Wet Wash Gloves — discover faster cleansing, less water use, better skin care and efficiency in patient hygiene.',
        images: ['/images/hero/wet-hero.png'],
    },
};