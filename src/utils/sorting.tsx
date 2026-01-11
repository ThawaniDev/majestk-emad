import { IProductDT } from '../types/product-d-t';

// Function to sort products based on the selected sort order
export const sortProducts = (
  products: IProductDT[],
  sortOrder: string
): IProductDT[] => {
  switch (sortOrder) {
    case 'low-to-high':
      // Sort products from low to high price, breaking ties by comparing titles
      return [...products].sort((a, b) => {
        return a.price !== b.price
          ? a.price - b.price
          : a.title.localeCompare(b.title);
      });

    case 'high-to-low':
      // Sort products from high to low price, breaking ties by comparing titles
      return [...products].sort((a, b) => {
        return a.price !== b.price
          ? b.price - a.price
          : a.title.localeCompare(b.title);
      });

    default:
      // Return products as-is if no sort order is specified
      return products;
  }
};
