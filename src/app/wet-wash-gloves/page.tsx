import AboutWet from '@/components/AboutWet'
import React from 'react'
import { AllPageLinks, Benefites, Comparison, WetWashCard, WetWashDetails, WetWashHero, WetWashWorking, WhereToUse } from './Details'
import Details from '@/components/Details'
import FourthSection from '@/components/FourthSection'
import WetWash from '@/components/WetWash'
import { Metadata } from 'next'

export default function WetWashGlovesPage() {
    return (
        <main className='relative w-full bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-100'>
            <WetWashHero />
            <WetWashDetails />
            <WetWashCard />
            <AboutWet />
            <AllPageLinks />
            {/* <Benefites />
            <WetWashWorking />
            <WhereToUse />
            <Details />
            <FourthSection />
            <WetWash />
            <Comparison /> */}
        </main>
    )
}

export const metadata: Metadata = {
    title: 'Wet Wash Gloves by Ecoqual | Easy, Hygienic Bed-Bath Alternative',
    description: 'Keep hygiene simple with Ecoqual Wet Wash Gloves — soft, ready-to-use gloves for comfortable cleansing anytime, anywhere.',
    alternates: {
        canonical: 'https://www.ecoqual.in/wet-wash-gloves',
    },
    openGraph: {
        title: 'Wet Wash Gloves by Ecoqual | Easy, Hygienic Bed-Bath Alternative',
        description: 'Keep hygiene simple with Ecoqual Wet Wash Gloves — soft, ready-to-use gloves for comfortable cleansing anytime, anywhere.',
        url: 'https://www.ecoqual.in/wet-wash-gloves',
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
        title: 'Wet Wash Gloves by Ecoqual | Easy, Hygienic Bed-Bath Alternative',
        description: 'Keep hygiene simple with Ecoqual Wet Wash Gloves — soft, ready-to-use gloves for comfortable cleansing anytime, anywhere.',
        images: ['/images/hero/wet-hero.png'],
    },
};

