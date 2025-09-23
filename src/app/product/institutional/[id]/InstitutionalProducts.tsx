'use client'
import { Product, ProductType } from '@/utils/ProductData';
import useFancybox from '@/utils/useFancybox';
import Image from 'next/image';
import React, { useState } from 'react'
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
import { ButtonPrimary, Subheading } from '@/utils/Section';

export default function InstitutionalProducts({ id }: { id: string }) {
    const [hovering, setHovering] = useState(false);
    const data: ProductType[] = Product.institutional;
    const product: ProductType | undefined = data.find((p) => id.toLocaleLowerCase() === p.slug.toLocaleLowerCase())

    const [fancyboxRef] = useFancybox({});
    if (!product) {
        return <div>Product not found</div>
    }

    return (
        <div className='relative w-full flex md:flex-row flex-col md:gap-20 gap-7'>
            <div className='md:w-[450px] w-full '>
                <div className="sticky top-10">
                    <Carousel className="w-full ">
                        <CarouselContent ref={fancyboxRef}>
                            {product.image.map((src, idx) => (
                                <CarouselItem key={idx}>
                                    <div data-fancybox="gallery" data-src={src} data-thumb-src={src}>
                                        <Lens hovering={hovering} setHovering={setHovering}>
                                            <Image src={src} key={idx} width={500} height={200} alt={product.name} className='rounded-lg w-full h-auto' />
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
                    {product.name}
                </h1>
                <Subheading classname='text-left max-w-xl mt-3'>
                    {product.description}
                </Subheading>
                <ButtonPrimary classname='mt-5 !bg-zinc-800 !rounded-md'>
                    Send Enquiry
                </ButtonPrimary>

                <div className='w-full relative mt-5 flex flex-col gap-4'>
                    {
                        product.features && (
                            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                                <AccordionItem value="item-1" className='bg-gray-100 px-5 rounded-md'>
                                    <AccordionTrigger className='text-xl text-primary'>
                                        Features
                                    </AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <ul className='w-full flex flex-col gap-1 font-montserrat text-base'>
                                            {
                                                product.features?.map((data, idx) => (
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
                        product.specifications && (
                            <Accordion type="single" collapsible className="w-full" defaultValue="item-2">
                                <AccordionItem value="item-1" className='bg-gray-100 px-5 rounded-md'>
                                    <AccordionTrigger className='text-xl text-primary'>
                                        Specifications
                                    </AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <ul className='w-full flex flex-col gap-1 font-montserrat text-base'>
                                            {
                                                product.specifications?.map((data, idx) => (
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
                        product.ingredients && (
                            <Accordion type="single" collapsible className="w-full" defaultValue="item-3">
                                <AccordionItem value="item-1" className='bg-gray-100 px-5 rounded-md'>
                                    <AccordionTrigger className='text-xl text-primary'>
                                        Ingredients
                                    </AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <ul className='w-full flex flex-col gap-1 font-montserrat text-base'>
                                            {
                                                product.ingredients?.map((data, idx) => (
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
                </div>
            </div>
        </div>
    )
}
