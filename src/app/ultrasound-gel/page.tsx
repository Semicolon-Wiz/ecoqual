import { Metadata } from 'next'
import React from 'react'
import { AboutUltrasoundGel, UltraSoundHero } from './Details';

export default function UltrasoundGel() {
    return (
        <main className='relative w-full'>
            <UltraSoundHero />
            <AboutUltrasoundGel />
        </main >
    )
}

export const metadata: Metadata = {
    title: 'Ultrasound Gel | Ecoqual | High-Quality Medical Imaging Gel',
    description: 'Ecoqual Ultrasound Gel ensures clear imaging, patient comfort, and consistent conductivity. Non-irritating, non-greasy, and ideal for all ultrasound procedures.',
    alternates: {
        canonical: 'https://www.ecoqual.in/ultrasound-gel',
    },
    openGraph: {
        title: 'Ultrasound Gel | Ecoqual | High-Quality Medical Imaging Gel',
        description: 'Ecoqual Ultrasound Gel ensures clear imaging, patient comfort, and consistent conductivity. Non-irritating, non-greasy, and ideal for all ultrasound procedures.',
        url: 'https://www.ecoqual.in/ultrasound-gel',
        siteName: 'EcoQual Healthcare Solution',
        images: [
            {
                url: '/images/hero/ultra.png',
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
        title: 'Ultrasound Gel | Ecoqual | High-Quality Medical Imaging Gel',
        description: 'Ecoqual Ultrasound Gel ensures clear imaging, patient comfort, and consistent conductivity. Non-irritating, non-greasy, and ideal for all ultrasound procedures.',
        images: ['/images/hero/ultra.png'],
    },
};
