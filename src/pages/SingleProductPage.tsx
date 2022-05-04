import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useGetSingleProductQuery } from '../services/productsApi'
import { Loading, Error } from '../components'
import ProductImages from '../components/ProductImages'

function SingleProductPage() {
    const { id } = useParams()
    const { data: product, isError, isLoading } = useGetSingleProductQuery(id!)

    if (isLoading) {
        return <Loading />
    }
    if (isError) {
        return <Error />
    }
    if (product === undefined) {
        return <Error />
    }
    const { name, price, description, images } = product
    return (
        <div>
            <div>
                <Link to="/products" className="btn">
                    back to products
                </Link>
                <div className="single-product-container">
                    <ProductImages images={images} />
                    <section className="content">
                        <h2>{name}</h2>
                        <h5 className="price">{price}</h5>
                        <p className="description">{description}</p>

                        <hr />
                    </section>
                </div>
            </div>
        </div>
    )
}
export default SingleProductPage
