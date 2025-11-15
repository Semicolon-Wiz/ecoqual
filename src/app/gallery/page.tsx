import { Section, Wrapper } from '@/utils/Section'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function GalleryPage() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full grid grid-cols-2 gap-5'>
                    <div className='w-full h-full rounded-2xl overflow-hidden'>
                        <Link href={'/gallery/images'} className='relative block w-full h-full overflow-hidden'>
                            <Image src={'/images/gallery/img-01.jpg'} alt='Image gallery' width={1080} height={480} className='w-full h-[400px] object-cover' />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10 p-5 flex items-end'>
                                <span className='text-white w-max md:text-2xl text-lg'>
                                    View Image Gallery
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div className='w-full h-full rounded-2xl overflow-hidden'>
                        <Link href={'/gallery/video'} className='relative block w-full h-full overflow-hidden'>
                            <Image src={'/images/gallery/img-02.webp'} alt='Image gallery' width={1080} height={480} className='w-full h-[400px] object-cover' />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10 p-5 flex items-end'>
                                <span className='text-white w-max md:text-2xl text-lg'>
                                    View Video Gallery
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
