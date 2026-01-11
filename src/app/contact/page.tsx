import { Metadata } from 'next';
import ContactMain from '@/views/contact/contact';

export const metadata: Metadata = {
  title: 'New Majestic - Contact Us',
};

const ContactPage = () => {
  return <ContactMain />;
};

export default ContactPage;
