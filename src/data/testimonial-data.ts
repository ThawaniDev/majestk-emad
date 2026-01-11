import { ITestimonialDT } from '@/types/testimonial-d-t';

import avatarImg1 from '@/assets/img/testimonial/author-1-1.png';
import avatarImg2 from '@/assets/img/testimonial/author-1-4.png';
import avatarImg3 from '@/assets/img/avata/avata-1.png';
import avatarImg4 from '@/assets/img/testimonial/author-1-6.png';
import avatarImg5 from '@/assets/img/testimonial/author-1-5.png';

type TranslationFunction = (key: string) => string;

export const getTestimonialDataOne = (t: TranslationFunction): ITestimonialDT[] => [
  {
    id: 1,
    description: t('data.testimonials.testimonial1'),
    author: t('data.testimonials.rapara'),
    avatar: avatarImg1,
    designation: t('data.testimonials.partnerCompany'),
  },
  {
    id: 2,
    description: t('data.testimonials.testimonial2'),
    author: t('data.testimonials.bualomo'),
    avatar: avatarImg2,
    designation: t('data.testimonials.partnerCompany'),
  },
  {
    id: 3,
    description: t('data.testimonials.testimonial3'),
    author: 'Client Testimonial',
    avatar: avatarImg1,
    designation: t('data.testimonials.businessPartner'),
  },
];

export const getTestimonialDataTwo = (t: TranslationFunction): ITestimonialDT[] => [
  {
    id: 1,
    author: t('data.testimonials.rapara'),
    designation: t('data.testimonials.partnerCompany'),
    avatar: avatarImg3,
    description: t('data.testimonials.testimonial4'),
  },
  {
    id: 2,
    author: t('data.testimonials.bualomo'),
    designation: t('data.testimonials.partnerCompany'),
    avatar: avatarImg3,
    description: t('data.testimonials.testimonial5'),
  },
  {
    id: 3,
    author: t('data.testimonials.businessPartner'),
    designation: t('data.testimonials.regionalClient'),
    avatar: avatarImg3,
    description: t('data.testimonials.testimonial6'),
  },
  {
    id: 4,
    author: t('data.testimonials.enterpriseClient'),
    designation: t('data.testimonials.corporatePartner'),
    avatar: avatarImg3,
    description: t('data.testimonials.testimonial7'),
  },
];

export const getTestimonialDataThree = (t: TranslationFunction): ITestimonialDT[] => [
  {
    id: 1,
    author: t('data.testimonials.rapara'),
    designation: t('data.testimonials.partnerCompany'),
    avatar: avatarImg4,
    description: t('data.testimonials.testimonial8'),
  },
  {
    id: 2,
    author: t('data.testimonials.bualomo'),
    designation: t('data.testimonials.partnerCompany'),
    avatar: avatarImg2,
    description: t('data.testimonials.testimonial9'),
  },
  {
    id: 3,
    author: t('data.testimonials.strategicPartner'),
    designation: t('data.testimonials.businessClient'),
    avatar: avatarImg5,
    description: t('data.testimonials.testimonial10'),
  },
];

export const testimonialData = [
  ...getTestimonialDataOne((key) => key),
  ...getTestimonialDataTwo((key) => key),
  ...getTestimonialDataThree((key) => key),
];
