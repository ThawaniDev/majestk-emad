import { IPortfolioDT } from '@/types/portfolio-d-t';

type TranslationFunction = (key: string) => string;

export const getPortfolioDataOne = (t: TranslationFunction): IPortfolioDT[] => [
  {
    id: 1,
    image: '/assets/new_images_from_internet/Port_and_Containers.jpg',
    title: t('data.portfolioTitles.internationalTrade'),
    description: t('data.portfolioTitles.internationalTradeDesc'),
    detailsImage: '/assets/new_images_from_internet/conference_with_people_setting.jpg',
  },
  {
    id: 2,
    image: '/assets/new_images_from_internet/marketing_strategy.jpg',
    title: t('data.portfolioTitles.brandIdentity'),
    description: t('data.portfolioTitles.brandIdentityDesc'),
    detailsImage: '/assets/new_images_from_internet/conference_with_people_setting.jpg',
  },
  {
    id: 3,
    image: '/assets/new_images_from_internet/Port_and_Containers.jpg',
    title: t('data.portfolioTitles.websiteForAgency'),
    description: t('data.portfolioTitles.brandIdentityDesc'),
    detailsImage: '/assets/new_images_from_internet/conference_with_people_setting.jpg',
  },
  {
    id: 4,
    image: '/assets/new_images_from_internet/Port_and_Containers.jpg',
    title: t('data.portfolioTitles.mobileAppBusiness'),
    description: t('data.portfolioTitles.brandIdentityDesc'),
    detailsImage: '/assets/new_images_from_internet/conference_with_people_setting.jpg',
  },
  {
    id: 17,
    image: '/assets/new_images_from_internet/Port_and_Containers.jpg',
    title: t('data.portfolioTitles.uiMusicWebsite'),
    description: t('data.portfolioTitles.brandIdentityDesc'),
    detailsImage: '/assets/new_images_from_internet/conference_with_people_setting.jpg',
  },
  {
    id: 18,
    image: '/assets/new_images_from_internet/Port_and_Containers.jpg',
    title: t('data.portfolioTitles.brandIdentity'),
    description: t('data.portfolioTitles.brandIdentityDesc'),
    detailsImage: '/assets/new_images_from_internet/conference_with_people_setting.jpg',
  },
];

export const getPortfolioDataTwo = (t: TranslationFunction): IPortfolioDT[] => [
  {
    id: 5,
    image: '/assets/new_images_from_internet/marketing_strategy.jpg',
    title: t('data.portfolioTitles.uniqueModernUI'),
    detailsImage: '/assets/new_images_from_internet/conference_with_people_setting.jpg',
  },
  {
    id: 6,
    image: '/assets/new_images_from_internet/campaign_planning.jpg',
    title: t('data.portfolioTitles.uniqueModernUI'),
    detailsImage: '/assets/new_images_from_internet/conference_with_people_setting.jpg',
  },
  {
    id: 7,
    image: '/assets/new_images_from_internet/global_partnership.jpg',
    title: t('data.portfolioTitles.uniqueModernUI'),
    detailsImage: '/assets/new_images_from_internet/conference_with_people_setting.jpg',
  },
  {
    id: 8,
    image: '/assets/new_images_from_internet/planning.jpg',
    title: t('data.portfolioTitles.uniqueModernUI'),
    detailsImage: '/assets/new_images_from_internet/conference_with_people_setting.jpg',
  },
  {
    id: 9,
    image: '/assets/new_images_from_internet/data_analytics_tools.jpg',
    title: t('data.portfolioTitles.uniqueModernUI'),
    detailsImage: '/assets/new_images_from_internet/conference_with_people_setting.jpg',
  },
];

export const getPortfolioDataThree = (t: TranslationFunction): IPortfolioDT[] => [
  {
    id: 10,
    title: t('data.portfolioTitles.seoOptimization'),
    subtitle: t('data.portfolioTitles.brandingDesign'),
  },
  {
    id: 11,
    title: t('data.portfolioTitles.wordpressTheme'),
    subtitle: t('data.portfolioTitles.brandingDesign'),
  },
  {
    id: 12,
    title: t('data.portfolioTitles.digitalMarketing'),
    subtitle: t('data.portfolioTitles.brandingDesign'),
  },
];

export const getPortfolioDataFour = (t: TranslationFunction): IPortfolioDT[] => [
  {
    id: 13,
    image: '/assets/new_images_from_internet/office_showing_statstics.jpg',
    title: t('data.portfolioTitles.uniqueModernUI'),
  },
  {
    id: 14,
    image: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
    title: t('data.portfolioTitles.uniqueModernUI'),
  },
  {
    id: 15,
    image: '/assets/new_images_from_internet/papers_on_walls_for_mind_storm.jpg',
    title: t('data.portfolioTitles.uniqueModernUI'),
  },
  {
    id: 16,
    image: '/assets/new_images_from_internet/white_papers_over_each_other.jpg',
    title: t('data.portfolioTitles.uniqueModernUI'),
  },
];

export const portfolioData: IPortfolioDT[] = [
  ...getPortfolioDataOne((key) => key),
  ...getPortfolioDataTwo((key) => key),
  ...getPortfolioDataThree((key) => key),
  ...getPortfolioDataFour((key) => key),
];
