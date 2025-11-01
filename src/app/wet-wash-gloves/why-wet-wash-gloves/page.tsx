import FourthSection from '@/components/FourthSection'
import React from 'react'
import { WetWashWorking } from '../Details'

export default function page() {
    return (
        <main className='relative w-full bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-100'>
            <FourthSection />
            <WetWashWorking />
        </main>
    )
}
