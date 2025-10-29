'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Heading, Subheading } from '@/utils/Section';
import { Button } from '@/components/ui/button';

interface SlideData {
    desktopImage: string;
    mobileImage?: string;
    title: string;
    summary: string;
    buttonText: string;
    buttonLink: string;
}

export default function Hero() {
    const slides: SlideData[] = [
        {
            desktopImage: '/images/hero/new-banner-01.png',
            // mobileImage: '/images/hero/new-banner-01-mobile.png',
            title: 'This is Heading One',
            summary: 'This is a sub heading for slide one',
            buttonText: 'Explore More',
            buttonLink: '/category/facility-hygiene',
        },
        {
            desktopImage: '/images/hero/new-banner-02.png',
            // mobileImage: '/images/hero/new-banner-02-mobile.png',
            title: 'This is Heading Two',
            summary: 'This is a sub heading for slide two',
            buttonText: 'Explore More',
            buttonLink: '/category/patient-care',
        },
    ];

    const [api, setApi] = React.useState<CarouselApi>();
    const pluginRef = useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
    );

    return (
        <Carousel
            className="w-full relative z-10"
            plugins={[pluginRef.current]}
            opts={{ loop: true }}
            onMouseEnter={pluginRef.current.stop}
            onMouseLeave={pluginRef.current.reset}
            setApi={setApi}
        >
            <CarouselContent>
                {slides.map((slide, idx) => (
                    <CarouselItem key={idx} className="relative w-full">
                        <img
                            src={slide.desktopImage}
                            alt={slide.title}
                            className="w-full h-[580px] object-cover object-top hidden md:block"
                        />

                        <img
                            src={slide.mobileImage || slide.desktopImage}
                            alt={slide.title}
                            className="w-full h-auto object-cover object-top block md:hidden"
                        />

                        <div className="md:absolute md:top-1/2 md:left-1/12 md:-translate-y-1/2 relative p-5 md:p-0 text-white">
                            <Heading>{slide.title}</Heading>
                            <Subheading classname="text-left">{slide.summary}</Subheading>

                            <Link href={slide.buttonLink}>
                                <Button className="mt-4">{slide.buttonText}</Button>
                            </Link>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious
                onClick={() => {
                    api?.scrollPrev();
                    pluginRef.current.reset();
                }}
                className="border-none w-11 h-11 bg-zinc-900 text-white left-10 text-3xl cursor-pointer hover:bg-zinc-800 absolute top-1/2 -translate-y-1/2"
            />
            <CarouselNext
                onClick={() => {
                    api?.scrollNext();
                    pluginRef.current.reset();
                }}
                className="border-none w-11 h-11 bg-zinc-900 text-white right-10 text-3xl cursor-pointer hover:bg-zinc-800 absolute top-1/2 -translate-y-1/2"
            />
        </Carousel>
    );
}
