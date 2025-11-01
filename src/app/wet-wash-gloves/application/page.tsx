import React from 'react'
import { WhereToUse } from '../Details'
import WetWash from '@/components/WetWash'

export default function ApplicationPage() {
  return (
    <main className='relative w-full bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-100'>
        <WhereToUse />
        <WetWash />
    </main>
  )
}
