import PortfolioMain from '@/views/portfolio/portfolio';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ageo - Portfolio Page',
};

const PortfolioPage = () => {
  return <PortfolioMain />;
};
export default PortfolioPage;
