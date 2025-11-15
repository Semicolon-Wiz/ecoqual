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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<number | null | string>(null);
    const { stopScroll, startScroll } = useLenisControl();
    const [showHeader, setShowHeader] = useState(true);

    const toggleSubMenu = (key: number | string) => {
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

                    <div className='lg:flex hidden relative w-max items-center gap-3 h-full'>
                        <div className="relative group/menu h-full">
                            <button
                                type="button"
                                className="my-auto h-full transition-all duration-200 ease-linear cursor-pointer inline-flex items-center gap-[2px] text-base font-normal text-zinc-800 !font-inter"
                            >
                                About EcoQual
                                <ChevronDown className="transition-transform duration-200 ease-linear group-hover/menu:rotate-180" size={14} />
                            </button>
                            <div
                                className="absolute top-full left-0 z-50 w-max bg-white shadow-md p-3 opacity-0 invisible translate-y-2 transition-all duration-200 group-hover/menu:opacity-100 group-hover/menu:visible group-hover/menu:translate-y-0 border border-gray-200"
                            >
                                <Fragment>
                                    <Link
                                        href='/'
                                        className="group/item text-base flex items-center gap-2.5 px-2 py-1.5 rounded text-zinc-900 hover:text-blue-600 transition-colors duration-200"
                                    >
                                        <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5" />
                                        <span className="truncate !font-inter font-normal">
                                            Home
                                        </span>
                                    </Link>
                                    <Link
                                        href='/about'
                                        className="group/item text-base flex items-center gap-2.5 px-2 py-1.5 rounded text-zinc-900 hover:text-blue-600 transition-colors duration-200"
                                    >
                                        <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5" />
                                        <span className="truncate !font-inter font-normal">
                                            About
                                        </span>
                                    </Link>
                                    <Link
                                        href='/about#ourCommitment'
                                        className="group/item text-base flex items-center gap-2.5 px-2 py-1.5 rounded text-zinc-900 hover:text-blue-600 transition-colors duration-200"
                                    >
                                        <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5" />
                                        <span className="truncate !font-inter font-normal">
                                            Our Commitment
                                        </span>
                                    </Link>
                                    <Link
                                        href='/about#ourVision'
                                        className="group/item text-base flex items-center gap-2.5 px-2 py-1.5 rounded text-zinc-900 hover:text-blue-600 transition-colors duration-200"
                                    >
                                        <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5" />
                                        <span className="truncate !font-inter font-normal">
                                            Our Vision
                                        </span>
                                    </Link>
                                    <Link
                                        href='/about#ourMission'
                                        className="group/item text-base flex items-center gap-2.5 px-2 py-1.5 rounded text-zinc-900 hover:text-blue-600 transition-colors duration-200"
                                    >
                                        <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5" />
                                        <span className="truncate !font-inter font-normal">
                                            Our Mission
                                        </span>
                                    </Link>
                                    <Link
                                        href='/gallery'
                                        className="group/item text-base flex items-center gap-2.5 px-2 py-1.5 rounded text-zinc-900 hover:text-blue-600 transition-colors duration-200"
                                    >
                                        <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5" />
                                        <span className="truncate !font-inter font-normal">
                                            Gallery
                                        </span>
                                    </Link>
                                </Fragment>
                            </div>
                        </div>

                        {
                            isLoading && (
                                <>
                                    <button
                                        type="button"
                                        className="my-auto h-full transition-all duration-200 ease-linear cursor-pointer inline-flex items-center gap-1 text-base font-normal text-zinc-800 !font-inter"
                                    >

                                        Healthcare Essentials
                                        <ChevronDown className="transition-transform duration-200 ease-linear group-hover/menu:rotate-180" size={17} />
                                    </button>
                                    <button
                                        type="button"
                                        className="my-auto h-full transition-all duration-200 ease-linear cursor-pointer inline-flex items-center gap-1 text-base font-normal text-zinc-800 !font-inter"
                                    >
                                        Facility Hygiene
                                        <ChevronDown className="transition-transform duration-200 ease-linear group-hover/menu:rotate-180" size={17} />
                                    </button>
                                    <button
                                        type="button"
                                        className="my-auto h-full transition-all duration-200 ease-linear cursor-pointer inline-flex items-center gap-1 text-base font-normal text-zinc-800 !font-inter"
                                    >
                                        Professional Wear
                                        <ChevronDown className="transition-transform duration-200 ease-linear group-hover/menu:rotate-180" size={17} />
                                    </button>

                                </>
                            )
                        }

                        {data?.map((category) => (
                            <div key={category.id} className="relative group/menu h-full">
                                <button
                                    type="button"
                                    className="my-auto h-full transition-all duration-200 ease-linear cursor-pointer inline-flex items-center gap-[2px] text-base font-normal text-zinc-800 !font-inter"
                                >
                                    {category.title}
                                    {category.sub_categories.length > 0 && (
                                        <ChevronDown className="transition-transform duration-200 ease-linear group-hover/menu:rotate-180" size={14} />
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

                        <div className='relative h-full flex items-center'>
                            <Link
                                href="/blogs"
                                className={`text-base ${currentPath === '/blogs'
                                    ? 'text-primary'
                                    : 'text-zinc-800'
                                    }`}
                            >
                                Blogs
                            </Link>
                        </div>
                        <div className='relative h-full flex items-center'>
                            <Link
                                href="/contact"
                                className={`text-base ${currentPath === '/contact'
                                    ? 'text-primary'
                                    : 'text-zinc-800'
                                    }`}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    <button onClick={() => setIsMenuOpen((prev) => !prev)} className='lg:hidden w-12 h-12 flex items-center justify-center cursor-pointer bg-primary rounded-full '>
                        <Menu className='text-white w-7 h-7' />
                    </button>
                </nav>
            </header>


            <div className={`lg:hidden fixed inset-0 left-0 transition-transform duration-300 ease-linear bg-black/30 z-40 backdrop-blur-[4px] ${isMenuOpen ? 'translate-x-0' : ' -translate-x-full'} `}
            />

            <div className={`lg:hidden fixed z-50 inset-y-0 bg-white max-w-[400px] w-full transition-transform duration-300 ease-linear p-5 overflow-y-auto ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className='w-full h-full relative'>
                    <div className='relative w-full flex justify-between'>
                        <Link href='/' onClick={() => setIsMenuOpen(false)}>
                            <Image src='/images/logo/logo.svg' width={1000} height={600} alt='Ecoqual Healthcare Solutions' className='w-24 h-auto' />
                        </Link>
                        <button
                            className='w-10 h-10 bg-black text-white rounded-full flex items-center justify-center cursor-pointer'
                            onClick={() => { setIsMenuOpen(false); setOpenSubMenu(null); }}
                        >
                            <X />
                        </button>
                    </div>

                    <div className='w-full mt-10 flex flex-col gap-2'>
                        <div className='flex flex-col'>
                            <button
                                type="button"
                                onClick={() => toggleSubMenu("about")}
                                className="transition-all duration-200 ease-linear px-5 py-1.5 flex items-center justify-between font-normal text-black text-base !font-inter"
                            >
                                About EcoQual
                                <ChevronDown className={`transition-transform duration-200 ${openSubMenu === "about" ? "rotate-180" : ""}`} />
                            </button>

                            <div
                                className={`transition-all duration-300 overflow-hidden ${openSubMenu === "about" ? "max-h-[1000px] opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}
                            >
                                <Fragment>
                                    <Link
                                        href='/'
                                        className="group/item flex items-center gap-2.5 px-7 py-1.5 text-blue-500 text-base border-b border-white/20 hover:text-blue-600 transition-colors duration-200 font-normal"
                                        onClick={() => { setIsMenuOpen(false); setOpenSubMenu(null); }}
                                    >
                                        <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                                        <span className="truncate !font-inter">
                                            Home
                                        </span>
                                    </Link>
                                    <Link
                                        href='/about'
                                        className="group/item flex items-center gap-2.5 px-7 py-1.5 text-blue-500 text-base border-b border-white/20 hover:text-blue-600 transition-colors duration-200 font-normal"
                                        onClick={() => { setIsMenuOpen(false); setOpenSubMenu(null); }}
                                    >
                                        <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                                        <span className="truncate !font-inter">
                                            About Us
                                        </span>
                                    </Link>
                                    <Link
                                        href='/about#ourCommitment'
                                        className="group/item flex items-center gap-2.5 px-7 py-1.5 text-blue-500 text-base border-b border-white/20 hover:text-blue-600 transition-colors duration-200 font-normal"
                                        onClick={() => { setIsMenuOpen(false); setOpenSubMenu(null); }}
                                    >
                                        <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                                        <span className="truncate !font-inter">
                                            Our Commitment
                                        </span>
                                    </Link>
                                    <Link
                                        href='/about#ourVision'
                                        className="group/item flex items-center gap-2.5 px-7 py-1.5 text-blue-500 text-base border-b border-white/20 hover:text-blue-600 transition-colors duration-200 font-normal"
                                        onClick={() => { setIsMenuOpen(false); setOpenSubMenu(null); }}
                                    >
                                        <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                                        <span className="truncate !font-inter">
                                            Our Vision
                                        </span>
                                    </Link>
                                    <Link
                                        href='/about#ourMission'
                                        className="group/item flex items-center gap-2.5 px-7 py-1.5 text-blue-500 text-base border-b border-white/20 hover:text-blue-600 transition-colors duration-200 font-normal"
                                        onClick={() => { setIsMenuOpen(false); setOpenSubMenu(null); }}
                                    >
                                        <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                                        <span className="truncate !font-inter">
                                            Our Mission
                                        </span>
                                    </Link>
                                    <Link
                                        href='/gallery'
                                        className="group/item flex items-center gap-2.5 px-7 py-1.5 text-blue-500 text-base border-b border-white/20 hover:text-blue-600 transition-colors duration-200 font-normal"
                                        onClick={() => { setIsMenuOpen(false); setOpenSubMenu(null); }}
                                    >
                                        <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                                        <span className="truncate !font-inter">
                                            Gallery
                                        </span>
                                    </Link>
                                </Fragment>
                            </div>
                        </div>

                        {data?.map((category) => (
                            <div key={category.id} className='flex flex-col'>

                                <button
                                    type="button"
                                    onClick={() => toggleSubMenu(category.id)}
                                    className="transition-all duration-200 ease-linear px-5 py-1.5 flex items-center justify-between font-normal text-black text-base !font-inter"
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
                                                            className="group/item flex items-center gap-2.5 px-7 py-1.5 text-blue-500 text-base border-b border-white/20 hover:text-blue-600 transition-colors duration-200 font-normal"
                                                            onClick={() => { setIsMenuOpen(false); setOpenSubMenu(null); }}
                                                        >
                                                            <MoveUpRight className="w-4 shrink-0 transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                                                            <span className="truncate !font-inter">
                                                                Wet Wash Gloves
                                                            </span>
                                                        </Link>
                                                        <Link
                                                            href='/ultrasound-gel'
                                                            className="group/item flex items-center gap-2.5 px-7 py-1.5 text-blue-500 text-base border-b border-white/20 hover:text-blue-600 transition-colors duration-200 font-normal"
                                                            onClick={() => { setIsMenuOpen(false); setOpenSubMenu(null); }}
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
                                                    href={`/${category.slug}/${sub.slug}`}
                                                    onClick={() => { setIsMenuOpen(false); setOpenSubMenu(null); }}
                                                    className="group/item flex items-center gap-2.5 px-7 py-1.5 text-blue-500 text-base border-b border-white/20 hover:text-blue-600 transition-colors duration-200 font-normal"
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

                        <Link href="/blogs" onClick={() => setIsMenuOpen(false)} className={`w-max px-5 py-1.5 text-base font-normal ${currentPath === '/blogs' ? 'bg-primary text-white rounded-full' : 'ext-black'}`}>
                            Blogs
                        </Link>
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)} className={`w-max px-5 py-1.5 text-base font-normal ${currentPath === '/contact' ? 'bg-primary text-white rounded-full' : 'text-black'}`}>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
