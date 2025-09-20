import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import React from 'react'
import { Product } from '@/utils/ProductData';
import Image from 'next/image';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';

export default function HouseKeepingPage() {
    const data = Product.houseKeeping;
    
    return (
        <Section classname='bg-gray-100'>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading classname='text-secondry'>
                            Housekeeping Products
                        </Heading>
                        <Subheading classname='max-w-lg mx-auto'>
                            Easy and effective cleaning solutions. Made to keep places neat, hygienic, and fresh every day.
                        </Subheading>
                    </div>

                    <div className='w-full relative grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
                        {
                            data.map((items, idx) => (
                                <div
                                    key={idx}
                                    className='relative w-full h-full rounded-xl overflow-hidden bg-white shadow group'
                                >
                                    <div className='relative w-full h-[250px] overflow-hidden'>
                                        <Image src={items.image[0]} alt={items.name} width={500} height={400}
                                            className='w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300 ease-in-out'
                                        />
                                    </div>
                                    <div className='relative w-full px-3 z-10  py-3'>
                                        <span className='text-sm font-medium text-primary'>
                                            House Keeping
                                        </span>
                                        <Link href={`/product/house-keeping/${items.slug}`} className='block mt-1 text-gray-900 font-normal !font-montserrat lg:text-2xl md:text-lg text-base '>
                                            {items.name}
                                        </Link>

                                        <Subheading classname='text-left line-clamp-3 !text-sm '>
                                            {items.description}
                                        </Subheading>

                                        <Link href={`/product/house-keeping/${items.slug}`} className='ml-auto mt-6 w-max px-4 py-2 border border-primary flex items-center gap-2 justify-center rounded-lg text-primary hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out'>
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
