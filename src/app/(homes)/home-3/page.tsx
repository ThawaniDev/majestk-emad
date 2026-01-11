import { Metadata } from 'next';
import HomeThreeMain from '@/views/homes/home-3';

export const metadata: Metadata = {
  title: 'Ageo - Home Three Page',
};

const HomeThreePage = () => {
  return <HomeThreeMain />;
};
export default HomeThreePage;
