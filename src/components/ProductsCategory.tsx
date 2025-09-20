import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Category {
    name: string;
    description: string;
    image: string;
    slug: string;
}

export default function ProductsCategory() {
    const category: Category[] = [
        {
            name: 'House Keeping Products',
            description: 'From floor cleaners to mops, brooms, and dusters, our housekeeping range ensures spotless hygiene across hospitals, institutions, and corporate spaces. These products are designed to remove tough stains, control odors, and maintain a clean, safe, and fresh environment every day.',
            image: '/images/category/house-keeping/house-keeping.svg',
            slug: 'house-keeping'
        },
        {
            name: 'Surgical Products',
            description: 'Our surgical essentials include caps, gowns, and protective wear made from high-quality, breathable fabrics. Designed for safety, comfort, and infection control, these products support healthcare professionals during surgeries, procedures, and patient care.',
            image: '/images/category/surgical-products/surgical-products.svg',
            slug: 'surgical'
        },
        {
            name: 'Institutional Products',
            description: 'Durable and comfortable uniforms including scrub suits, aprons, lab coats, and patient gowns. Tailored for a professional look and easy wear, they are suitable for doctors, nurses, staff, and patients in hospitals and institutions.',
            image: '/images/category/institutional/institutional-products.svg',
            slug: 'institutional'
        },
        {
            name: 'Kits',
            description: 'Comprehensive kits like Viral Barrier / HIV Premium Kits offer all-in-one protection with gowns, gloves, masks, and more. Ready-to-use and easy to carry, they ensure safety, hygiene, and convenience in critical care and emergency situations.',
            image: '/images/category/kits/kits.svg',
            slug: 'kits'
        }
    ]
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
                        {
                            category.map((items, idx) => (
                                <div key={idx} className='w-full h-full border border-gray-200 md:rounded-2xl rounded-lg md:p-5 p-2.5 '>
                                    <div className='relative w-full'>
                                        <Image src={items.image} alt={items.name} width={500} height={400}
                                            className='w-full h-[200px] object-cover object-center rounded-lg'
                                        />
                                    </div>
                                    <div className='mt-5 relative'>
                                        <h3 className='font-semibold !font-montserrat lg:text-2xl md:text-lg text-base text-zinc-700'>
                                            {items.name}
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
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
