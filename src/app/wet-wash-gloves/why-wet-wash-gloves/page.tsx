import FourthSection from '@/components/FourthSection'
import React from 'react'
import { WetWashWorking } from '../Details'
import { Metadata } from 'next';

export default function page() {
    return (
        <main className='relative w-full bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-100'>
            <FourthSection />
            <WetWashWorking />
        </main>
    )
}

export const metadata: Metadata = {
    title: 'Why Wet Wash Gloves Matter | Ecoqual | Comfort & Cleanliness',
    description: 'See why Ecoqual’s Wet Wash Gloves make a difference — gentle cleansing, no water needed, skin-friendly and easy for caregivers or family use at home.',
    alternates: {
        canonical: 'https://www.ecoqual.in/wet-wash-gloves/why-wet-wash-gloves',
    },
    openGraph: {
        title: 'Why Wet Wash Gloves Matter | Ecoqual | Comfort & Cleanliness',
        description: 'See why Ecoqual’s Wet Wash Gloves make a difference — gentle cleansing, no water needed, skin-friendly and easy for caregivers or family use at home.',
        url: 'https://www.ecoqual.in/wet-wash-gloves/why-wet-wash-gloves',
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
        title: 'Why Wet Wash Gloves Matter | Ecoqual | Comfort & Cleanliness',
        description: 'See why Ecoqual’s Wet Wash Gloves make a difference — gentle cleansing, no water needed, skin-friendly and easy for caregivers or family use at home.',
        images: ['/images/hero/wet-hero.png'],
    },
};
