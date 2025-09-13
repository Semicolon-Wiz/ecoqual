import React from 'react'
import { Benefites, Comparison, WetWashWorking, WhereToUse } from './Details'

export default function page() {
    return (
        <main className='relative w-full'>
            <Benefites />
            <WetWashWorking />
            <WhereToUse />
            <Comparison />
        </main>
    )
}
