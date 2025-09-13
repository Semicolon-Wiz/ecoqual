'use client'
import React, { useEffect, useState } from 'react'
import { ProductData } from '@/utils/Data';
import Image from 'next/image';

interface Products {
    key: string;
    name: string;
    content: string;
    image: string;
}

export default function ProductPage({ id }: { id: string }) {
    const [product, setProduct] = useState<Products | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        setIsLoading(true);
        const data = ProductData.find((p) =>
            p.key.toLowerCase().includes(id.toLowerCase())
        )
        setProduct(data || null)
        setIsLoading(false)
    }, [id])

    if (isLoading) {
        return 'loading....'
    }
    if (!isLoading && !product) {
        return 'Product Not Found'
    }

    return (
        <div className='w-full relative flex md:flex-row flex-col gap-10'>
            <div className='w-full max-w-[400px] relative'>
                <Image src={product?.image ?? ''} alt={product?.name ?? 'Not Found'} width={500} height={400} className='w-full object-cover h-auto object-center rounded-2xl' />
            </div>
            <div className='flex-1 flex flex-col gap-2'>
                <h1 className='lg:text-4xl md:text-2xl text-lg text-primary font-bold'>
                    {product?.name ?? ''}
                </h1>
                <p className='md:text-xl text-sm text-zinc-600'>
                    {product?.content ?? ''}
                </p>
            </div>
        </div>
    )
}
