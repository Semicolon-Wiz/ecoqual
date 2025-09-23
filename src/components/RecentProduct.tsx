import { Product, ProductData, ProductType } from '@/utils/ProductData';
import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function RecentProduct({ id, category, name }: { id: string, category: keyof ProductData, name:string }) {
    const data = Product[category]?.filter((item: ProductType) => item.slug.toLowerCase() !== id.toLowerCase());
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading classname='text-secondry'>
                            Other <span className='text-primary !font-inter'>
                                {name}
                            </span>
                        </Heading>
                        <Subheading classname='max-w-lg mx-auto'>
                            Discover more from our wide range of high-quality and reliable products.
                        </Subheading>
                    </div>

                    <div className='w-full relative grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
                        {
                            data.map((items: ProductType, idx: number) => (
                                <div
                                    key={idx}
                                    className='relative w-full h-full rounded-xl overflow-hidden bg-white shadow group'
                                >
                                    <Link href={`/product/house-keeping/${items.slug}`} className='block relative w-full h-[250px] overflow-hidden'>
                                        <Image src={items.image[0]} alt={items.name} width={500} height={400}
                                            className='w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300 ease-in-out'
                                        />
                                    </Link>
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
