'use client';
import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ChevronsRight, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'
import { CategorySkeleton } from './Skeleton';
import { motion } from 'motion/react'

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
const easeInOut: [number, number, number, number] = [0.42, 0, 0.58, 1];

export default function ProductsCategory() {
    return (
        <Section classname='bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-100'>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading classname='max-w-3xl mx-auto'>
                            Comprehensive Solutions for <span className='font-inter text-secondry'>Smarter Healthcare Environments</span>
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            From patient care essentials to hygiene systems and professional wear, Ecoqual delivers trusted products that enhance safety, comfort, and efficiency across every healthcare space.
                        </Subheading>
                    </div>
                    <Category />
                </div>
            </Wrapper>
        </Section>
    )
}

export function Category() {
    const { data, error, isLoading } = useQuery<Category[], Error>({
        queryKey: ["categories", 'home'],
        queryFn: fetchCategories,
        staleTime: 1000 * 60 * 5,
    });

    if (isLoading) {
        return (
            <div className='w-full relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    Array.from({ length: 3 }).map((_, id) => (
                        <CategorySkeleton key={id} />
                    ))
                }
            </div>
        )
    }
    const cardContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
                ease: easeInOut,
            },
        },
    };
    const cardVarient = {
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeInOut } },
    }

    return (
        <motion.div className='w-full relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {
                data?.map((items, idx) => (
                    <motion.div
                        key={idx}
                        className='w-full h-full border border-gray-200 bg-white shadow-md'
                        variants={cardVarient}
                    >
                        <div className='relative w-full'>
                            <Image src={items.image} alt={items.title} width={500} height={400}
                                className='w-full h-[250px] object-cover object-center'
                            />
                        </div>
                        <div className='relative lg:p-5 p-3'>
                            <h3 className='font-semibold lg:text-2xl md:text-lg text-base text-zinc-700'>
                                {items.title}
                            </h3>
                            <Subheading classname='text-left line-clamp-4'>
                                {items.description}
                            </Subheading>

                            <div className='mt-5 w-full flex flex-col gap-1'>
                                {
                                    items.title.toLowerCase() === 'healthcare essentials' && (
                                        <Fragment>
                                            <Link href='/wet-wash-gloves'
                                                className='flex gap-2 items-center text-blue-600'
                                            >
                                                <ChevronsRight size={16} className='text-blue-600' />
                                                Wet Wash Gloves
                                            </Link>
                                            <Link href='/ultrasound-gel'
                                                className='flex gap-2 items-center text-blue-600'
                                            >
                                                <ChevronsRight size={16} className='text-blue-600' />
                                                Ultrasound Gel
                                            </Link>
                                        </Fragment>
                                    )
                                }
                                {
                                    items.sub_categories.map((sub) => (
                                        <Link key={sub.id} href={`/${items.slug}/${sub.slug}`}
                                            className='flex gap-2 items-center text-blue-600'
                                        >
                                            <ChevronsRight size={16} className='text-blue-600' />
                                            {sub.title}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </motion.div>
                ))
            }
        </motion.div>
    )
}