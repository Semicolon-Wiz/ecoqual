'use client';
import { Section, Wrapper } from "@/utils/Section"
import useFancybox from '@/utils/useFancybox';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Lens } from '@/components/ui/lens';
import { ButtonPrimary } from '@/utils/Section';
import ProductEnquiry from '@/components/ProductEnquiry';
import { useLenisControl } from '@/utils/SmoothScroll';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export interface Product {
    id: number;
    title: string;
    slug: string;
    product_description: string;
    product_specification: string;
    video_id: string | null;
    meta_title: string | null;
    meta_description: string | null;
    category: Category;
    images: string[];
    materials: string[];
    ingredients: string[];
    specifications: string[];
    additional_features: string[];
}
export interface Category {
    id: number;
    title: string;
    slug: string;
}
interface ApiResponse<T> {
    success: boolean;
    message: string;
    product: T;
}

export default function SingleProduct({ category, productId }: { category: string; productId: string }) {
    const fetchProducts = async (id: string): Promise<Product> => {
        const res = await axios.get<ApiResponse<Product>>(`https://inforbit.in/demo/ecoqual/api/products/${id}`);
        return res.data.product;
    };

    const { data, error, isLoading } = useQuery<Product, Error>({
        queryKey: ["product", category, productId],
        queryFn: () => fetchProducts(productId),
        staleTime: 1000 * 60 * 5,
        enabled: Boolean(productId),
    });
    const [hovering, setHovering] = useState(false);
    const [fancyboxRef] = useFancybox({});
    const [openEnquiryForm, setEnquiryForm] = useState<boolean>(false);
    const { stopScroll, startScroll } = useLenisControl();
    useEffect(() => {
        if (openEnquiryForm) {
            stopScroll();
        } else {
            startScroll();
        }
        return () => startScroll();
    }, [openEnquiryForm, stopScroll, startScroll]);

    if (isLoading) {
        return <span>Loading....</span>
    }

    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex md:flex-row flex-col md:gap-20 gap-7'>
                    <div className='md:w-[450px] w-full '>
                        <div className="sticky top-10">
                            <Carousel className="w-full ">
                                <CarouselContent ref={fancyboxRef}>
                                    {data?.images.map((src, idx) => (
                                        <CarouselItem key={idx}>
                                            <div data-fancybox="gallery" data-src={src} data-thumb-src={src}>
                                                <Lens hovering={hovering} setHovering={setHovering}>
                                                    <Image src={src} key={idx} width={500} height={200}
                                                        alt={data.title} className='rounded-lg w-full h-auto' />
                                                </Lens>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </div>

                    <div className='flex-1 relative'>
                        <h1 className='font-bold text-4xl text-primary'>
                            {data?.title}
                        </h1>
                        <div
                            className="prose mt-2 max-w-none text-gray-700"
                            dangerouslySetInnerHTML={{ __html: data?.product_description ?? "" }}
                        />

                        <ButtonPrimary classname='mt-5 !bg-zinc-800 !rounded-md' onClick={() => setEnquiryForm(true)}>
                            Send Enquiry
                        </ButtonPrimary>

                        <div className='w-full relative mt-5 flex flex-col gap-4'>
                            {
                                data?.additional_features && data.additional_features.length > 0 && (
                                    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                                        <AccordionItem value="item-1" className='bg-gray-100 px-5 rounded-md'>
                                            <AccordionTrigger className='text-xl text-primary'>
                                                Features
                                            </AccordionTrigger>
                                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                                <ul className='w-full flex flex-col gap-1 font-montserrat text-base'>
                                                    {
                                                        data.additional_features?.map((data, idx) => (
                                                            <li key={idx}>
                                                                {data}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                )
                            }

                            {
                                data?.specifications && data?.specifications?.length > 0 && (
                                    <Accordion type="single" collapsible className="w-full" defaultValue="item-2">
                                        <AccordionItem value="item-1" className='bg-gray-100 px-5 rounded-md'>
                                            <AccordionTrigger className='text-xl text-primary'>
                                                Specifications
                                            </AccordionTrigger>
                                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                                <ul className='w-full flex flex-col gap-1 font-montserrat text-base'>
                                                    {
                                                        data?.specifications?.map((data, idx) => (
                                                            <li key={idx}>
                                                                {data}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                )
                            }

                            {
                                data?.ingredients && data.ingredients.length > 0 && (
                                    <Accordion type="single" collapsible className="w-full" defaultValue="item-3">
                                        <AccordionItem value="item-1" className='bg-gray-100 px-5 rounded-md'>
                                            <AccordionTrigger className='text-xl text-primary'>
                                                Ingredients
                                            </AccordionTrigger>
                                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                                <ul className='w-full flex flex-col gap-1 font-montserrat text-base'>
                                                    {
                                                        data?.ingredients?.map((data, idx) => (
                                                            <li key={idx}>
                                                                {data}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                )
                            }

                            {
                                data?.materials && data.materials.length > 0 && (
                                    <Accordion type="single" collapsible className="w-full" defaultValue="item-3">
                                        <AccordionItem value="item-1" className='bg-gray-100 px-5 rounded-md'>
                                            <AccordionTrigger className='text-xl text-primary'>
                                                Ingredients
                                            </AccordionTrigger>
                                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                                <ul className='w-full flex flex-col gap-1 font-montserrat text-base'>
                                                    {
                                                        data?.materials?.map((data, idx) => (
                                                            <li key={idx}>
                                                                {data}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                )
                            }

                            {
                                data?.product_specification && data.product_specification.trim() !== "" && (
                                    <Accordion type="single" collapsible className="w-full" defaultValue="item-3">
                                        <AccordionItem value="item-1" className='bg-gray-100 px-5 rounded-md'>
                                            <AccordionTrigger className='text-xl text-primary'>
                                                Kit Content
                                            </AccordionTrigger>
                                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                                <div
                                                    className="prose mt-2 max-w-none text-gray-700"
                                                    dangerouslySetInnerHTML={{ __html: data?.product_specification ?? "" }}
                                                />
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                )
                            }
                        </div>
                    </div>
                </div>
            </Wrapper>
            <ProductEnquiry name={data?.title ?? ''} openForm={openEnquiryForm} closeForm={setEnquiryForm} />
        </Section>
    )
}