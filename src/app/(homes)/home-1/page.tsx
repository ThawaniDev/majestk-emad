import { Metadata } from 'next';
import HomeMain from '@/views/homes/home-1';

export const metadata: Metadata = {
  title: 'New Majestic - Leading Solutions for Trade and Marketing',
};

const Home = () => {
  return <HomeMain />;
};
export default Home;
