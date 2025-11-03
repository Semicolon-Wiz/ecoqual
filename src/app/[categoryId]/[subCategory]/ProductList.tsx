'use client';
import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
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

                        <div className='w-full relative grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 gap-y-10'>
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
                        <Heading classname='text-secondry'>
                            {data?.subcategory.title ?? ''}
                        </Heading>
                        <Subheading classname='max-w-3xl mx-auto'>
                            {data?.subcategory.description ?? ''}
                        </Subheading>
                    </div>

                    <motion.div
                        className='w-full relative grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 gap-y-10'
                        variants={cardContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0 }}
                    >
                        {
                            data?.products.map((items, idx) => (
                                <motion.div
                                    key={idx}
                                    className='relative w-full h-full bg-white shadow-md group rounded-md'
                                    variants={cardVarient}
                                    
                                >
                                    <Link href={`/${categoryId}/${subCategory}/${items.slug}`} className='block relative w-full h-[300px]'>
                                        <Image src={items.image} alt={items.title} width={1920} height={1080}
                                            className='w-full h-full object-contain object-center'
                                        />
                                    </Link>
                                    <div className='relative w-full p-3 pb-6 z-10'>
                                        <span className='text-sm font-medium text-blue-600'>
                                            {data.category.title}
                                        </span>
                                        <Link href={`/${categoryId}/${subCategory}/${items.slug}`} className='block mt-1 text-gray-800 !font-montserrat md:text-lg text-base font-semibold '>
                                            {items.title}
                                        </Link>

                                        <div
                                            className="prose mt-2 max-w-none text-gray-700 line-clamp-3 text-sm"
                                            dangerouslySetInnerHTML={{ __html: items.product_description }}
                                        />

                                        <Link href={`/${categoryId}/${subCategory}/${items.slug}`} className='ml-auto mt-6  w-max text-base flex items-center gap-1 justify-center text-blue-700 underline underline-offset-4 '>
                                            View Product
                                            <MoveUpRight size={14} />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </motion.div>
                </div>
            </Wrapper>
        </Section>
    )
}
