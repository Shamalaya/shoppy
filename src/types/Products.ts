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
    colors: Array<string>
    category: string
    images: Array<{
        id: string
        width: number
        height: number
        url: string
        filename: string
        size: number
        type: string
        thumbnails: [
            small: { url: string; width: number; height: number },
            large: { url: string; width: number; height: number },
            full: { url: string; width: number; height: number }
        ]
    }>
    reviews: number
    stars: number
    name: string
    description: string
    company: string
}

export interface ImagesType
    extends Array<{
        id: string
        width: number
        height: number
        url: string
        filename: string
        size: number
        type: string
        thumbnails: [
            small: { url: string; width: number; height: number },
            large: { url: string; width: number; height: number },
            full: { url: string; width: number; height: number }
        ]
    }> {}
