import React from 'react'
import { Packaging } from '../Details'
import { Metadata } from 'next';

export default function page() {
    return (
        <main className='relative w-full'>
            <Packaging />
        </main>
    )
}

export const metadata: Metadata = {
    title: 'Packaging & Supply of Wet Wash Gloves | Ecoqual',
    description: 'Explore how Ecoqual’s Wet Wash Gloves are packaged for safety and supplied with reliability. Customised packaging, efficient logistics and trusted delivery for healthcare partners.',
    alternates: {
        canonical: 'https://www.ecoqual.in/wet-wash-gloves/packaging-and-supply',
    },
    openGraph: {
        title: 'Packaging & Supply of Wet Wash Gloves | Ecoqual',
        description: 'Explore how Ecoqual’s Wet Wash Gloves are packaged for safety and supplied with reliability. Customised packaging, efficient logistics and trusted delivery for healthcare partners.',
        url: 'https://www.ecoqual.in/wet-wash-gloves/packaging-and-supply',
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
        title: 'Packaging & Supply of Wet Wash Gloves | Ecoqual',
        description: 'Explore how Ecoqual’s Wet Wash Gloves are packaged for safety and supplied with reliability. Customised packaging, efficient logistics and trusted delivery for healthcare partners.',
        images: ['/images/hero/wet-hero.png'],
    },
};
