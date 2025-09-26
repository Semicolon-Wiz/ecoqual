import React from 'react'
import SingleProduct from './SingleProduct'

export default async function SingleProductPage({ params }: { params: Promise<{ id: string; productId: string }> }) {
  const {id, productId } = await params

  return (
    <main>
      <SingleProduct category={id} productId={productId} />
    </main>
  )
}
