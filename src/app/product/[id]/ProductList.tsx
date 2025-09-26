'use client';
import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

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

    if (isLoading) {
        return <span>Loading....</span>
    }

    return (
        <Section classname='bg-gray-100'>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading classname='text-secondry'>
                            {data?.category.category_heading ?? 'Housekeeping Products'}
                        </Heading>
                        <Subheading classname='max-w-lg mx-auto'>
                            {data?.category.description ?? 'Easy and effective cleaning solutions. Made to keep places neat, hygienic, and fresh every day.'}
                        </Subheading>
                    </div>

                    <div className='w-full relative grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
                        {
                            data?.products.map((items, idx) => (
                                <div
                                    key={idx}
                                    className='relative w-full h-full rounded-xl overflow-hidden bg-white shadow group'
                                >
                                    <Link href={`/product/${id}/${items.slug}`} className='block relative w-full h-[250px] overflow-hidden'>
                                        <Image src={items.image} alt={items.title} width={500} height={400}
                                            className='w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300 ease-in-out'
                                        />
                                    </Link>
                                    <div className='relative w-full px-3 z-10  py-3'>
                                        <span className='text-sm font-medium text-primary'>
                                            {data.category.title}
                                        </span>
                                        <Link href={`/product/${id}/${items.slug}`} className='block mt-1 text-gray-900 font-normal !font-montserrat lg:text-2xl md:text-lg text-base '>
                                            {items.title}
                                        </Link>

                                        <div
                                            className="prose mt-2 max-w-none text-gray-700 line-clamp-3"
                                            dangerouslySetInnerHTML={{ __html: items.product_description }}
                                        />

                                        <Link href={`/product/${id}/${items.slug}`} className='ml-auto mt-6 w-max px-4 py-2 border border-primary flex items-center gap-2 justify-center rounded-lg text-primary hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out'>
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
