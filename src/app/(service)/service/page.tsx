import { Metadata } from 'next';
import ServiceMain from '@/views/serice/service';

export const metadata: Metadata = {
  title: 'Ageo - Service Page',
};

const ServicePage = () => {
  return <ServiceMain />;
};
export default ServicePage;
