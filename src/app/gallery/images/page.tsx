'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Section, Wrapper } from '@/utils/Section';
import useFancybox from '@/utils/useFancybox';

const images = [
    { src: '/images/gallery/img-01.jpg', title: 'Wet Wash Gloves' },
    { src: '/images/gallery/img-02.webp', title: 'Wet Wash Gloves' },
    { src: '/images/gallery/img-03.webp', title: 'Wet Wash Gloves' },
    { src: '/images/gallery/img-04.webp', title: 'Wet Wash Gloves' },
    { src: '/images/gallery/img-05.webp', title: 'Wet Wash Gloves' },
    { src: '/images/gallery/img-06.webp', title: 'Wet Wash Gloves' },
    { src: '/images/gallery/img-07.webp', title: 'Wet Wash Gloves' },
];

const item = {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.45 },
    },
};

export default function ImageGallery() {
    const [fancyboxRef] = useFancybox({});
    return (
        <Section>
            <Wrapper>

                <h1 className="text-3xl font-extrabold mb-8 text-primary">Gallery</h1>

                <motion.div
                    className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.12 } },
                    }}
                    ref={fancyboxRef}
                >
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            className="relative w-full mb-5 overflow-hidden rounded-xl group break-inside-avoid shadow-md cursor-pointer"
                            data-fancybox="gallery" data-src={img.src} data-thumb-src={img.src}
                        >
                            {/* <div > */}
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-auto object-cover rounded-xl transition-all duration-700 
                           group-hover:scale-110 group-hover:brightness-75"
                            />
                            {/* </div> */}

                            <div
                                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 
                           transition-all duration-500 bg-gradient-to-t 
                           from-black/70 via-black/20 to-transparent rounded-xl"
                            >
                                <p className="text-white font-semibold text-sm tracking-wide">
                                    {img.title}
                                </p>
                            </div>

                            <div
                                className="absolute inset-0 rounded-xl transition-transform duration-500 
                           group-hover:-rotate-1 group-hover:scale-[1.01]"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </Wrapper>
        </Section>
    );
}
