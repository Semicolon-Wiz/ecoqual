'use client';

import { Heading, Section, Subheading, Wrapper } from "@/utils/Section";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { CategorySkeleton } from "./Skeleton";


export default function BlogCard() {

    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Insights That Empower You
                        </Heading>
                        <Subheading classname='max-w-md mx-auto'>
                            Explore expert articles, tips, and industry updates on hygiene, safety, and healthcare innovations.
                        </Subheading>
                    </div>

                    <div className="w-full relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                        <Cards />
                    </div>
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
    const response = await axios.get<BlogApi>("http://inforbit.in/demo/ecoqual/api/blog")
    return response.data.data;
}

function Cards() {
    const { data, error, isLoading } = useQuery<Blog[], Error>({
        queryKey: ["blogs"],
        queryFn: FetchBlogs,
        staleTime: 1000 * 60 * 5,
    });

    if (!data && isLoading) {
        return (
            <>
                {
                    Array.from({ length: 3 }).map((_, id) => (
                        <CategorySkeleton key={id} />
                    ))
                }
            </>
        )
    }
    return (
        <>
            {
                data?.map((items: Blog) => (
                    <div key={items.id} className="group w-full relative h-full border border-gray-300 rounded-xl p-4 pb-3">
                        <div className="w-full h-60 overflow-hidden rounded-md">
                            <Image src={items.blog_image} alt={items.title} width={500} height={400} className="w-full h-full object-cover rounded-lg transition-transform duration-200 ease-in-out group-hover:scale-105" />
                        </div>
                        <div className="relative mt-5 flex flex-col">
                            <Link href={`/blogs/${items.slug}`} className=" font-semibold lg:text-2xl md:text-lg text-base text-zinc-800 ">
                                {items.title}
                            </Link>
                            <div className="text-left line-clamp-4 mt-3 lg:text-base text-sm text-zinc-600 font-medium"
                                dangerouslySetInnerHTML={{ __html: items.bog_description }}
                            />
                            <Link href={`/blogs/${items.slug}`} className="block mt-7 text-blue-700 ml-auto">
                                Read this blog
                            </Link>
                        </div>
                    </div>
                ))
            }
        </>
    )
}