'use client';
import { ButtonPrimary, ButtonSecondry, Section, Subheading, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import React, { useRef } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";

interface Data {
    title: string;
    summary: string;
    image: string;
}

export default function Hero() {
    const banner = [
        '/images/hero/banner-01.webp',
        '/images/hero/banner-02.jpg',
        '/images/hero/banner-03.jpg',
    ]
    const [api, setApi] = React.useState<CarouselApi>()
    const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }))
    return (
        <Carousel className="w-full z-10"
            plugins={[plugin.current]}
            opts={{
                loop: true,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            setApi={setApi}
        >
            <CarouselContent>
                {
                    banner.map((data, key) => (
                        <CarouselItem key={key}>
                            <Image src={data} alt='Bannet' width={1920} height={960} className='w-full h-auto' />
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious
                onClick={() => {
                    api?.scrollPrev();
                    plugin.current?.reset();
                }}
                className='border-none w-11 h-11 bg-zinc-900 text-white left-10 text-3xl cursor-pointer hover:bg-zinc-800'
            />
            <CarouselNext
                onClick={() => {
                    api?.scrollNext();
                    plugin.current?.reset();
                }}
                className='border-none w-11 h-11 bg-zinc-900 text-white text-3xl right-10 cursor-pointer hover:bg-zinc-800'
            />
        </Carousel>

    )
}
