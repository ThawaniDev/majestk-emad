type TranslationFunction = (key: string) => string;

export interface GalleryDataType {
  id: number;
  image?: string;
  title: string;
  description: string;
  year: string;
}

export const getGalleryDataOne = (t: TranslationFunction): GalleryDataType[] => [
  {
    id: 1,
    image: '/assets/new_images_from_internet/do_something_great.jpg',
    title: t('gallery.excellenceInTrade'),
    description: t('gallery.excellenceInTradeDesc'),
    year: '2025',
  },
  {
    id: 2,
    image: '/assets/new_images_from_internet/do_more.jpg',
    title: t('gallery.marketingInnovation'),
    description: t('gallery.marketingInnovationDesc'),
    year: '2024',
  },
  {
    id: 3,
    image: '/assets/new_images_from_internet/idea_in_hand.jpg',
    title: t('gallery.strategicPartnership'),
    description: t('gallery.strategicPartnershipDesc'),
    year: '2023',
  },
  {
    id: 4,
    image: '/assets/new_images_from_internet/marketing.jpg',
    title: t('gallery.brandDevelopment'),
    description: t('gallery.brandDevelopmentDesc'),
    year: '2023',
  },
  {
    id: 5,
    title: t('gallery.marketLeadership'),
    image: '/assets/new_images_from_internet/idea_in_hand.jpg',
    description: t('gallery.marketLeadershipDesc'),
    year: '2022',
  },
  {
    id: 6,
    title: t('gallery.digitalExcellence'),
    image: '/assets/new_images_from_internet/marketing.jpg',
    description: t('gallery.digitalExcellenceDesc'),
    year: '2021',
  },
  {
    id: 7,
    image: '/assets/new_images_from_internet/marketing.jpg',
    title: t('gallery.uiDesignAward'),
    description: t('gallery.uiDesignAwardDesc'),
    year: '2021',
  },
  {
    id: 8,
    title: t('gallery.productOfDay'),
    image: '/assets/new_images_from_internet/idea_in_hand.jpg',
    description: t('gallery.productOfDayDesc'),
    year: '2020',
  },
  {
    id: 9,
    image: '/assets/new_images_from_internet/marketing.jpg',
    title: t('gallery.websiteOfDay'),
    description: t('gallery.websiteOfDayDesc'),
    year: '2020',
  },
];
