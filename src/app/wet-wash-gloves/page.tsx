import AboutWet from '@/components/AboutWet'
import Hero from '@/components/Hero'
import React from 'react'
import { Benefites, Comparison, WetWashWorking, WhereToUse } from './Details'
import Details from '@/components/Details'
import FourthSection from '@/components/FourthSection'
import WetWash from '@/components/WetWash'

export default function WetWashGlovesPage() {
    return (
        <main className='relative w-full'>
            <Hero />
            <AboutWet />
            <Benefites />
            <WetWashWorking />
            <WhereToUse />
            <Details />
            <FourthSection />
            <WetWash />
            <Comparison />
        </main>
    )
}
