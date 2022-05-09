export interface Product {
    id: string
    name: string
    price: number
    image: string
    colors: Array<string>
    company: string
    description: string
    category: string
}
export interface Products extends Array<Product> {}

export interface SingleProduct {
    id: string
    stock: number
    price: number
    shipping: boolean
    colors: string[]
    category: string
    images: Array<{
        id: string
        width: number
        height: number
        url: string
        filename: string
        size: number
        type: string
        thumbnails: {
            small: { url: string; width: number; height: number }
            large: { url: string; width: number; height: number }
            full: { url: string; width: number; height: number }
        }
    }>
    reviews: number
    stars: number
    name: string
    description: string
    company: string
}

export interface ImageType {
    id: string
    width: number
    height: number
    url: string
    filename: string
    size: number
    type: string
    thumbnails: {
        small: { url: string; width: number; height: number }
        large: { url: string; width: number; height: number }
        full: { url: string; width: number; height: number }
    }
}

export interface CartItemType {
    id: string
    name: string
    color: string
    amount: number
    image: string
    price: number
}
