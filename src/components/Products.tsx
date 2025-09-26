'use client'
import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Expand, X } from 'lucide-react';
import Background from '@/utils/Background';
import { useLenisControl } from '@/utils/SmoothScroll';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { HomeProductSkeleton } from './Skeleton';


export interface Product {
    id: number;
    title: string;
    slug: string;
    product_description: string;
    category_id: number;
    label_id: number;
    image: string;
    category: Category;
}
export interface Category {
    id: number;
    title: string;
    slug: string;
}
interface ApiResponse<T> {
    success: boolean;
    message: string;
    products: T;
}

const fetchProducts = async (): Promise<Product[]> => {
    const res = await axios.get<ApiResponse<Product[]>>("https://inforbit.in/demo/ecoqual/api/home-product");
    return res.data.products;
};


export default function Products() {
    const router = usePathname()
    const { data, error, isLoading } = useQuery<Product[], Error>({
        queryKey: ["product", "homepage"],
        queryFn: fetchProducts,
        staleTime: 1000 * 60 * 5,
    });
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const { stopScroll, startScroll } = useLenisControl();

    useEffect(() => {
        if (selectedProduct !== null) {
            stopScroll();
        } else {
            startScroll();
        }
        return () => startScroll();
    }, [selectedProduct, stopScroll, startScroll]);

    if (isLoading) {
        return (
            <Section classname='bg-light-bg'>
                <Wrapper>
                    <div className='relative flex-1 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-y-10 gap-8'>
                        {
                            Array.from({ length: 8 }).map((_, id) => (
                                <HomeProductSkeleton key={id} />
                            ))
                        }
                    </div>
                </Wrapper>
            </Section>
        )
    }

    return (
        <Section classname='bg-light-bg'>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Other High-Quality <span className='font-inter text-secondry'>Hospital Consumables</span>
                        </Heading>
                        <Subheading classname='max-w-xl mx-auto'>
                            Innovative solutions designed to enhance patient care and support healthcare professionals.
                        </Subheading>
                    </div>

                    <div className='relative flex-1 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-y-10'>
                        {data?.map((p, idx) => (
                            <motion.div
                                key={idx}
                                className='relative w-full h-full p-2.5'
                            >
                                <Link
                                    href={`/product/${p.category.slug}/${p.slug}`}
                                    className='relative w-full h-full group'
                                    onMouseEnter={() => setHoveredIndex(idx)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div className='w-full relative h-full z-10'>
                                        <div className='w-full relative'>
                                            <motion.div layoutId={`product-image-${p.id}`}>
                                                <Image
                                                    src={p.image}
                                                    alt={p.title}
                                                    width={400}
                                                    height={300}
                                                    className='w-full h-[270px] rounded-xl object-cover object-center transition-transform duration-200 ease-out group-hover:scale-95'
                                                />
                                            </motion.div>

                                            <button
                                                className='absolute opacity-0 top-4 right-4 w-7 h-7 rounded-full transition-opacity duration-300 ease-out group-hover:opacity-100 flex items-center justify-center bg-white z-30 cursor-pointer'
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    setSelectedProduct(p);
                                                }}
                                            >
                                                <Expand className='text-primary' size={16} />
                                            </button>
                                        </div>

                                        <motion.h3
                                            layoutId={`product-title-${p.id}`}
                                            className='lg:text-lg text-base font-semibold text-primary-dark transition-colors duration-200 ease-out group-hover:text-white mt-2'
                                        >
                                            {p.title}
                                        </motion.h3>
                                        <motion.div
                                            layoutId={`product-description-${p.id}`}
                                            className='text-sm text-zinc-800 transition-colors duration-200 ease-out group-hover:text-white line-clamp-3'
                                            dangerouslySetInnerHTML={{ __html: p?.product_description ?? "" }}
                                        >
                                        </motion.div>
                                    </div>
                                </Link>
                                <Background hoveredIndex={hoveredIndex} idx={idx} />
                            </motion.div>
                        ))}
                    </div>

                    <AnimatePresence mode='wait'>
                        {selectedProduct !== null && (
                            <motion.div
                                className='fixed inset-0 bg-black/60 backdrop-blur-sm z-50  p-10 overflow-y-auto'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProduct(null)}
                                data-lenis-prevent
                            >
                                <div className='relative w-full h-max'>
                                    <motion.div
                                        className='relative max-w-lg mx-auto w-full h-max bg-white p-5 rounded-lg shadow-lg'
                                        layoutId={`card-${selectedProduct.id}`}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <button
                                            className='absolute -right-3.5 -top-3.5 w-8 h-8 bg-primary flex items-center justify-center rounded-full text-white cursor-pointer'
                                            onClick={() => setSelectedProduct(null)}
                                        >
                                            <X />
                                        </button>

                                        <motion.div layoutId={`product-image-${selectedProduct.id}`}>
                                            <Image
                                                src={selectedProduct.image}
                                                width={600}
                                                height={400}
                                                alt={selectedProduct.title}
                                                className='w-full h-auto rounded-2xl'
                                            />
                                        </motion.div>

                                        <motion.h3
                                            layoutId={`product-title-${selectedProduct.id}`}
                                            className='font-bold text-2xl text-primary-dark mt-4'
                                        >
                                            {selectedProduct.title}
                                        </motion.h3>
                                        <motion.div
                                            layoutId={`product-description-${selectedProduct.id}`}
                                            className='font-medium text-base text-zinc-700 mt-2'
                                            dangerouslySetInnerHTML={{ __html: selectedProduct?.product_description ?? "" }}
                                        >
                                        </motion.div>
                                        <Link href={`/product/${selectedProduct.category.slug}/${selectedProduct.slug}`} className='mt-4 flex ml-auto px-4 py-2 bg-primary text-white w-max rounded'>
                                            View in Details
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Wrapper>
        </Section>
    )
}
