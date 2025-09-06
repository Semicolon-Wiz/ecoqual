'use client'
import { ButtonPrimary, ButtonSecondry } from '@/utils/Section';
import { useLenisControl } from '@/utils/SmoothScroll';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

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
            key: 'wet-wash-gloves',
            name: 'Wet Wash Gloves',
            path: '/wet-wash-gloves'
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
        }
    ]
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { stopScroll, startScroll } = useLenisControl();

    useEffect(() => {
        if (isMenuOpen) {
            stopScroll();
        } else {
            startScroll();
        }
        return () => startScroll();
    }, [isMenuOpen, stopScroll, startScroll]);

    return (
        <header className='relative w-full bg-light-bg'>
            <nav className='relative w-full max-w-7xl mx-auto px-5 py-2 flex items-center justify-between'>
                <div className='relative shrink-0 w-max'>
                    <Link href={'/'}>
                        <Image src={'/images/logo/logo.svg'} width={1000} height={600} alt='Ecoqual Healthcare Solutions' className='w-28 h-auto ' />
                    </Link>
                </div>

                <div className='lg:flex hidden relative w-max items-center gap-4'>
                    {
                        menuItems.map(items => (
                            <Link href={items.path} key={items.key} className={`relative text-base transition-all duration-200 ease-linear hover:text-secondry after:absolute after:bottom-0.5 after:h-[2px] after:bg-secondry  ${currentPath === items.path ? ' after:left-0 after:w-full text-secondry' : 'after:w-0 after:right-0 after:left-auto text-zinc-800'} `}>
                                {items.name}
                            </Link>
                        ))
                    }
                </div>

                <ButtonPrimary classname='lg:block hidden'>
                    Learn More
                </ButtonPrimary>

                <button onClick={() => setIsMenuOpen((prev) => !prev)} className='lg:hidden w-12 h-12 flex items-center justify-center cursor-pointer bg-primary rounded-full '>
                    <Menu className='text-white w-7 h-7' />
                </button>
            </nav>

            <div className={`lg:hidden fixed inset-0 left-0 transition-transform duration-300 ease-linear bg-black/30 z-20 backdrop-blur-[4px] ${isMenuOpen ? 'translate-x-0' : ' -translate-x-full'} `} />

            <div className={`lg:hidden fixed z-40 inset-y-0 bg-primary max-w-[400px] w-full transition-transform duration-300 ease-linear p-5 overflow-hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className='w-full h-full relative'>
                    <div className='relative w-full flex justify-between'>
                        <Link href={'/'}>
                            <Image src={'/images/logo/logo.svg'} width={1000} height={600} alt='Ecoqual Healthcare Solutions' className='w-28 h-auto ' />
                        </Link>
                        <button className='w-10 h-10 bg-white rounded-full flex items-center justify-center border-none cursor-pointer' onClick={() => { setIsMenuOpen(false) }}>
                            <X />
                        </button>
                    </div>

                    <div className='w-full relative mt-5 flex flex-col gap-2'>
                        {
                            menuItems.map(items => (
                                <Link href={items.path} key={items.key} className={`relative text-xl transition-all font-medium duration-200 ease-linear hover:text-secondry ${currentPath === items.path ? 'text-secondry' : 'text-white'} `}
                                    onClick={() => { setIsMenuOpen(false) }}
                                >
                                    {items.name}
                                </Link>
                            ))
                        }
                    </div>

                    <ButtonSecondry classname='w-full bg-white !text-primary !rounded absolute bottom-0'
                        onClick={() => { setIsMenuOpen(false) }}>
                        Learn More
                    </ButtonSecondry>
                </div>
            </div>
        </header>
    )
}
