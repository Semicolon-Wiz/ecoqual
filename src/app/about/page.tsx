import AboutUs, { OurMission, OurValues, OurVision } from '@/components/AboutUs'
import React from 'react'

export default function AboutPage() {
  return (
    <main className='bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-100'>
      <AboutUs />
      <OurMission />
      <OurVision />
      <OurValues />
    </main>
  )
}
