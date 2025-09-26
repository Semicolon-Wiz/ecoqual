import React from 'react'
import ProductList from './ProductList'

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    return (
        <main>
            <ProductList id={id} />
        </main>
    )
}
