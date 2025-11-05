import { InstitutionsList, MoreAboutUs, OurValues } from '@/components/AboutUs'
import { getCanonicalUrl } from '@/utils/seo';
import { Metadata } from 'next';
import React from 'react'

export default function AboutPage() {
  return (
    <main className='bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-100'>
      <MoreAboutUs />
      <InstitutionsList />
      <OurValues />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'About Ecoqual | Trusted Partner in Hygiene & Healthcare Solutions',
  description: 'Learn about Ecoqual’s mission to deliver sustainable hygiene and healthcare solutions. Driven by innovation, quality, and a commitment to safer living.',
  alternates: {
    canonical: 'https://www.ecoqual.in/about',
  },
  openGraph: {
    title: 'About Ecoqual | Trusted Partner in Hygiene & Healthcare Solutions',
    description: 'Learn about Ecoqual’s mission to deliver sustainable hygiene and healthcare solutions. Driven by innovation, quality, and a commitment to safer living.',
    url: 'https://www.ecoqual.in/about',
    siteName: 'EcoQual Healthcare Solution',
    images: [
      {
        url: 'https://www.ecoqual.in/images/logo/logo.svg',
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
    title: 'About Ecoqual | Trusted Partner in Hygiene & Healthcare Solutions',
    description: 'Learn about Ecoqual’s mission to deliver sustainable hygiene and healthcare solutions. Driven by innovation, quality, and a commitment to safer living.',
    images: ['https://www.ecoqual.in/images/logo/logo.svg'],
  },
};