import React from 'react'
import { Marquee } from './ui/marquee'
import Image from 'next/image'

export default function Sponsor() {
    const services = [
        '/images/sponsor/img-1.png',
        '/images/sponsor/img-2.jpg',
        '/images/sponsor/img-3.png',
        '/images/sponsor/img-4.jpg',
        '/images/sponsor/img-5.png',
        '/images/sponsor/img-6.jpg',
        '/images/sponsor/img-7.png',
        '/images/sponsor/img-8.jpg'
    ]
    return (
        <div className='relative w-full flex items-center md:py-3 py-1.5'>
            <Marquee pauseOnHover className='items-center md:gap-10 gap-5 [--duration:10s]'>
                {
                    services.map((data, idx) => (
                        <div key={idx} className='flex md:gap-10 gap-5'>
                            <Image src={data} alt='Our Sponsor'
                                width={150} height={150} className="md:w-30 w-16 object-contain" />
                        </div>
                    ))
                }
            </Marquee>
        </div>
    )
}
