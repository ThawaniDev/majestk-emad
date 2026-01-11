import { IBlogDT } from '@/types/blog-d-t';

type TranslationFunction = (key: string) => string;

export const getBlogDataOne = (t: TranslationFunction): IBlogDT[] => [
  {
    id: 1,
    image: '/assets/new_images_from_internet/marketing_strategy.jpg',
    title: t('data.blogTitles.marketingStrategies'),
    description: t('data.blogDescriptions.marketingStrategiesDesc'),
    publishedDate: 'NOVEMBER 21, 2018',
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
  },
  {
    id: 2,
    image: '/assets/new_images_from_internet/campaign_planning.jpg',
    title: t('data.blogTitles.viewSuccessful'),
    description: t('data.blogDescriptions.viewSuccessfulDesc'),
    publishedDate: 'NOVEMBER 21, 2018',
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
  },
  {
    id: 3,
    image: '/assets/new_images_from_internet/global_partnership.jpg',
    title: t('data.blogTitles.powerfulUIKit'),
    description: t('data.blogDescriptions.powerfulUIKitDesc'),
    publishedDate: 'NOVEMBER 21, 2018',
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
  },
];

export const getBlogDataTwo = (t: TranslationFunction): IBlogDT[] => [
  {
    id: 4,
    image: '/assets/new_images_from_internet/data_analytics_tools.jpg',
    title: t('data.blogTitles.biggestTrends'),
    description: t('data.blogDescriptions.biggestTrendsDesc'),
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
    btnText: t('data.readMore'),
  },
  {
    id: 5,
    image: '/assets/new_images_from_internet/office_showing_statstics.jpg',
    title: t('data.blogTitles.cloudProducts'),
    description: t('data.blogDescriptions.cloudProductsDesc'),
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
    btnText: t('data.readMore'),
  },
  {
    id: 6,
    image: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
    title: t('data.blogTitles.saasCloudPrimer'),
    description: t('data.blogDescriptions.saasCloudPrimerDesc'),
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
    btnText: t('data.readMore'),
  },
  {
    id: 7,
    image: '/assets/new_images_from_internet/Port_and_Containers.jpg',
    title: t('data.blogTitles.eugiatVarius'),
    description: t('data.blogDescriptions.eugiatVariusDesc'),
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
    btnText: t('data.readMore'),
  },
  {
    id: 8,
    image: '/assets/new_images_from_internet/planning.jpg',
    title: t('data.blogTitles.donecFinibus'),
    description: t('data.blogDescriptions.donecFinibusDesc'),
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
    btnText: t('data.readMore'),
  },
  {
    id: 9,
    image: '/assets/new_images_from_internet/papers_on_walls_for_mind_storm.jpg',
    title: t('data.blogTitles.feugiatVarius'),
    description: t('data.blogDescriptions.feugiatVariusDesc'),
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
    btnText: t('data.readMore'),
  },
];

export const getBlogDataThree = (t: TranslationFunction): IBlogDT[] => [
  {
    id: 10,
    image: '/assets/new_images_from_internet/marketing.jpg',
    publishedDate: 'March 23, 2023',
    category: t('data.blogCategories.development'),
    title: t('data.blogTitles.mainFontChanges'),
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
    btnText: t('data.readMore'),
  },
  {
    id: 11,
    image: '/assets/new_images_from_internet/do_something_great.jpg',
    publishedDate: 'June 7, 2024',
    category: t('data.blogCategories.development'),
    title: t('data.blogTitles.ambitiousBrands'),
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
    btnText: t('data.readMore'),
  },
  {
    id: 12,
    image: '/assets/new_images_from_internet/do_more.jpg',
    publishedDate: 'August 4, 2024',
    category: t('data.blogCategories.development'),
    title: t('data.blogTitles.newestTrends'),
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
    btnText: t('data.readMore'),
  },
  {
    id: 13,
    image: '/assets/new_images_from_internet/idea_in_hand.jpg',
    publishedDate: 'July 21, 2024',
    category: t('data.blogCategories.development'),
    title: t('data.blogTitles.topResults'),
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
    btnText: t('data.readMore'),
  },
];

export const getBlogDataFour = (t: TranslationFunction): IBlogDT[] => [
  {
    id: 14,
    image: '/assets/new_images_from_internet/white_papers_over_each_other.jpg',
    publishedDate: '21 July, 2024',
    category: t('data.blogCategories.webDesign'),
    title: t('data.blogTitles.responsiveTemplates'),
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
    btnText: t('data.readMore'),
  },
  {
    id: 15,
    image: '/assets/new_images_from_internet/conference_with_people_setting.jpg',
    publishedDate: '12 May, 2024',
    title: t('data.blogTitles.eyeCatchingTemplates'),
    category: t('data.blogCategories.webDeveloper'),
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
    btnText: t('data.readMore'),
  },
  {
    id: 16,
    image: '/assets/new_images_from_internet/reception.jpg',
    publishedDate: '8 March, 2024',
    title: t('data.blogTitles.saturnShaping'),
    category: t('data.blogCategories.webDesign'),
    detailsImage: '/assets/new_images_from_internet/office_with_screen_showing_trends.jpg',
    btnText: t('data.readMore'),
  },
];

export const getBlogDataFive = (t: TranslationFunction): IBlogDT[] => [
  {
    id: 17,
    image: '/assets/new_images_from_internet/marketing_strategy.jpg',
    publishedDate: 'April 14, 2024',
    author: t('data.blogAuthors.francisRoman'),
    title: t('data.blogTitles.curabiturFermentum'),
    btnText: t('data.readMore'),
  },
  {
    id: 18,
    images: ['/assets/new_images_from_internet/global_partnership.jpg', '/assets/new_images_from_internet/marketing_strategy.jpg', '/assets/new_images_from_internet/planning.jpg'],
    publishedDate: 'May 21, 2024',
    author: t('data.blogAuthors.iscoAlarcon'),
    title: t('data.blogTitles.aeneanAliquet'),
    btnText: t('data.readMore'),
  },
  {
    id: 19,
    image: '/assets/new_images_from_internet/planning.jpg',
    publishedDate: 'June 25, 2024',
    author: t('data.blogAuthors.sergioRamos'),
    title: t('data.blogTitles.curabiturFermentum'),
    btnText: t('data.readMore'),
  },
];

// Combined data export for static generation (uses getter functions with identity function)
export const blogData: IBlogDT[] = [
  ...getBlogDataOne((key) => key),
  ...getBlogDataTwo((key) => key),
  ...getBlogDataThree((key) => key),
  ...getBlogDataFour((key) => key),
  ...getBlogDataFive((key) => key),
];
