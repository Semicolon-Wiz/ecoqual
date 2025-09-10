'use client'
import { ButtonPrimary, ButtonSecondry } from '@/utils/Section';
import { useLenisControl } from '@/utils/SmoothScroll';
import { ChevronDown, Menu, MoveUpRight, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { Fragment, useEffect, useState } from 'react'

interface MenuItem {
    key: string;
    name: string;
    path: string;
    submenu?: SubMenu[];
}
type SubMenu = Omit<MenuItem, "submenu">;

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
            path: '/products',
            submenu: [
                {
                    key: 'hand-sanitizer',
                    name: 'Hand Sanitizer',
                    path: '/product/hand-sanitizer',

                },
                {
                    key: 'disicfectant-floorcleaner',
                    name: 'Disicfectant Floor Cleaner',
                    path: '/product/disicfectant-floorcleaner',

                },
                {
                    key: 'glass-cleaner',
                    name: 'Glass Cleaner',
                    path: '/product/glass-cleaner',

                },
                {
                    key: 'surgical-gown',
                    name: 'Surgical Gown',
                    path: '/product/surgical-gown',

                },
            ]
        }
    ]
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
    const { stopScroll, startScroll } = useLenisControl();

    const toggleSubMenu = (key: string) => {
        setOpenSubMenu((prev) => (prev === key ? null : key));
    };

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
                            <Fragment key={items.key} >
                                <div className="relative group/menu">
                                    {
                                        items.key !== 'products' ? (
                                            <Link href={items.path} className={`relative text-base transition-all duration-200 ease-linear hover:text-secondry after:absolute after:bottom-0.5 after:h-[2px] after:bg-secondry  ${currentPath === items.path ? ' after:left-0 after:w-full text-secondry' : 'after:w-0 after:right-0 after:left-auto text-zinc-800'} `}>
                                                {items.name}
                                            </Link>

                                        ) : (
                                            <button type="button"
                                                className={`transition-all duration-200 ease-linear !font-inter cursor-pointer inline-flex items-center gap-1  text-base font-normal ${currentPath === items.path
                                                    ? "text-secondry"
                                                    : "text-zinc-800 hover:text-secondry"
                                                    }`}
                                            >
                                                {items.name}
                                                <ChevronDown className="transition-transform duration-200 ease-linear group-hover/menu:rotate-180" />
                                            </button>
                                        )}
                                    {items.key === 'products' && (
                                        <div
                                            className="absolute top-full right-0 mt-2 z-50 w-72 bg-primary rounded-xl shadow-md p-3 opacity-0 invisible translate-y-2 transition-all duration-200 group-hover/menu:opacity-100 group-hover/menu:visible group-hover/menu:translate-y-0 "
                                        >
                                            {items.submenu?.map((submenu) => (
                                                <Link
                                                    key={submenu.key}
                                                    href={submenu.path}
                                                    className="group/item flex items-center gap-2.5 px-3 py-1.5 rounded text-white hover:bg-warm hover:text-neutral-100 transition-colors duration-200"
                                                >
                                                    <MoveUpRight
                                                        className="w-4 shrink-0 transition-transform duration-200 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-white"
                                                    />
                                                    <span className="truncate">{submenu.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}

                                </div>
                            </Fragment>
                        ))
                    }
                </div>

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
                                <div className='relative' key={items.key}>
                                    {
                                        items.key !== 'products' ? (
                                            <Link href={items.path} className={`relative text-xl transition-all font-medium duration-200 ease-linear hover:text-secondry ${currentPath === items.path ? 'text-secondry' : 'text-white'} `}
                                                onClick={() => { setIsMenuOpen(false) }}
                                            >
                                                {items.name}
                                            </Link>
                                        ) : (
                                            <>
                                                <button type="button"
                                                    onClick={() => toggleSubMenu(items.key)}
                                                    className={`transition-all duration-200 ease-linear !font-inter cursor-pointer inline-flex items-center gap-1 text-base font-normal ${currentPath === items.path
                                                        ? "text-secondry"
                                                        : "text-white hover:text-secondry"
                                                        }`}
                                                >
                                                    {items.name}
                                                    <ChevronDown className={`transition-transform duration-200 ${openSubMenu === items.key ? "rotate-180" : ""
                                                        }`} />
                                                </button>
                                                <div
                                                    className={`relative z-50 transition-all duration-300 overflow-hidden ${openSubMenu === items.key
                                                        ? "max-h-[1000px] opacity-100 visible"
                                                        : "max-h-0 opacity-0 invisible"
                                                        }`}
                                                >
                                                    {items.submenu?.map(submenu => (
                                                        <Link
                                                            key={submenu.key}
                                                            href={submenu.path}
                                                            onClick={() => { setIsMenuOpen(false); setOpenSubMenu(null) }}
                                                            className="group/item flex items-center gap-2.5 px-3 py-1.5 rounded text-white transition-colors duration-200"
                                                        >
                                                            <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                                                            <span className="truncate">{submenu.name}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}
