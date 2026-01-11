import { Metadata } from 'next';
import ShopMain from '@/views/shop/shop';

export const metadata: Metadata = {
  title: 'Ageo - Shop Page',
};

const ShopPage = () => {
  return <ShopMain />;
};
export default ShopPage;
