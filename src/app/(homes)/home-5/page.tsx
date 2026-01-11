import { Metadata } from 'next';
import HomeFiveMain from '@/views/homes/home-5';

export const metadata: Metadata = {
  title: 'Ageo - Home Five Page',
};

const HomeFivePage = () => {
  return <HomeFiveMain />;
};

export default HomeFivePage;
