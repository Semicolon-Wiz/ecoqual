import BlogCard from '@/components/BlogCard'
import { Metadata } from 'next'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import axios from 'axios'

export const metadata: Metadata = {
  title: 'Ecoqual Blog | Hygiene & Healthcare Insights in India',
  description: 'Stay informed with Ecoqual’s blog — insights on hygiene systems, hospital consumables, sustainability in care and India’s evolving healthcare standards.',
  alternates: {
    canonical: 'https://www.ecoqual.in/blogs',
  },
  openGraph: {
    title: 'Ecoqual Blog | Hygiene & Healthcare Insights in India',
    description: 'Stay informed with Ecoqual’s blog — insights on hygiene systems, hospital consumables, sustainability in care and India’s evolving healthcare standards.',
    url: 'https://www.ecoqual.in/blogs',
    siteName: 'EcoQual Healthcare Solution',
    images: [
      {
        url: '/images/logo/logo.svg',
        width: 1200,
        height: 630,
        alt: 'EcoQual Healthcare Solution',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecoqual Blog | Hygiene & Healthcare Insights in India',
    description: 'Stay informed with Ecoqual’s blog — insights on hygiene systems, hospital consumables, sustainability in care and India’s evolving healthcare standards.',
    images: ['/images/logo/logo.svg'],
  },
}

export interface Blog {
  id: number
  title: string
  slug: string
  blog_image: string
  bog_description: string
}

export interface BlogApi {
  success: boolean
  message: string
  data: Blog[]
}

export async function FetchBlogs(): Promise<Blog[]> {
  const response = await axios.get<BlogApi>(
    'https://inforbit.in/demo/ecoqual/api/blog'
  )
  return response.data.data
}

export default async function BlogsPage() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['blogs'],
    queryFn: FetchBlogs,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BlogCard />
    </HydrationBoundary>
  )
}
