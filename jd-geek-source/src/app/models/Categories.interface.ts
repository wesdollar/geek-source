export interface CategoriesEntity {
  id: string;
  name: string;
}

export interface Categories {
  from: number;
  to: number;
  currentPage: number;
  total: number;
  totalPages: number;
  queryTime: string;
  totalTime: string;
  partial: boolean;
  canonicalUrl: string;
  categories?: CategoriesEntity[] | null;
}
