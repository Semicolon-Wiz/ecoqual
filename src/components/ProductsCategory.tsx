import { Heading, Section, Subheading, Wrapper } from '@/utils/Section'
import axios from 'axios';
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query'
import Category  from './GetCategory';

interface SubCategory {
    id: number;
    title: string;
    slug: string;
    category_id: number;
    image: string;
}

interface Category {
    id: number;
    title: string;
    slug: string;
    category_heading: string;
    description: string;
    image: string;
    sub_categories: SubCategory[];
}

interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

const fetchCategories = async (): Promise<Category[]> => {
    const res = await axios.get<ApiResponse<Category[]>>(
        "https://inforbit.in/demo/ecoqual/api/menu"
    );
    return res.data.data;
};


export default async function ProductsCategory() {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: ["categories", 'home'],
        queryFn: fetchCategories,
        staleTime: 1000 * 60 * 5
    })
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Section classname='bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-100'>
                <Wrapper>
                    <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                        <div className='flex-1 text-center'>
                            <Heading classname='max-w-3xl mx-auto'>
                                Comprehensive Solutions for <span className='!font-inter text-secondry'>Smarter Healthcare Environments</span>
                            </Heading>
                            <Subheading classname='max-w-xl mx-auto'>
                                From patient care essentials to hygiene systems and professional wear, Ecoqual delivers trusted products that enhance safety, comfort, and efficiency across every healthcare space.
                            </Subheading>
                        </div>
                        <Category />
                    </div>
                </Wrapper>
            </Section>
        </HydrationBoundary>
    )
}