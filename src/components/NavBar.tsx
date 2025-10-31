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

interface SubCategory {
    id: number;
    title: string;
    slug: string;
    category_id: number;
    image: string;
}

interface Category {
    id: number;
    title: string;
    slug: string;
    category_heading: string;
    description: string;
    image: string;
    sub_categories: SubCategory[];
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
    // const menuItems: MenuItem[] = [
    //     {
    //         key: 'home',
    //         name: 'Home',
    //         path: '/'
    //     },
    //     {
    //         key: 'about',
    //         name: 'About EcoQual',
    //         path: '/about'
    //     },
    //     {
    //         key: 'wet-wash-gloves',
    //         name: 'Wet Wash Gloves',
    //         path: '/wet-wash-gloves',
    //         submenu: [
    //             {
    //                 key: 'wet-wash-gloves',
    //                 name: 'Wet Wash Gloves',
    //                 path: '/wet-wash-gloves',
    //             },
    //             {
    //                 key: 'wet-wash-gloves-technical-details',
    //                 name: 'Technical Details',
    //                 path: '/wet-wash-gloves/technical-details',
    //             },
    //             {
    //                 key: 'wet-wash-gloves-contributor',
    //                 name: 'Contributor to NHM & NPHCE Policies of India',
    //                 path: '/wet-wash-gloves/contributor',
    //             },
    //             {
    //                 key: 'wet-wash-gloves-packaging-and-supply',
    //                 name: 'Packaging & Supply Details',
    //                 path: '/wet-wash-gloves/packaging-and-supply',
    //             },
    //         ]
    //     },
    //     {
    //         key: 'products',
    //         name: 'Other EQ Products',
    //         path: '/products',
    //         submenu: [
    //             {
    //                 key: 'house-keeping-products',
    //                 name: 'House Keeping Products',
    //                 path: '/product/house-keeping',

    //             },
    //             {
    //                 key: 'surgical-products',
    //                 name: 'Surgical Products',
    //                 path: '/product/surgical',

    //             },
    //             {
    //                 key: 'institutional-uniforms',
    //                 name: 'Institutional Uniforms',
    //                 path: '/product/institutional',

    //             },
    //             {
    //                 key: 'kits',
    //                 name: 'Kits',
    //                 path: '/product/kits',

    //             }
    //         ]
    //     },
    //     {
    //         key: 'blogs',
    //         name: 'Blogs',
    //         path: '/blogs'
    //     },
    //     {
    //         key: 'contact',
    //         name: 'Contact',
    //         path: '/contact'
    //     }
    // ]
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
            key: 'healthcare_essentials',
            name: 'Healthcare Essentials',
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
            key: 'facility_hygiene',
            name: 'Facility Hygiene',
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
            key: 'professional_wear',
            name: 'Professional Wear',
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
    const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
    const { stopScroll, startScroll } = useLenisControl();
    const [showHeader, setShowHeader] = useState(true);

