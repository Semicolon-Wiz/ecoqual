'use client'
import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Expand, X } from 'lucide-react';
import Background from '@/utils/Background';
import { useLenisControl } from '@/utils/SmoothScroll';

interface Products {
    name: string;
    description: string;
    link: string;
    image: string;
}

export default function Products() {
    const product: Products[] = [
        {
            name: 'Hand Sanitizer',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt esse, voluptatum cumque corrupti placeat officia distinctio est, numquam quasi maiores vero in quidem eum dignissimos repellat eaque veniam molestiae cum.',
            link: '/product/hand-sanitizer',
            image: '/images/products/product-01.webp'
        },
        {
            name: 'Disicfectant Floor Cleaner',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt esse, voluptatum cumque corrupti placeat officia distinctio est, numquam quasi maiores vero in quidem eum dignissimos repellat eaque veniam molestiae cum.',
            link: '/product/floor-cleaner',
            image: '/images/products/product-02.webp'
        },
        {
            name: 'Glass Cleaner',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt esse, voluptatum cumque corrupti placeat officia distinctio est, numquam quasi maiores vero in quidem eum dignissimos repellat eaque veniam molestiae cum.',
            link: '/product/glass-cleaner',
            image: '/images/products/product-03.webp'
        },
        {
            name: 'Disicfectant Toilet Cleaner',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt esse, voluptatum cumque corrupti placeat officia distinctio est, numquam quasi maiores vero in quidem eum dignissimos repellat eaque veniam molestiae cum.',
            link: '/product/toilet-cleaner',
            image: '/images/products/product-04.webp'
        },
        {
            name: 'Concentrated Phenyl',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt esse, voluptatum cumque corrupti placeat officia distinctio est, numquam quasi maiores vero in quidem eum dignissimos repellat eaque veniam molestiae cum.',
            link: '/product/phenyl',
            image: '/images/products/product-05.webp'
        },
        {
            name: 'Liquid Handwash',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt esse, voluptatum cumque corrupti placeat officia distinctio est, numquam quasi maiores vero in quidem eum dignissimos repellat eaque veniam molestiae cum.',
            link: '/product/handwash',
            image: '/images/products/product-06.webp'
        },
        {
            name: 'Surgical Gown',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt esse, voluptatum cumque corrupti placeat officia distinctio est, numquam quasi maiores vero in quidem eum dignissimos repellat eaque veniam molestiae cum.',
            link: '/product/handwash',
            image: '/images/products/product-07.webp'
        },
        {
            name: 'Garbage Bag',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt esse, voluptatum cumque corrupti placeat officia distinctio est, numquam quasi maiores vero in quidem eum dignissimos repellat eaque veniam molestiae cum.',
            link: '/product/handwash',
            image: '/images/products/product-08.webp'
        }
    ]
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
    const { stopScroll, startScroll } = useLenisControl();

    useEffect(() => {
        if (selectedProduct !== null) {
            stopScroll();
        } else {
            startScroll();
        }
        return () => startScroll();
    }, [selectedProduct, stopScroll, startScroll]);

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
                        {product.map((p, idx) => (
                            <motion.div
                                key={idx}
                                className='relative w-full h-full p-2.5'
                            >
                                <Link
                                    href={p.link}
                                    className='relative w-full h-full group'
                                    onMouseEnter={() => setHoveredIndex(idx)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div className='w-full relative h-full z-10'>
                                        <div className='w-full relative'>
                                            <motion.div layoutId={`image-${idx}`}>
                                                <Image
                                                    src={p.image}
                                                    alt={p.name}
                                                    width={400}
                                                    height={300}
                                                    className='w-full h-full rounded-xl object-cover object-center transition-transform duration-200 ease-out group-hover:scale-95'
                                                />
                                            </motion.div>

                                            <button
                                                className='absolute opacity-0 top-4 right-4 w-7 h-7 rounded-full transition-opacity duration-300 ease-out group-hover:opacity-100 flex items-center justify-center bg-white z-30 cursor-pointer'
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    setSelectedProduct(idx);
                                                }}
                                            >
                                                <Expand className='text-primary' size={16} />
                                            </button>
                                        </div>

                                        <motion.h3
                                            layoutId={`title-${idx}`}
                                            className='lg:text-lg text-base font-semibold text-primary-dark transition-colors duration-200 ease-out group-hover:text-white mt-2'
                                        >
                                            {p.name}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`desc-${idx}`}
                                            className='text-sm text-zinc-800 transition-colors duration-200 ease-out group-hover:text-white'
                                        >
                                            {p.description.slice(0, 80) + '.....'}
                                        </motion.p>
                                    </div>
                                </Link>
                                <Background hoveredIndex={hoveredIndex} idx={idx} />
                            </motion.div>
                        ))}
                    </div>

                    <AnimatePresence>
                        {selectedProduct !== null && (
                            <motion.div
                                className='fixed inset-0 bg-black/60 backdrop-blur-sm z-50  p-5 overflow-y-auto'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProduct(null)}
                                data-lenis-prevent
                            >
                                <div className='relative w-full h-full'>
                                    <motion.div
                                        className='relative max-w-lg mx-auto w-full h-max bg-white p-5 rounded-lg shadow-lg'
                                        layoutId={`card-${selectedProduct}`}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <button
                                            className='absolute -right-3.5 -top-3.5 w-8 h-8 bg-primary flex items-center justify-center rounded-full text-white cursor-pointer'
                                            onClick={() => setSelectedProduct(null)}
                                        >
                                            <X />
                                        </button>

                                        <motion.div layoutId={`image-${selectedProduct}`}>
                                            <Image
                                                src={product[selectedProduct].image}
                                                width={600}
                                                height={400}
                                                alt={product[selectedProduct].name}
                                                className='w-full h-auto rounded-2xl'
                                            />
                                        </motion.div>

                                        <motion.h3
                                            layoutId={`title-${selectedProduct}`}
                                            className='font-bold text-2xl text-primary-dark mt-4'
                                        >
                                            {product[selectedProduct].name}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`desc-${selectedProduct}`}
                                            className='font-medium text-base text-zinc-700 mt-2'
                                        >
                                            {product[selectedProduct].description}
                                        </motion.p>
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
