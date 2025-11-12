'use client';
import { Section, Subheading, Wrapper } from "@/utils/Section";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { CategorySkeleton } from "./Skeleton";
import { motion } from 'motion/react'


export default function BlogCard({ limit }: { limit?: number }) {
    return (
        <Section classname='bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-100'>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <h1 className="lg:text-4xl md:text-[28px] text-2xl leading-[1.2] font-bold text-primary-dark">
                            Insights That Empower You
                        </h1>
                        <Subheading classname='max-w-md mx-auto'>
                            Explore expert articles, tips, and industry updates on hygiene, safety, and healthcare innovations.
                        </Subheading>
                    </div>

                    <Cards limit={limit} />
                </div>
            </Wrapper>
        </Section>
    )
}


export interface Blog {
    id: number;
    title: string;
    slug: string;
    blog_image: string;
    bog_description: string;
}
export interface BlogApi {
    success: boolean;
    message: string;
    data: Blog[]
}
async function FetchBlogs(): Promise<Blog[]> {
    const response = await axios.get<BlogApi>("https://inforbit.in/demo/ecoqual/api/blog")
    return response.data.data;
}

function Cards({ limit }: { limit?: number }) {
    const easeInOut: [number, number, number, number] = [0.42, 0, 0.58, 1];
    const { data, error, isLoading } = useQuery<Blog[], Error>({
        queryKey: ["blogs"],
        queryFn: FetchBlogs,
        staleTime: 1000 * 60 * 5,
    });

    if (!data && isLoading) {
        return (
            <div className="w-full relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    Array.from({ length: 3 }).map((_, id) => (
                        <CategorySkeleton key={id} />
                    ))
                }
            </div>
        )
    }

    const cardContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
                ease: easeInOut,
            },
        },
    };
    const cardVarient = {
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeInOut } },
    }
    return (
        <motion.div className="w-full relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {
                (limit && limit > 0 ? data?.slice(0, limit) : data)?.map((items: Blog) => (
                    <motion.div key={items.id} className="bg-white group w-full relative h-full shadow rounded-lg"
                        variants={cardVarient}
                    >
                        <div className="w-full h-60">
                            <Image src={items.blog_image} alt={items.title} width={500} height={400} className="w-full h-full object-contain object-top" />
                        </div>
                        <div className="relative flex flex-col lg:p-5 p-3">
                            <Link href={`/blogs/${items.slug}`} className=" font-semibold lg:text-xl md:text-lg text-base text-zinc-800 ">
                                {items.title}
                            </Link>
                            <div className="text-left line-clamp-4 mt-3 lg:text-base text-sm text-zinc-600 font-medium"
                                dangerouslySetInnerHTML={{ __html: items.bog_description }}
                            />
                            <Link href={`/blogs/${items.slug}`} className="block mt-7 text-blue-700 ml-auto">
                                Read this blog
                            </Link>
                        </div>
                    </motion.div>
                ))
            }
        </motion.div>
    )
}