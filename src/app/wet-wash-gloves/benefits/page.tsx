import React from 'react'
import { Benefites } from '../Details'
import Details from '@/components/Details'
import { Metadata } from 'next';

export default function BenefitesPage() {
  return (
    <main className='relative w-full bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-100'>
      <Benefites />
      <Details />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Benefits of Wet Wash Gloves | Ecoqual | Safe & Hygienic Cleaning',
  description: 'Discover the key benefits of Ecoqual Wet Wash Gloves — quick, water-free hygiene for patients. Gentle, effective, and ideal for hospitals and home care.',
  alternates: {
    canonical: 'https://www.ecoqual.in/wet-wash-gloves/benefits',
  },
  openGraph: {
    title: 'Benefits of Wet Wash Gloves | Ecoqual | Safe & Hygienic Cleaning',
    description: 'Discover the key benefits of Ecoqual Wet Wash Gloves — quick, water-free hygiene for patients. Gentle, effective, and ideal for hospitals and home care.',
    url: 'https://www.ecoqual.in/wet-wash-gloves/benefits',
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
    title: 'Benefits of Wet Wash Gloves | Ecoqual | Safe & Hygienic Cleaning',
    description: 'Discover the key benefits of Ecoqual Wet Wash Gloves — quick, water-free hygiene for patients. Gentle, effective, and ideal for hospitals and home care.',
    images: ['/images/hero/wet-hero.png'],
  },
};
