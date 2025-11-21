'use client';
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
        { desktop: '/images/hero/1.jpg', mobile: '/images/hero/mob-1.jpg' },
        { desktop: '/images/hero/2.jpg', mobile: '/images/hero/mob-2.jpg' },
        { desktop: '/images/hero/3.jpg', mobile: '/images/hero/mob-3.jpg' },
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
                            <picture>
                                <source media="(max-width: 768px)" srcSet={data.mobile} />
                                <img src={data.desktop} alt="Banner" className="w-full h-auto" />
                            </picture>
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
