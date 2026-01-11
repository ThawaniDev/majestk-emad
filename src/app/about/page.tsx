import { Metadata } from 'next';
import AboutMain from '@/views/about/about';

export const metadata: Metadata = {
  title: 'New Majestic - About Us',
};

const AboutPage = () => {
  return <AboutMain />;
};
export default AboutPage;
