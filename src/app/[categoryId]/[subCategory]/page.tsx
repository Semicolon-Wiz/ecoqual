import React from 'react'
import ProductList from './ProductList'


export default async function SubCategoryPage({ params }: { params: Promise<{ categoryId: string, subCategory: string }> }) {
  const { categoryId, subCategory } = await params
  return (
    <main className='bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-100'>
      <ProductList categoryId={categoryId} subCategory={subCategory} />
    </main>
  )
}

