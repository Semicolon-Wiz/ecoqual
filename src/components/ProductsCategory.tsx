'use client';
import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { CategorySkeleton } from './Skeleton';

interface Data {
    id: string;
    title: string;
    slug: string;
    category_heading: string;
    description: string;
    image: string;
}

interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

const fetchCategories = async (): Promise<Data[]> => {
    const res = await axios.get<ApiResponse<Data[]>>(
        "https://inforbit.in/demo/ecoqual/api/menu"
    );
    return res.data.data;
};

export default function ProductsCategory() {

    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Additional Product Portfolio
                        </Heading>
                        <Subheading classname='max-w-lg mx-auto'>
                            An extended line of useful and dependable products that complement our main healthcare solutions.
                        </Subheading>
                    </div>
                    <div className='w-full relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                        <Category />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}

export function Category() {
    const { data, error, isLoading } = useQuery<Data[], Error>({
        queryKey: ["categories", 'home'],
        queryFn: fetchCategories,
        staleTime: 1000 * 60 * 5,
    });

    if (isLoading) {
        return (
            <>
                {
                    Array.from({ length: 5 }).map((_, id) => (
                        <CategorySkeleton key={id}/>
                    ))
                }
            </>
        )
    }

    return (
        <>
            {
                data?.map((items, idx) => (
                    <div key={idx} className='w-full h-full border border-gray-200 md:rounded-2xl rounded-lg md:p-5 p-2.5 '>
                        <div className='relative w-full'>
                            <Image src={items.image} alt={items.title} width={500} height={400}
                                className='w-full h-[200px] object-cover object-center rounded-lg'
                            />
                        </div>
                        <div className='mt-5 relative'>
                            <h3 className='font-semibold !font-montserrat lg:text-2xl md:text-lg text-base text-zinc-700'>
                                {items.title}
                            </h3>
                            <Subheading classname='text-left'>
                                {items.description}
                            </Subheading>

                            <Link href={`/product/${items.slug}`} className='mt-6 px-4 py-2 rounded-full bg-secondry text-white hover:bg-secondry-dark w-max ml-auto flex items-center gap-2'>
                                View All Products
                                <MoveUpRight size={20} />
                            </Link>
                        </div>
                    </div>
                ))
            }
        </>
    )
}