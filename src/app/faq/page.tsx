import { Metadata } from 'next';
import FaqMain from '@/views/faq/faq';

export const metadata: Metadata = {
  title: 'Ageo - Faq Page',
};

const FaqPage = () => {
  return <FaqMain />;
};
export default FaqPage;
