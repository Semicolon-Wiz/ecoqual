import AboutUs, { OurImpact, OurMission, OurValues, OurVision } from '@/components/AboutUs'
import React from 'react'

export default function AboutPage() {
  return (
    <main>
      <AboutUs />
      <OurMission />
      <OurVision />
      <OurValues />
      <OurImpact />
    </main>
  )
}
