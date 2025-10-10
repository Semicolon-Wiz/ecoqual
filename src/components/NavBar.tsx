'use client'
import { useLenisControl } from '@/utils/SmoothScroll';
import { ChevronDown, Menu, MoveUpRight, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import { useQuery } from "@tanstack/react-query";

interface MenuItem {
    key: string;
    name: string;
    path: string;
    submenu?: SubMenu[];
}
type SubMenu = Omit<MenuItem, 'submenu'>

interface Category {
    title: string;
    slug: string;
}

interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

const fetchCategories = async (): Promise<Category[]> => {
    const res = await axios.get<ApiResponse<Category[]>>(
        "https://inforbit.in/demo/ecoqual/api/menu"
    );
    return res.data.data;
};


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
            name: 'About EcoQual',
            path: '/about'
        },
        {
            key: 'wet-wash-gloves',
            name: 'Wet Wash Gloves',
            path: '/wet-wash-gloves',
            submenu: [
                {
                    key: 'wet-wash-gloves',
                    name: 'Wet Wash Gloves',
                    path: '/wet-wash-gloves',
                },
                {
                    key: 'wet-wash-gloves-technical-details',
                    name: 'Technical Details',
                    path: '/wet-wash-gloves/technical-details',
                },
                {
                    key: 'wet-wash-gloves-contributor',
                    name: 'Contributor to NHM & NPHCE Policies of India',
                    path: '/wet-wash-gloves/contributor',
                },
                {
                    key: 'wet-wash-gloves-packaging-and-supply',
                    name: 'Packaging & Supply Details',
                    path: '/wet-wash-gloves/packaging-and-supply',
                },
            ]
        },
        {
            key: 'products',
            name: 'Other EQ Products',
            path: '/products',
            submenu: [
                {
                    key: 'house-keeping-products',
                    name: 'House Keeping Products',
                    path: '/product/house-keeping',

                },
                {
                    key: 'surgical-products',
                    name: 'Surgical Products',
                    path: '/product/surgical',

                },
                {
                    key: 'institutional-uniforms',
                    name: 'Institutional Uniforms',
                    path: '/product/institutional',

                },
                {
                    key: 'kits',
                    name: 'Kits',
                    path: '/product/kits',

                }
            ]
        },
        {
            key: 'blogs',
            name: 'Blogs',
            path: '/blogs'
        },
        {
            key: 'contact',
            name: 'Contact',
            path: '/contact'
        }
    ]
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
    const { stopScroll, startScroll } = useLenisControl();
    const [showHeader, setShowHeader] = useState(true);

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

    const { data, error, isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: fetchCategories,
        staleTime: 1000 * 60 * 5,
    });

    useEffect(() => {
        let lastScroll = window.scrollY;
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll < lastScroll - 10) {
                setShowHeader(true);
            } else if (currentScroll > lastScroll + 10) {
                setShowHeader(false);
            }
            lastScroll = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            <header className={`sticky top-0 bg-white z-20 w-full transition-all duration-300 ease-in-out border-b border-b-gray-200 ${showHeader ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}>
                <nav className='relative w-full max-w-7xl mx-auto px-5 py-2 flex items-center justify-between'>
                    <div className='relative shrink-0 w-max'>
                        <Link href={'/'}>
                            <Image src={'/images/logo/logo.svg'} width={1000} height={600} alt='Ecoqual Healthcare Solutions' className='lg:w-24 md:w-20 w-16 h-auto' />
                        </Link>
                    </div>

                    <div className='lg:flex hidden relative w-max items-center gap-2'>
                        {
                            menuItems.map(items => (
                                <Fragment key={items.key} >
                                    <div className="relative group/menu">
                                        {
                                            items.submenu && items.submenu.length > 0 ? (
                                                <button type="button"
                                                    className={`transition-all duration-200 ease-linear !font-inter cursor-pointer inline-flex items-center gap-1  text-base font-normal`}
                                                >
                                                    {items.name}
                                                    <ChevronDown className="transition-transform duration-200 ease-linear group-hover/menu:rotate-180" />
                                                </button>
                                            ) : (
                                                <Link href={items.path} className={`relative text-base transition-all duration-200 ease-linear px-3.5 py-1.5 ${currentPath === items.path ? ' bg-primary text-white rounded-full' : ' text-zinc-800'} `}>
                                                    {items.name}
                                                </Link>
                                            )}
                                        {items.key === 'wet-wash-gloves' ? (
                                            <div
                                                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 w-max bg-white rounded-xl shadow-md p-3 opacity-0 invisible translate-y-2 transition-all duration-200 group-hover/menu:opacity-100 group-hover/menu:visible group-hover/menu:translate-y-0 border border-gray-200"
                                            >
                                                {items.submenu?.map((submenu) => (
                                                    <Link
                                                        key={submenu.key}
                                                        href={submenu.path}
                                                        className="group/item text-lg flex items-center gap-2.5 px-3 py-1.5 rounded text-zinc-900 hover:text-blue-600 transition-colors duration-200"
                                                    >
                                                        <MoveUpRight
                                                            className="w-4 shrink-0 transition-transform duration-200 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-blue-600"
                                                        />
                                                        <span className="truncate">{submenu.name}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        ) : items.key === 'products' ? (
                                            <div
                                                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 w-max bg-white rounded-xl shadow-md p-3 opacity-0 invisible translate-y-2 transition-all duration-200 group-hover/menu:opacity-100 group-hover/menu:visible group-hover/menu:translate-y-0 border border-gray-200"
                                            >
                                                {isLoading ? (
                                                    <span className="text-white px-3 py-1.5">Loading...</span>
                                                ) : (

                                                    <>
                                                        {data?.map((submenu) => (
                                                            <Link
                                                                key={submenu.title}
                                                                href={`/product/${submenu.slug}`}
                                                                className="group/item text-lg flex items-center gap-2.5 px-3 py-1.5 rounded text-zinc-900 hover:text-blue-600 transition-colors duration-200"
                                                            >
                                                                <MoveUpRight
                                                                    className="w-4 shrink-0 transition-transform duration-200 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:blue-600"
                                                                />
                                                                <span className="truncate">{submenu.title}</span>
                                                            </Link>
                                                        ))}
                                                        <Link
                                                            href='/ultrasound-gel'
                                                            className="group/item text-lg flex items-center gap-2.5 px-3 py-1.5 rounded text-zinc-900 hover:text-blue-600 transition-colors duration-200"
                                                        >
                                                            <MoveUpRight
                                                                className="w-4 shrink-0 transition-transform duration-200 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-blue-600"
                                                            />
                                                            <span className="truncate">
                                                                Ultrasound Gel
                                                            </span>
                                                        </Link>
                                                    </>
                                                )}
                                            </div>
                                        ) : ''}

                                    </div>
                                </Fragment>
                            ))
                        }
                    </div>

                    <button onClick={() => setIsMenuOpen((prev) => !prev)} className='lg:hidden w-12 h-12 flex items-center justify-center cursor-pointer bg-primary rounded-full '>
                        <Menu className='text-white w-7 h-7' />
                    </button>
                </nav>
            </header>


            <div className={`lg:hidden fixed inset-0 left-0 transition-transform duration-300 ease-linear bg-black/30 z-40 backdrop-blur-[4px] ${isMenuOpen ? 'translate-x-0' : ' -translate-x-full'} `} />

            <div className={`lg:hidden fixed z-50 inset-y-0 bg-primary max-w-[400px] w-full transition-transform duration-300 ease-linear p-5 overflow-hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className='w-full h-full relative'>
                    <div className='relative w-full flex justify-between'>
                        <Link href={'/'}>
                            <Image src={'/images/logo/logo.svg'} width={1000} height={600} alt='Ecoqual Healthcare Solutions' className='w-24 h-auto ' />
                        </Link>
                        <button className='w-10 h-10 bg-white rounded-full flex items-center justify-center border-none cursor-pointer' onClick={() => { setIsMenuOpen(false); setOpenSubMenu(null); }}>
                            <X />
                        </button>
                    </div>

                    <div className='w-full relative mt-20 flex flex-col gap-2'>
                        {
                            menuItems.map(items => (
                                <div className='relative flex flex-col' key={items.key}>
                                    {
                                        items.submenu && items.submenu.length > 0 ? (
                                            <>
                                                <button type="button"
                                                    onClick={() => toggleSubMenu(items.key)}
                                                    className={`transition-all duration-200 ease-linear !font-inter px-4 py-1.5 cursor-pointer inline-flex items-center gap-1 font-medium text-white text-xl`}
                                                >
                                                    {items.name}
                                                    <ChevronDown className={`transition-transform duration-200 ${openSubMenu === items.key ? "rotate-180" : ""
                                                        }`} />
                                                </button>
                                                {
                                                    items.key === 'wet-wash-gloves' ? (
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
                                                                    className="group/item border-b  flex items-center gap-2.5 px-3 py-1.5 text-white transition-colors duration-200"
                                                                >
                                                                    <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                                                                    <span className="truncate">{submenu.name}</span>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    ) : items.key === 'products' ? (
                                                        <div
                                                            className={`relative z-50 transition-all duration-300 overflow-hidden ${openSubMenu === items.key
                                                                ? "max-h-[1000px] opacity-100 visible"
                                                                : "max-h-0 opacity-0 invisible"
                                                                }`}
                                                        >
                                                            {
                                                                isLoading ? (
                                                                    <span className="text-white px-3 py-1.5">Loading...</span>
                                                                ) : (
                                                                    <>
                                                                        {data?.map(submenu => (
                                                                            <Link
                                                                                key={submenu.title}
                                                                                href={`/product/${submenu.slug}`}
                                                                                onClick={() => { setIsMenuOpen(false); setOpenSubMenu(null) }}
                                                                                className="group/item border-b  flex items-center gap-2.5 px-3 py-1.5 text-white transition-colors duration-200"
                                                                            >
                                                                                <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                                                                                <span className="truncate">{submenu.title}</span>
                                                                            </Link>
                                                                        ))}
                                                                        <Link
                                                                            href='/ultrasound-gel'
                                                                            onClick={() => { setIsMenuOpen(false); setOpenSubMenu(null) }}
                                                                            className="group/item border-b  flex items-center gap-2.5 px-3 py-1.5 text-white transition-colors duration-200"
                                                                        >
                                                                            <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                                                                            <span className="truncate">
                                                                                Ultrasound Gel
                                                                            </span>
                                                                        </Link>
                                                                    </>
                                                                )
                                                            }
                                                        </div>
                                                    ) : ""
                                                }
                                            </>
                                        ) : (
                                            <Link href={items.path} className={`w-max relative text-xl transition-all font-medium duration-200 ease-linear px-4 py-1.5 rounded-full  ${currentPath === items.path ? 'bg-white text-primary' : 'text-white'} `}
                                                onClick={() => { setIsMenuOpen(false) }}
                                            >
                                                {items.name}
                                            </Link>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
