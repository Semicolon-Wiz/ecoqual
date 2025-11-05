import ContactForm from '@/components/ContactForm'
import { Metadata } from 'next';
import React from 'react'

export default function Contact() {
  return (
    <main className='relative w-full bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-100'>
      <ContactForm />
    </main>
  )
}


export const metadata: Metadata = {
  title: 'Contact Ecoqual | Get in Touch for Hygiene & Healthcare Solutions',
  description: 'Reach out to Ecoqual for product inquiries, partnerships or customer support. Our team is ready to help with sustainable hygiene and healthcare solutions.',
  alternates: {
    canonical: 'https://www.ecoqual.in/contact',
  },
  openGraph: {
    title: 'Contact Ecoqual | Get in Touch for Hygiene & Healthcare Solutions',
    description: 'Reach out to Ecoqual for product inquiries, partnerships or customer support. Our team is ready to help with sustainable hygiene and healthcare solutions.',
    url: 'https://www.ecoqual.in/contact',
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
    title: 'Contact Ecoqual | Get in Touch for Hygiene & Healthcare Solutions',
    description: 'Reach out to Ecoqual for product inquiries, partnerships or customer support. Our team is ready to help with sustainable hygiene and healthcare solutions.',
    images: ['/images/logo/logo.svg'],
  },
};