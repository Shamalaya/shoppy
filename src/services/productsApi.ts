import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Products, Product } from '../types/Products'
// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query<Products, void>({
            query: () => `products/`,
        }),
        getSingleProduct: builder.query<Product, string>({
            query: (id) => `products/${id}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery, useGetSingleProductQuery } = productsApi
