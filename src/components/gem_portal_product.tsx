import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function GemPortalProduct() {
    const productData = [
        {
            name: "Wet Wash Gloves",
            image: "/images/wwg.png",
            url: "/wet-wash-gloves",
            summary: "EQ Wet Wash Gloves are pre-moistened, single-use cleansing gloves designed for easy and effective hygiene care without the need for water or soap.",
        },
        {
            name: "Ultrasound Gel",
            image: "/images/ulg.JPG",
            url: "/ultrasound-gel",
            summary: "EQ Ultrasound Gel is a premium, water-soluble formulation developed to ensure superior acoustic performance and effortless glide for accurate, uninterrupted imaging.",
        },
    ]
    return (
        <Section>
            <Wrapper>
                <div className='flex-1 relative grid md:grid-cols-2 grid-cols-1 gap-5 gap-y-10 lg:p-8 md:p-6 p-4 bg-gray-50 rounded-2xl border border-gray-200'>
                    <div className="w-full h-full">
                        <Heading>
                            Government Procurement Availability
                        </Heading>
                        <Subheading classname='text-left lg:mt-10 md:mt-6 mt-4'>
                            Our following products are listed and available for procurement through the Government e-Marketplace (GeM), India&apos;s official public procurement portal.
                        </Subheading>
                        <span className='block mt-4 text-xs italic'>
                            Government departments and PSUs can purchase these products directly via GeM using the registered seller listing.
                        </span>
                    </div>
                    <div className="w-full h-full">
                        <Image src="/images/gem.svg" alt='GeM Poratal' width={480} height={480} className='w-full h-auto' />
                    </div>
                    {
                        productData.map((item, idx) => (
                            <div key={idx + 3} className='w-full bg-white p-3 rounded-2xl border border-gray-200 h-max'>
                                <div className='w-full relative flex gap-3 sm:flex-row flex-col '>
                                    <Image src={item.image} alt={item.name} width={1920} height={1080}
                                        className='sm:w-[200px] sm:h-[180px] w-full h-[250px] object-center object-cover rounded-xl' />
                                    <div className='relative flex-1'>
                                        <h3 className='text-lg lg:text-2xl md:text-xl text-primary font-semibold'>
                                            {item.name}
                                        </h3>
                                        <Subheading classname='text-left mt-3 text-sm!'>
                                            {item.summary}
                                        </Subheading>
                                        <Link className='block mt-4 px-4 py-1.5 bg-primary text-white w-max rounded-md ml-auto' href={item.url}>
                                            View Product
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Wrapper>
        </Section>
    )
}
