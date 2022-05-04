import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Products, SingleProduct } from '../types/Products'
// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://course-api.co/',
    }),
    endpoints: (builder) => ({
        getAllProducts: builder.query<Products, void>({
            query: () => `react-store-products`,
        }),
        getSingleProduct: builder.query<SingleProduct, string>({
            query: (id) => `react-store-single-product?id=${id}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery, useGetSingleProductQuery } = productsApi
