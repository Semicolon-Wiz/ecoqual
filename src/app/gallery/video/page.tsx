'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Section, Wrapper } from '@/utils/Section';
import useFancybox from '@/utils/useFancybox';
import { PlayIcon } from 'lucide-react';

const videos = [
    {
        src: '/video/vdo.mp4',
        thumb: '/images/gallery/img-02.webp',
        // title: 'We had an incredible experience connecting with a diverse audience and exploring new opportuniti'
        title: 'EQ Trade show'
    },
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

export default function VideoGallery() {
    const [fancyboxRef] = useFancybox({
        Carousel: {
            transition: 'slide',
        }
    });

    return (
        <Section>
            <Wrapper>
                <h1 className="text-3xl font-extrabold mb-8 text-primary">Video Gallery</h1>

                <motion.div
                    className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.12 } },
                    }}
                    ref={fancyboxRef}
                >
                    {videos.map((vdo, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            className="relative w-full mb-5 overflow-hidden rounded-xl group break-inside-avoid shadow-md cursor-pointer"
                            data-fancybox="video-gallery"
                            data-src={vdo.src}
                            data-thumb-src={vdo.thumb}
                        >
                            <img
                                src={vdo.thumb}
                                alt={vdo.title}
                                className="w-full h-auto object-cover rounded-xl transition-all duration-700 
                                group-hover:scale-110 group-hover:brightness-75"
                            />

                            <div
                                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 
                                transition-all duration-500 bg-gradient-to-t 
                                from-black/70 via-black/20 to-transparent rounded-xl"
                            >
                                <p className="text-white font-semibold text-sm tracking-wide">
                                    {vdo.title}
                                </p>
                            </div>

                            <div
                                className="absolute inset-0 rounded-xl transition-transform duration-500 
                                group-hover:-rotate-1 group-hover:scale-[1.01]"
                            />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">

                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.4, ease: 'easeOut' }}
                                    className="relative flex items-center justify-center"
                                >
                                    <motion.div
                                        className="absolute w-20 h-20 rounded-full bg-white/20 blur-xl"
                                        animate={{
                                            scale: [1, 1.35, 1],
                                            opacity: [0.4, 0.7, 0.4],
                                        }}
                                        transition={{
                                            duration: 2.2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />

                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center"
                                    >
                                        <PlayIcon />
                                    </motion.div>
                                </motion.div>
                            </div>
                            {/* -------------------------------------------------------- */}

                        </motion.div>
                    ))}
                </motion.div>

            </Wrapper>
        </Section>
    );
}
