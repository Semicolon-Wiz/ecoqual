import { Headset } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ContactButton() {
    return (
        <Link href={'/contact'} className='fixed w-14 h-14 bg-zinc-800 z-50 right-5 bottom-5 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200 ease-in'>
            <Headset className="text-white" size={28} />
        </Link>
    )
}
