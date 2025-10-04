'use client';

import { BlogSkeleton } from "@/components/Skeleton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

export interface Blog {
    id: number;
    title: string;
    slug: string;
    blog_image: string;
    description: string;
    paragraphs: string[]
}
export interface BlogApi {
    success: boolean;
    message: string;
    data: Blog;
}


export default function BlogContent({ blogId }: { blogId: string }) {

    async function FetchBlogs(blogId: string): Promise<Blog> {
        const response = await axios.get<BlogApi>(`https://inforbit.in/demo/ecoqual/api/blog/${blogId}`)
        return response.data.data;
    }

    const { data, error, isLoading } = useQuery<Blog, Error>({
        queryKey: ["blogs", blogId],
        queryFn: () => FetchBlogs(blogId),
        staleTime: 1000 * 60 * 5,
        enabled: Boolean(blogId),
    });

    if (!data && isLoading) {
        return <BlogSkeleton />
    }

    return (
        <>
            <h1 className='font-bold lg:text-4xl md:text-2xl text-xl text-primary leading-[1.3] '>
                {data?.title}
            </h1>
            <div className="mt-3 lg:text-base text-sm text-zinc-600 font-medium"
                dangerouslySetInnerHTML={{ __html: data?.description! }}
            />
            <Image src={data?.blog_image!} alt={data?.title!} width={800} height={500} className='w-full h-[400px] object-cover mt-5 rounded-lg' />
        </>
    )
}
