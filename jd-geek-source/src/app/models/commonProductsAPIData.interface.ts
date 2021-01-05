import { CommonPortalData } from "./commonPortalData.interface";

export interface CommonProductsAPIData {
  from: number;
  to: number;
  currentPage: number;
  total: number;
  totalPages: number;
  queryTime: number;
  totalTime: number;
  partial: boolean;
  canonicalUrl: string;
  products: CommonPortalData[];
}
