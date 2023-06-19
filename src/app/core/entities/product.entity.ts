export enum ImageSize {
    small = 'small',
    large = 'large' 
}

export interface ProductImage {
    size: ImageSize,
    url: string
}

export interface Product {
    code: string,
    name: string,
    price: number,
    description: string,
    image: ProductImage
}
