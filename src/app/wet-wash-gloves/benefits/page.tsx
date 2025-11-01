import React from 'react'
import { Benefites } from '../Details'
import Details from '@/components/Details'

export default function BenefitesPage() {
  return (
    <main className='relative w-full bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-100'>
        <Benefites />
        <Details />
    </main>
  )
}
