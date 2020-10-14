import { ProductLimited } from './productLimited.interface';

export interface TestData {
  from: number;
  to: number;
  currentPage: number;
  total: number;
  totalPages: number;
  queryTime: number;
  totalTime: number;
  partial: boolean;
  canonicalUrl: string;
  products: ProductLimited[];
}
