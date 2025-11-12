'use client';
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


export default function ImageCarousel({ image }: { image: string[] }) {
    return (
        <Carousel className="w-full overflow-hidden rounded-2xl h-full"
            opts={{ loop: true }}
        >
            <CarouselContent>
                {
                    image.map((src, key) => (
                        <CarouselItem key={key}>
                            <img src={src} alt='EchoQual Healthcare Solutions' className='w-full h-auto rounded-2xl' />
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            {/* <CarouselPrevious
                className="border-none w-10 h-10 bg-zinc-900 text-white left-1 text-3xl cursor-pointer hover:bg-zinc-800 absolute top-1/2 -translate-y-1/2"
            />
            <CarouselNext
                className="border-none w-10 h-10 bg-zinc-900 text-white right-1 text-3xl cursor-pointer hover:bg-zinc-800 absolute top-1/2 -translate-y-1/2"
            /> */}
        </Carousel>
    )
}
