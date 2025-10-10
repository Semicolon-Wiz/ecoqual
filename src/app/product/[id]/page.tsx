import React from 'react'
import ProductList from './ProductList'

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    return (
        <main className='bg-gradient-to-br from-pink-50 via-purple-50 to-fuchsia-100'>
            <ProductList id={id} />
        </main>
    )
}
