'use client'
import { ButtonPrimary } from '@/utils/Section';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

interface MenuItem {
    key: string;
    name: string;
    path: string;
}

export default function NavBar() {
    const currentPath = usePathname();
    const menuItems: MenuItem[] = [
        {
            key: 'home',
            name: 'Home',
            path: '/'
        },
        {
            key: 'about',
            name: 'About',
            path: '/about'
        },
        {
            key: 'benefits',
            name: 'Benefits',
            path: '#'
        },
        {
            key: 'products',
            name: 'Products',
            path: '/products'
        },
        {
            key: 'how-it-work',
            name: 'How it Works',
            path: '/working'
        },
    ]
    return (
        <header className='relative w-full bg-light-bg'>
            <nav className='relative w-full max-w-7xl mx-auto px-5 py-2 flex items-center justify-between'>
                <div className='relative shrink-0 w-max'>
                    <Link href={'/'}>
                        <Image src={'/images/logo/logo.svg'} width={1000} height={600} alt='Ecoqual Healthcare Solutions' className='w-28 h-auto ' />
                    </Link>
                </div>

                <div className='relative w-max flex items-center gap-4'>
                    {
                        menuItems.map(items => (
                            <Link href={items.path} key={items.key} className={`relative text-base transition-all duration-200 ease-linear hover:text-secondry after:absolute after:bottom-0.5 after:h-[2px] after:bg-secondry  ${currentPath === items.path ? ' after:left-0 after:w-full text-secondry' : 'after:w-0 after:right-0 after:left-auto text-zinc-800'} `}>
                                {items.name}
                            </Link>
                        ))
                    }
                </div>

                <div className='relative w-max flex items-center gap-2'>
                    <div className='relative w-72 flex items-center gap-2 bg-neutral-100 rounded-full py-2 pl-5 pr-3'>
                        <input type="text" placeholder='Search items.....' className='h-full grow text-zinc-800 border-none outline-none font-montserrat font-medium ' />
                        <div className='shrink-0 w-7 h-full flex items-center justify-center'>
                            <Image src='/images/svg/icons/search-icon.svg' alt='Search Items' width={28} height={28} className='w-7 h-7 cursor-pointer' />
                        </div>
                    </div>
                    <ButtonPrimary>
                        Learn More
                    </ButtonPrimary>
                </div>
            </nav>
        </header>
    )
}
