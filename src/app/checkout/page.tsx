import { Metadata } from 'next';
import CheckoutMain from '@/views/checkout/checkout';

export const metadata: Metadata = {
  title: 'Ageo - Checkout Page',
};

const CartPage = () => {
  return <CheckoutMain />;
};

export default CartPage;
