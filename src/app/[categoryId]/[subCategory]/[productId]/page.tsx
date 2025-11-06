import React from 'react';
import SingleProduct from './SingleProduct';
import type { Metadata } from 'next';
import { getCanonicalUrl } from '@/utils/seo';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import axios from 'axios'


export interface Product {
  id: number;
  title: string;
  slug: string;
  product_description: string;
  product_specification: string;
  video_id: string | null;
  meta_title: string | null;
  meta_description: string | null;
  category: Category;
  images: string[];
  materials: string[];
  ingredients: string[];
  specifications: string[];
  additional_features: string[];
}

export interface Category {
  id: number;
  title: string;
  slug: string;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  product: T;
}


export async function generateMetadata(
  { params }: { params: { productId: string; subCategory: string } }
): Promise<Metadata> {
  const { productId, subCategory } = params;

  try {
    const res = await axios.get<ApiResponse<Product>>(
      `https://inforbit.in/demo/ecoqual/api/products/${productId}`
    );

    const product = res.data?.product;

    if (!product) {
      return {
        title: 'Product Not Found | EcoQual',
        description: 'The product you are looking for could not be found.',
        alternates: {
          canonical: getCanonicalUrl(`/`),
        },
      };
    }

    const title = product.meta_title || `${product.title} | EcoQual`;
    const description = product.meta_description || `Explore details about ${product.title} from our ${subCategory} category.`;

    const canonical = getCanonicalUrl(`/${product.category.slug}/${subCategory}/${product.slug}`);

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
            url: product.images?.[0],
            width: 1200,
            height: 630,
            alt: product.title,
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
          product.images?.[0]
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




export default async function SingleProductPage({
  params,
}: {
  params: { productId: string; subCategory: string };
}) {
  const { productId, subCategory } = params;
  const queryClient = new QueryClient()

  const fetchProducts = async (id: string): Promise<Product> => {
    const res = await axios.get<ApiResponse<Product>>(`https://inforbit.in/demo/ecoqual/api/products/${id}`);
    return res.data.product;
  };

  await queryClient.prefetchQuery({
    queryKey: [subCategory, productId],
    queryFn: () => fetchProducts(productId),
  })
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-100">
        <SingleProduct productId={productId} subCategory={subCategory} />
      </main>
    </HydrationBoundary>
  );
}

