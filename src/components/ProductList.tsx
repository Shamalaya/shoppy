import React from 'react'
import { useGetAllProductsQuery } from '../services/productsApi'
import Product from './Product'

function ProductList() {
    const {
        data: products,
        isSuccess,
        isError,
        error,
    } = useGetAllProductsQuery()

    let content

    if (isSuccess) {
        content = products.map((product) => (
            <Product key={product.id} product={product} />
        ))
    } else if (isError) {
        content = <div>{error.toString()}</div>
    }
    return (
        <section>
            <h2>Products</h2>
            {content}
        </section>
    )
}
export default ProductList
