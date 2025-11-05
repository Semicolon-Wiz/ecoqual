import React from 'react'
import { ContributorMain } from '../Details'
import { Metadata } from 'next';

export default function page() {
  return (
    <main className='relative w-full'>
        <ContributorMain/>
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Contributor to NHM & NPHCE | Ecoqual Wet Wash Gloves',
  description: 'Ecoqual supports the National Health Mission (NHM) and National Programme for Health Care of the Elderly (NPHCE) with high-quality Wet Wash Gloves — enhancing patient hygiene & eldercare across India.',
  alternates: {
    canonical: 'https://www.ecoqual.in/wet-wash-gloves/contributor-nhm-nhpce-india',
  },
  openGraph: {
    title: 'Contributor to NHM & NPHCE | Ecoqual Wet Wash Gloves',
    description: 'Ecoqual supports the National Health Mission (NHM) and National Programme for Health Care of the Elderly (NPHCE) with high-quality Wet Wash Gloves — enhancing patient hygiene & eldercare across India.',
    url: 'https://www.ecoqual.in/wet-wash-gloves/contributor-nhm-nhpce-india',
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
    title: 'Contributor to NHM & NPHCE | Ecoqual Wet Wash Gloves',
    description: 'Ecoqual supports the National Health Mission (NHM) and National Programme for Health Care of the Elderly (NPHCE) with high-quality Wet Wash Gloves — enhancing patient hygiene & eldercare across India.',
    images: ['/images/hero/wet-hero.png'],
  },
};