    const toggleSubMenu = (key: number) => {
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
                <nav className='relative w-full max-w-7xl mx-auto lg:h-[80px] md:h-[70px] h-[65px] px-5 flex items-center justify-between'>
                    <div className='relative shrink-0 w-max'>
                        <Link href={'/'}>
                            <Image src={'/images/logo/logo.svg'} width={1000} height={600} alt='Ecoqual Healthcare Solutions' className='lg:w-24 md:w-20 w-16 h-auto' />
                        </Link>
                    </div>

                    <div className='lg:flex hidden relative w-max items-center gap-2 h-full'>
                        <Link
                            href="/about"
                            className={`block my-auto text-base px-3.5 py-1.5 ${currentPath === '/about'
                                ? 'bg-primary text-white rounded-full'
                                : 'text-zinc-800'
                                }`}
                        >
                            About EcoQual
                        </Link>
                        {data?.map((category) => (
                            <div key={category.id} className="relative group/menu h-full ">

                                <button
                                    type="button"
                                    className="my-auto h-full transition-all duration-200 ease-linear cursor-pointer inline-flex items-center gap-1 text-base font-normal text-zinc-800 !font-inter"
                                >
                                    {category.title}
                                    {category.sub_categories.length > 0 && (
                                        <ChevronDown className="transition-transform duration-200 ease-linear group-hover/menu:rotate-180" size={17} />
                                    )}
                                </button>

                                {category.sub_categories.length > 0 && (
                                    <div
                                        className="absolute top-full left-0 z-50 w-max bg-white shadow-md p-3 opacity-0 invisible translate-y-2 transition-all duration-200 group-hover/menu:opacity-100 group-hover/menu:visible group-hover/menu:translate-y-0 border border-gray-200"
                                    >
                                        <Fragment>
                                            {
                                                category.title.toLowerCase() === 'healthcare essentials' && (
                                                    <Fragment>
                                                        <Link
                                                            href='/wet-wash-gloves'
                                                            className="group/item text-base flex items-center gap-2.5 px-2 py-1.5 rounded text-zinc-900 hover:text-blue-600 transition-colors duration-200"
                                                        >
                                                            <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5" />
                                                            <span className="truncate !font-inter font-normal">
                                                                Wet Wash Gloves
                                                            </span>
                                                        </Link>
                                                        <Link
                                                            href='/ultrasound-gel'
                                                            className="group/item text-base flex items-center gap-2.5 px-2 py-1.5 rounded text-zinc-900 hover:text-blue-600 transition-colors duration-200"
                                                        >
                                                            <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5" />
                                                            <span className="truncate !font-inter font-normal">
                                                                Ultrasound Gel
                                                            </span>
                                                        </Link>
                                                    </Fragment>
                                                )
                                            }
                                            {category.sub_categories.map((sub) => (
                                                <Link
                                                    key={sub.id}
                                                    href={`/${category.slug}/${sub.slug}`}
                                                    className="group/item text-base flex items-center gap-2.5 px-2 py-1.5 text-zinc-900 hover:text-blue-600 transition-colors duration-200"
                                                >
                                                    <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5" />
                                                    <span className="truncate !font-inter font-normal">{sub.title}</span>
                                                </Link>
                                            ))}
                                        </Fragment>
                                    </div>
                                )}
                            </div>
                        ))}

                        <Link
                            href="/blogs"
                            className={`text-base px-3.5 py-1.5 ${currentPath === '/blogs'
                                ? 'bg-primary text-white rounded-full'
                                : 'text-zinc-800'
                                }`}
                        >
                            Blogs
                        </Link>
                        <Link
                            href="/contact"
                            className={`text-base px-3.5 py-1.5 ${currentPath === '/contact'
                                ? 'bg-primary text-white rounded-full'
                                : 'text-zinc-800'
                                }`}
                        >
                            Contact
                        </Link>
                    </div>

                    <button onClick={() => setIsMenuOpen((prev) => !prev)} className='lg:hidden w-12 h-12 flex items-center justify-center cursor-pointer bg-primary rounded-full '>
                        <Menu className='text-white w-7 h-7' />
                    </button>
                </nav>
            </header>


            <div className={`lg:hidden fixed inset-0 left-0 transition-transform duration-300 ease-linear bg-black/30 z-40 backdrop-blur-[4px] ${isMenuOpen ? 'translate-x-0' : ' -translate-x-full'} `} />

            <div className={`lg:hidden fixed z-50 inset-y-0 bg-primary max-w-[400px] w-full transition-transform duration-300 ease-linear p-5 overflow-y-auto ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className='w-full h-full relative'>
                    <div className='relative w-full flex justify-between'>
                        <Link href='/' onClick={() => setIsMenuOpen(false)}>
                            <Image src='/images/logo/logo.svg' width={1000} height={600} alt='Ecoqual Healthcare Solutions' className='w-24 h-auto' />
                        </Link>
                        <button
                            className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer'
                            onClick={() => { setIsMenuOpen(false); setOpenSubMenu(null); }}
                        >
                            <X />
                        </button>
                    </div>

                    <div className='w-full mt-10 flex flex-col gap-2'>

                        <Link href="/about" onClick={() => setIsMenuOpen(false)} className={`w-max px-5 py-1.5 text-base font-medium ${currentPath === '/about' ? 'bg-white text-primary rounded-full' : 'text-white'}`}>
                            About EcoQual
                        </Link>

                        {data?.map((category) => (
                            <div key={category.id} className='flex flex-col'>

                                <button
                                    type="button"
                                    onClick={() => toggleSubMenu(category.id)}
                                    className="transition-all duration-200 ease-linear px-4 py-2 flex items-center justify-between font-medium text-white text-base !font-inter"
                                >
                                    {category.title}
                                    {category.sub_categories.length > 0 && (
                                        <ChevronDown className={`transition-transform duration-200 ${openSubMenu === category.id ? "rotate-180" : ""}`} />
                                    )}
                                </button>

                                {category.sub_categories.length > 0 && (
                                    <div
                                        className={`transition-all duration-300 overflow-hidden ${openSubMenu === category.id ? "max-h-[1000px] opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}
                                    >
                                        <Fragment>
                                            {
                                                category.title.toLowerCase() === 'healthcare essentials' && (
                                                    <Fragment>
                                                        <Link
                                                            href='/wet-wash-gloves'
                                                            className="group/item flex items-center gap-2.5 px-7 py-1.5 text-white text-base border-b border-white/20 hover:text-blue-200 transition-colors duration-200 font-normal"
                                                        >
                                                            <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                                                            <span className="truncate !font-inter">
                                                                Wet Wash Gloves
                                                            </span>
                                                        </Link>
                                                        <Link
                                                            href='/ultrasound-gel'
                                                            className="group/item flex items-center gap-2.5 px-7 py-1.5 text-white text-base border-b border-white/20 hover:text-blue-200 transition-colors duration-200 font-normal"
                                                        >
                                                            <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                                                            <span className="truncate !font-inter">
                                                                Ultrasound Gel
                                                            </span>
                                                        </Link>
                                                    </Fragment>
                                                )
                                            }

                                            {category.sub_categories.map((sub) => (
                                                <Link
                                                    key={sub.id}
                                                    href={`/product/${sub.slug}`}
                                                    onClick={() => { setIsMenuOpen(false); setOpenSubMenu(null); }}
                                                    className="group/item flex items-center gap-2.5 px-7 py-1.5 text-white text-base border-b border-white/20 hover:text-blue-200 transition-colors duration-200 font-normal"
                                                >
                                                    <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                                                    <span className="truncate !font-inter font-normal">{sub.title}</span>
                                                </Link>
                                            ))}
                                        </Fragment>
                                    </div>
                                )}
                            </div>
                        ))}

                        <Link href="/blogs" onClick={() => setIsMenuOpen(false)} className={`w-max px-5 py-1.5 text-base font-medium ${currentPath === '/blogs' ? 'bg-white text-primary rounded-full' : 'text-white'}`}>
                            Blogs
                        </Link>
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)} className={`w-max px-5 py-1.5 text-base font-medium ${currentPath === '/contact' ? 'bg-white text-primary rounded-full' : 'text-white'}`}>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
