import AboutWet from '@/components/AboutWet'
import React from 'react'
import { Benefites, Comparison, WetWashDetails, WetWashHero, WetWashWorking, WhereToUse } from './Details'
import Details from '@/components/Details'
import FourthSection from '@/components/FourthSection'
import WetWash from '@/components/WetWash'

export default function WetWashGlovesPage() {
    return (
        <main className='relative w-full'>
            <WetWashHero />
            <WetWashDetails/>
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
