import AboutWet from '@/components/AboutWet'
import React from 'react'
import { AllPageLinks, Benefites, Comparison, WetWashDetails, WetWashHero, WetWashWorking, WhereToUse } from './Details'
import Details from '@/components/Details'
import FourthSection from '@/components/FourthSection'
import WetWash from '@/components/WetWash'

export default function WetWashGlovesPage() {
    return (
        <main className='relative w-full bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-100'>
            <WetWashHero />
            <WetWashDetails/>
            <AboutWet />
            <AllPageLinks/>
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
