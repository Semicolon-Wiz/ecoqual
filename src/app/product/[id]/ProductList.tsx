'use client';
import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { ProductSkeleton } from '@/components/Skeleton';

interface Products {
    id: string,
    title: string,
    slug: string,
    product_description: string,
    image: string;
}
interface Category {
    id: string | null,
    title: string | null,
    slug: string | null,
    category_heading: string | null,
    description: string | null;
}
interface ApiResponse {
    success: boolean;
    message: string;
    category: Category;
    products: Products[];
}

export default function ProductList({ id }: { id: string }) {
    const fetchProducts = async (id: string): Promise<ApiResponse> => {
        const res = await axios.get<ApiResponse>(`https://inforbit.in/demo/ecoqual/api/categories/${id}`);
        return res.data;
    };

    const { data, error, isLoading } = useQuery<ApiResponse, Error>({
        queryKey: ["product", id],
        queryFn: () => fetchProducts(id),
        staleTime: 1000 * 60 * 5,
        enabled: Boolean(id),
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

                        <div className='w-full relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 gap-y-10'>
                            {
                                Array.from({ length: 8 }).map((_, id) => (
                                    <ProductSkeleton key={id} />
                                ))
                            }
                        </div>
                    </div>
                </Wrapper>
            </Section>
        )
    }

    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading classname='text-secondry'>
                            {data?.category.title ?? ''}
                        </Heading>
                        <Subheading classname='max-w-lg mx-auto'>
                            {data?.category.category_heading ?? ''}
                        </Subheading>
                    </div>

                    <div className='w-full relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 gap-y-10'>
                        {
                            data?.products.map((items, idx) => (
                                <div
                                    key={idx}
                                    className='relative w-full h-full rounded-3xl overflow-hidden bg-white shadow group p-2.5'
                                >
                                    <Link href={`/product/${id}/${items.slug}`} className='block relative w-full h-[320px] overflow-hidden rounded-2xl'>
                                        <Image src={items.image} alt={items.title} width={500} height={400}
                                            className='w-full h-full object-cover object-center rounded-2xl hover:scale-105 transition-transform duration-200'
                                        />
                                    </Link>
                                    <div className='relative w-full px-2 z-10 py-2 mt-4'>
                                        <span className='text-sm font-medium text-blue-600'>
                                            {data.category.title}
                                        </span>
                                        <Link href={`/product/${id}/${items.slug}`} className='block mt-1 text-gray-900 font-normal !font-montserrat lg:text-2xl md:text-lg text-base '>
                                            {items.title}
                                        </Link>

                                        <div
                                            className="prose mt-2 max-w-none text-gray-700 line-clamp-3"
                                            dangerouslySetInnerHTML={{ __html: items.product_description }}
                                        />

                                        <Link href={`/product/${id}/${items.slug}`} className='ml-auto mt-6 w-max px-5 py-3 text-lg flex items-center gap-2 justify-center rounded-lg text-white bg-blue-600 hover:bg-blue-500 transition-colors duration-300 ease-in-out'>
                                            View Product
                                            <MoveUpRight size={20} />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
