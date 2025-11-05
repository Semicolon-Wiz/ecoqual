import React from 'react'
import ProductList from './ProductList'
import { getCanonicalUrl } from '@/utils/seo'
import { Metadata } from 'next'
import axios from 'axios'


export default async function SubCategoryPage({ params }: { params: Promise<{ categoryId: string, subCategory: string }> }) {
  const { categoryId, subCategory } = await params
  return (
    <main className='bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-100'>
      <ProductList categoryId={categoryId} subCategory={subCategory} />
    </main>
  )
}



export interface SubCategory {
  id: number;
  title: string;
  slug: string;
  description: string | null;
}

export interface Category {
  id: number;
  title: string;
  slug: string;
  category_heading: string;
  description: string;
}

export interface ProductResponse {
  category: Category;
  subcategory: SubCategory;
}
export async function generateMetadata(
  { params }: { params: Promise<{ categoryId: string, subCategory: string }> }
): Promise<Metadata> {
  const { categoryId, subCategory } = await params

  try {
    const res = await axios.get<ProductResponse>(`https://inforbit.in/demo/ecoqual/api/categories/${categoryId}/${subCategory}`);
    const pro = res.data;

    const title = pro.subcategory.title
    const description = pro.category.description

    const canonical = getCanonicalUrl(`${pro.category.slug}/${pro.subcategory.slug}`);

    return {
      title,
      description,
      alternates: {
        canonical,
      },
      openGraph: {
        title,
        description,
        url: canonical,
        siteName: 'EcoQual',
        images: [
          {
            url: '/images/logo/logo.svg',
            width: 1200,
            height: 630,
            alt: pro.subcategory.title,
          },
        ],
        locale: 'en_IN',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [
          '/images/logo/logo.svg'
        ],
      },
    };
  } catch (error) {
    console.error('❌ Error generating metadata:', error);
    return {
      title: 'EcoQual | Premium Healthcare Products',
      description: 'Explore EcoQual’s innovative hygiene and healthcare solutions.',
      alternates: {
        canonical: getCanonicalUrl(`/`),
      },
    };
  }
}
