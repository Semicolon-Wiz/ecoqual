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


export default function ImageCarousel({ image }: { image: string[] }) {
    const [api, setApi] = React.useState<CarouselApi>()
    const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }))
    return (
        <Carousel className="w-full overflow-hidden rounded-2xl"
            plugins={[plugin.current]}
            opts={{ loop: true }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            setApi={setApi}
        >
            <CarouselContent>
                {
                    image.map((src, key) => (
                        <CarouselItem key={key}>
                            <img src={src} alt='EchoQual Healthcare Solutions' className='w-full h-auto' />
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
        </Carousel>
    )
}
