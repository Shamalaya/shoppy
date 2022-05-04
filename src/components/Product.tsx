import React from 'react'
import { Link } from 'react-router-dom'
import { Product as ProductType } from '../types/Products'

type AppProps = {
    product: ProductType
}

function Product({ product }: AppProps) {
    return (
        <div>
            <div className="product-container">
                <Link to={`/products/${product.id}`} className="link">
                    <img src={product.image} alt={product.name} />
                </Link>
            </div>
            <footer>
                <h5>{product.name}</h5>
                <p>{product.price}</p>
            </footer>
        </div>
    )
}

export default Product
