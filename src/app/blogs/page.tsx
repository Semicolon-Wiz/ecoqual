import BlogCard from '@/components/BlogCard'
import { Metadata } from 'next';
import React from 'react'

export default function BlogsPage() {
  return (
    <BlogCard />
  )
}

export const metadata: Metadata = {
  title: 'Ecoqual Blog | Hygiene & Healthcare Insights in India',
  description: 'Stay informed with Ecoqual’s blog — insights on hygiene systems, hospital consumables, sustainability in care and india’s evolving healthcare standards.',
  alternates: {
    canonical: 'https://www.ecoqual.in/blog',
  },
  openGraph: {
    title: 'Ecoqual Blog | Hygiene & Healthcare Insights in India',
    description: 'Stay informed with Ecoqual’s blog — insights on hygiene systems, hospital consumables, sustainability in care and india’s evolving healthcare standards.',
    url: 'https://www.ecoqual.in/blog',
    siteName: 'EcoQual Healthcare Solution',
    images: [
      {
        url: '/images/logo/logo.svg',
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
    title: 'Ecoqual Blog | Hygiene & Healthcare Insights in India',
    description: 'Stay informed with Ecoqual’s blog — insights on hygiene systems, hospital consumables, sustainability in care and india’s evolving healthcare standards.',
    images: ['/images/logo/logo.svg'],
  },
};