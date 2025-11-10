'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link';
import React, { Fragment } from 'react'

interface MenuItem {
    key: string;
    name: string;
    path: string;
}
interface Contact {
    name: string;
    link: string;
    icon: string;
}
interface SocialIcons {
    icon: string;
    link: string;
}


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

export default function Footer() {
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
            key: 'blogs',
            name: 'Blogs',
            path: '/blogs'
        },
        {
            key: 'contact',
            name: 'Contact',
            path: '/contact'
        },
    ]
    const socialMedia: SocialIcons[] = [
        {
            icon: '/images/svg/icons/instagram.svg',
            link: 'https://www.instagram.com/eq.solutions__/'
        },
        {
            icon: '/images/svg/icons/facebook.svg',
            link: 'https://www.facebook.com/people/EQ-Solutions/61579565495330/'
        },
        {
            icon: '/images/svg/icons/linkedin.svg',
            link: 'https://www.linkedin.com/company/ecoqual-healthcare-solutions/'
        },
        {
            icon: '/images/svg/icons/youtube.svg',
            link: 'https://www.youtube.com/@EcoQualHealthcare'
        }
    ]

    const { data, error, isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: fetchCategories,
        staleTime: 1000 * 60 * 5,
    });

    return (
        <footer className='bg-primary-dark lg:!pt-20 md:!pt-16 pt-11 w-full relative pb-5'>
            <div className='w-full max-w-7xl relative mx-auto px-6 grid lg:grid-cols-[370px_130px_1fr_1fr_1fr] md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mb-10'>
                <div className="w-full h-full p-2 relative flex flex-col">
                    <Image src='/images/logo/logo.svg' alt='' width={150} height={200} />
                    <h3 className='mt-3 font-semibold text-white text-2xl'>
                        Ecoqual Healthcare Solutions
                    </h3>
                    <Link href='mailto:contact@ecoqual.in' target='_blank' className='mt-2 font-normal text-sm text-white !font-montserrat flex items-center gap-2'>
                        <Image src={'/images/svg/icons/mail-white.svg'} width={28} height={28} alt='email' className='w-6 h-6' />
                        contact@ecoqual.in
                    </Link>
                    <div className='mt-3 w-full relative flex items-center gap-2'>
                        {
                            socialMedia.map((item, idx) => (
                                <Link key={idx} href={item.link} target='_blank'>
                                    <Image src={item.icon} width={32} height={32} alt='Social icon' />
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <div className="w-full h-full p-2 relative">
                    <h3 className='font-bold text-white text-base'>Quick Links</h3>

                    <div className='relative mt-5 flex flex-col gap-2'>
                        {
                            menuItems.map(item => (
                                <Link href={item.path} key={item.key} className='font-normal text-white flex items-center gap-2 text-sm'>
                                    <Image src={'/images/svg/icons/link.svg'} width={16} height={16} alt={item.name} />
                                    {item.name}
                                </Link>
                            ))
                        }
                    </div>
                </div>

                {
                    data?.map((category) => (
                        <div className="w-full h-full p-2 relative" key={category.id}>
                            <h3 className='font-bold text-white text-base'>{category.title}</h3>

                            <div className='relative mt-5 flex flex-col gap-2'>
                                {
                                    category.sub_categories.map(item => (
                                        <Fragment key={item.id}>
                                            {
                                                category.title.toLowerCase() === 'healthcare essentials' && (
                                                    <Fragment>
                                                        <Link href='/wet-wash-gloves' className='font-normal text-white flex items-center gap-2 text-sm'>
                                                            <Image src={'/images/svg/icons/link.svg'} width={16} height={16} alt='Wet Wash Gloves' />
                                                            Wet Wash Gloves
                                                        </Link>

                                                        <Link href='/ultrasound-gel' className='font-normal text-white flex items-center gap-2 text-sm'>
                                                            <Image src={'/images/svg/icons/link.svg'} width={16} height={16} alt='Ultrasound Gel' />
                                                            Ultrasound Gel
                                                        </Link>

                                                    </Fragment>
                                                )
                                            }
                                            <Link href={`/${category.slug}/${item.slug}`} className='font-normal text-white flex items-center gap-2 text-sm'>
                                                <Image src={'/images/svg/icons/link.svg'} width={16} height={16} alt={item.title} />
                                                {item.title}
                                            </Link>
                                        </Fragment>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='relative border-t border-neutral-100 pt-5'>
                <div className='flex items-center md:justify-between justify-center md:flex-row flex-col gap-1 max-w-7xl relative mx-auto px-6 w-full'>
                    <span className='md:text-sm text-[10px] font-normal text-white text-center'>
                        Copyright @ {new Date().getFullYear()} Ecoqual Healthcare Solutions. All rights reserved.
                    </span>
                    <Link href={'https://wizards.co.in/'} target='_blank' className='!font-montserrat md:text-sm text-[10px] font-normal text-white'>
                        Made with ❤ by <em className='underline underline-offset-1'>Wizards Next</em>.
                    </Link>
                </div>
            </div>
        </footer>
    )
}