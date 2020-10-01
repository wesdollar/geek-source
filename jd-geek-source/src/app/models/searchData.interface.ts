import { Product } from './product.interface';

export interface SearchData {
    from: number,
    to: number,
    currentPage: number,
    total: number,
    totalPages: number,
    queryTime: number,
    totalTime: number,
    partial: boolean,
    canonicalUrl: string,
    products: Product[]
}
