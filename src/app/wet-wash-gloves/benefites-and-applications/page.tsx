import React from 'react'
import { Benefites, Comparison, WetWashWorking, WhereToUse } from '../Details'
import Details from '@/components/Details'

export default function BenefitesAndApplications() {
    return (
        <main className='relative w-full'>
            <Benefites />
            <WetWashWorking />
            <WhereToUse />
            <Details/>
            <Comparison />
        </main>
    )
}
