import { Metadata } from 'next';
import HomeOnePage from './(homes)/home-1/page';

export const metadata: Metadata = {
  title: 'New Majestic - Leading Solutions for Trade and Marketing',
};

export default function Home() {
  return (
    <>
      <HomeOnePage />
    </>
  );
}
