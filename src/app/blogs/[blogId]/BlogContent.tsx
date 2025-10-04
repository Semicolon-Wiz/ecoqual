'use client';

import { BlogSkeleton } from "@/components/Skeleton";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Blog {
    id: number;
    title: string;
    slug: string;
    blog_image: string;
    bog_description: string;
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
        <div className='relative w-full'>

        </div>
    )
}
