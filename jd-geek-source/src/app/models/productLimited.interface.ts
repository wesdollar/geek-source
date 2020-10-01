// Product Limited interface has only the product information that is being asked for in the call
export interface ProductLimited {
  sku: number,
  name: string,
  salePrice: number,
  department: string,
}
