import React from 'react'
import SingleProduct from './SingleProduct'

export default async function SingleProductPage({ params }: { params: Promise<{ productId: string; subCategory: string }> }) {
  const { productId, subCategory } = await params

  return (
    <main className='bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-100'>
      <SingleProduct productId={productId} subCategory={subCategory}  />
    </main>
  )
}
