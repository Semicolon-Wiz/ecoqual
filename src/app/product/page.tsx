import { Category } from '@/components/ProductsCategory';
import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


export default function ProductPage() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading classname='text-secondry'>
                            <span className='!font-inter text-primary'>One Brand,</span> Complete Hygiene Solutions
                        </Heading>
                        <Subheading classname='max-w-2xl mx-auto'>
                            Discover our full product lineup—from cleaning supplies to hospital consumables—all designed with the same commitment to safety, quality, and innovation.
                        </Subheading>
                    </div>
                    <div className='w-full relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                        <div className='w-full h-full border border-gray-200 md:rounded-2xl rounded-lg md:p-5 p-2.5 '>
                            <div className='relative w-full'>
                                <Image src='/images/category/wet-wash.png' alt='Wet Wash Gloves' width={500} height={400}
                                    className='w-full h-[200px] object-cover object-top rounded-lg'
                                />
                            </div>
                            <div className='mt-5 relative'>
                                <h3 className='font-semibold !font-montserrat lg:text-2xl md:text-lg text-base text-zinc-700'>
                                    Wet Wash Gloves
                                </h3>
                                <Subheading classname='text-left'>
                                    Wet Wash Gloves are pre-moistened, disposable gloves infused with gentle cleansing solutions. Unlike traditional methods using basins and water, they require no rinsing and offer a more hygienic and convenient solution for daily care.
                                </Subheading>

                                <Link href='/wet-wash-gloves' className='mt-6 px-4 py-2 rounded-full bg-secondry text-white hover:bg-secondry-dark w-max ml-auto flex items-center gap-2'>
                                    View All Products
                                    <MoveUpRight size={20} />
                                </Link>
                            </div>
                        </div>
                        <Category />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
