'use client';
import { Heading, MainHeading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { ProductSkeleton } from '@/components/Skeleton';
import { motion } from 'motion/react';

export interface Product {
    id: number;
    title: string;
    slug: string;
    short_description: string;
    product_description: string;
    category_id: number;
    subcategory_id: number;
    image: string;
}

export interface SubCategory {
    id: number;
    title: string;
    slug: string;
    description: string | null;
}

export interface Category {
    id: number;
    title: string;
    slug: string;
    category_heading: string;
    description: string;
}

export interface ProductResponse {
    success: boolean;
    message: string;
    category: Category;
    subcategory: SubCategory;
    products: Product[];
}

const easeInOut: [number, number, number, number] = [0.42, 0, 0.58, 1];

export default function ProductList({ categoryId, subCategory }: { categoryId: string, subCategory: string }) {

    const fetchProducts = async (categoryId: string, subCategoryId: string): Promise<ProductResponse> => {
        const res = await axios.get<ProductResponse>(`https://inforbit.in/demo/ecoqual/api/categories/${categoryId}/${subCategoryId}`);
        return res.data;
    };
    const { data, error, isLoading } = useQuery<ProductResponse, Error>({
        queryKey: [categoryId, subCategory],
        queryFn: () => fetchProducts(categoryId, subCategory),
        staleTime: 1000 * 60 * 5,
        enabled: Boolean(categoryId),
    });

    if (!data && isLoading) {
        return (
            <Section classname='bg-gray-100'>
                <Wrapper>
                    <div className='relative w-full flex flex-col gap-8'>
                        <div className="animate-pulse text-center space-y-3">
                            <div className="h-7 bg-gray-200 rounded-md w-1/3 mx-auto" />
                            <div className="h-6 bg-gray-200 rounded-md w-2/3 mx-auto" />
                            <div className="h-6 bg-gray-200 rounded-md w-2/3 mx-auto" />
                        </div>

                        <div className='w-full relative grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 md:gap-y-10 gap-y-5'>
                            {
                                Array.from({ length: 6 }).map((_, id) => (
                                    <ProductSkeleton key={id} />
                                ))
                            }
                        </div>
                    </div>
                </Wrapper>
            </Section>
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
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col gap-8'>
                    <div className='flex-1 text-center'>
                        <MainHeading classname='text-secondry sm:text-center text-left'>
                            {data?.subcategory.title ?? ''}
                        </MainHeading>
                        <Subheading classname='max-w-4xl mx-auto !font-normal !text-left !text-gray-700'>
                            {data?.subcategory.description ?? ''}
                        </Subheading>
                    </div>

                    {
                        data?.products && data.products.length > 0 ? (
                            <motion.div
                                className='w-full relative grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 md:gap-y-10 gap-y-5'
                                variants={cardContainerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0 }}
                            >
                                {
                                    data?.products.map((items, idx) => (
                                        <motion.div
                                            key={idx}
                                            className='relative w-full h-full bg-white shadow-md group rounded-md overflow-hidden'
                                            variants={cardVarient}

                                        >
                                            <Link href={`/${categoryId}/${subCategory}/${items.slug}`} className='block relative w-full h-[250px] '>
                                                <Image src={items.image} alt={items.title} width={1920} height={1080}
                                                    className='w-full h-full object-center object-cover'
                                                />
                                            </Link>
                                            <div className='relative w-full p-3 z-10'>
                                                <span className='text-xs font-medium text-blue-600'>
                                                    {data.category.title}
                                                </span>
                                                <Link href={`/${categoryId}/${subCategory}/${items.slug}`} className='block mt-1 text-gray-800 !font-montserrat md:text-lg text-sm font-semibold '>
                                                    {items.title}
                                                </Link>

                                                <div
                                                    className="hidden md:block prose mt-2 max-w-none text-gray-700 line-clamp-3 dis"
                                                >
                                                    <Subheading classname='!font-normal !text-xs !text-left !text-gray-700'>
                                                        {items.short_description ?? ''}
                                                    </Subheading>
                                                </div>
                                                {/* 
                                                <Link href={`/${categoryId}/${subCategory}/${items.slug}`} className='ml-auto mt-6  w-max md:text-base text-xs flex items-center gap-1 justify-center text-blue-700 underline underline-offset-4 '>
                                                    View Product
                                                    <MoveUpRight size={14} />
                                                </Link> */}
                                            </div>
                                        </motion.div>
                                    ))
                                }
                            </motion.div>
                        ) : <h3 className='font-extrabold mx-auto lg:text-5xl md:text-3xl text-xl max-w-3xl text-center text-gray-300 leading-[1.25]'>
                            Products of this Category will be listed very shortly
                        </h3>
                    }
                </div>
            </Wrapper>
        </Section>
    )
}
