import { IProductDT } from '@/types/product-d-t';

// Define CartItem type (union of IProductDT or IProgramDT with quantity)
export type CartItem = IProductDT & { quantity: number };

// Function to calculate total amount for cart slice
export const calculateTotalAmount = (items: CartItem[]): number => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return total;
};
