import { IServiceDT } from '@/types/service-d-t';

type TranslationFunction = (key: string) => string;

export const getServiceDataOne = (t: TranslationFunction): IServiceDT[] => [
  {
    id: 1,
    image: '/assets/new_images_from_internet/Port_and_Containers.jpg',
    title: t('services.generalTrade'),
    titleKey: 'services.generalTrade',
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
  },
  {
    id: 2,
    image: '/assets/new_images_from_internet/marketing_strategy.jpg',
    title: t('services.comprehensiveMarketing'),
    titleKey: 'services.comprehensiveMarketing',
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
  },
  {
    id: 3,
    image: '/assets/new_images_from_internet/campaign_planning.jpg',
    title: t('services.campaignManagement'),
    titleKey: 'services.campaignManagement',
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
  },
  {
    id: 4,
    image: '/assets/new_images_from_internet/marketing_strategy.jpg',
    title: t('services.brandBuilding'),
    titleKey: 'services.brandBuilding',
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
  },
  {
    id: 5,
    image: '/assets/new_images_from_internet/campaign_planning.jpg',
    title: t('services.marketResearch'),
    titleKey: 'services.marketResearch',
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
  },
];

export const getServiceDataTwo = (t: TranslationFunction): IServiceDT[] => [
  {
    id: 6,
    title: t('services.generalTrade'),
    serviceCount: '01',
    description: t('data.serviceDescriptions.generalTrade'),
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
    btnText: t('data.readMore'),
  },
  {
    id: 7,
    title: t('services.comprehensiveMarketing'),
    serviceCount: '02',
    description: t('data.serviceDescriptions.comprehensiveMarketing'),
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
    btnText: t('data.readMore'),
  },
  {
    id: 8,
    title: t('services.brandBuilding'),
    serviceCount: '03',
    description: t('data.serviceDescriptions.brandBuilding'),
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
    btnText: t('data.readMore'),
  },
];

export const getServiceDataThree = (t: TranslationFunction): IServiceDT[] => [
  {
    id: 9,
    title: t('services.marketResearch'),
    icon: 'flaticon-brush',
    description: t('data.serviceDescriptions.marketResearch'),
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
    btnText: t('data.readMore'),
  },
  {
    id: 10,
    title: t('services.salesStrategy'),
    icon: 'flaticon-layers',
    description: t('data.serviceDescriptions.salesStrategy'),
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
    btnText: t('data.readMore'),
  },
  {
    id: 11,
    title: t('services.teamTraining'),
    icon: 'flaticon-solution-1',
    description: t('data.serviceDescriptions.teamTraining'),
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
    btnText: t('data.readMore'),
  },
];

export const getServiceDataFour = (t: TranslationFunction): IServiceDT[] => [
  {
    id: 12,
    title: t('data.serviceTitles.digitalMarketing'),
    icon: 'flaticon-digital-marketing',
    btnText: t('data.readMore'),
  },
  {
    id: 13,
    title: t('data.serviceTitles.uiUxDesigning'),
    icon: 'flaticon-ux-design',
    btnText: t('data.readMore'),
  },
  {
    id: 14,
    title: t('data.serviceTitles.marketingStrategy'),
    icon: 'flaticon-growth',
    btnText: t('data.readMore'),
  },
  {
    id: 15,
    title: t('data.serviceTitles.itServiceManagement'),
    icon: 'flaticon-product-owner',
    btnText: t('data.readMore'),
  },
  {
    id: 16,
    title: t('data.serviceTitles.dataVisualization'),
    icon: 'flaticon-analytics',
    btnText: t('data.readMore'),
  },
];

// Combined data export for static generation (uses getter functions with identity function)
export const serviceData: IServiceDT[] = [
  ...getServiceDataOne((key) => key),
  ...getServiceDataTwo((key) => key),
  ...getServiceDataThree((key) => key),
  ...getServiceDataFour((key) => key),
];
