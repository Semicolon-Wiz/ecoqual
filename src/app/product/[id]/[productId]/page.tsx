import React from 'react'
import SingleProduct from './SingleProduct'

export default async function SingleProductPage({ params }: { params: Promise<{ id: string; productId: string }> }) {
  const {id, productId } = await params

  return (
    <main className='bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-100'>
      <SingleProduct category={id} productId={productId} />
    </main>
  )
}
