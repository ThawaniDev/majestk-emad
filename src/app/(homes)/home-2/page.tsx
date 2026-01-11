import { Metadata } from 'next';
import HomeTwoMain from '@/views/homes/home-2';

export const metadata: Metadata = {
  title: 'Ageo - Home Two Page',
};

const HomeTwoPage = () => {
  return <HomeTwoMain />;
};
export default HomeTwoPage;
