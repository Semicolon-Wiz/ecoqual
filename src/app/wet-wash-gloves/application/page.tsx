import React from 'react'
import { WhereToUse } from '../Details'
import WetWash from '@/components/WetWash'
import { Metadata } from 'next';

export default function ApplicationPage() {
  return (
    <main className='relative w-full bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-100'>
      <WhereToUse />
      <WetWash />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Applications of Wet Wash Gloves | Ecoqual Care Settings',
  description: 'Discover how Ecoqual Wet Wash Gloves support hygiene in hospitals, long-term care, emergency and remote settings. Water-free, convenient & safe.',
  alternates: {
    canonical: 'https://www.ecoqual.in/wet-wash-gloves/application',
  },
  openGraph: {
    title: 'Applications of Wet Wash Gloves | Ecoqual Care Settings',
    description: 'Discover how Ecoqual Wet Wash Gloves support hygiene in hospitals, long-term care, emergency and remote settings. Water-free, convenient & safe.',
    url: 'https://www.ecoqual.in/wet-wash-gloves/application',
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
    title: 'Applications of Wet Wash Gloves | Ecoqual Care Settings',
    description: 'Discover how Ecoqual Wet Wash Gloves support hygiene in hospitals, long-term care, emergency and remote settings. Water-free, convenient & safe.',
    images: ['/images/hero/wet-hero.png'],
  },
};

