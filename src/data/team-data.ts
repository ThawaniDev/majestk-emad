import { ITeamDT } from '@/types/team-d-t';

type TranslationFunction = (key: string) => string;

export const getTeamDataOne = (t: TranslationFunction): ITeamDT[] => [
  {
    id: 1,
    name: t('data.teamMembers.ahmed'),
    image: '/assets/new_images_from_internet/conference_with_people_setting.jpg',
    designation: t('data.teamMembers.tradeSpecialist'),
    department: t('data.teamMembers.generalTradeDept'),
    experience: '18',
    phone: '(+914)123456789',
    email: 'info@newmajestic.com',
    socials: [
      { platform: 'fab fa-facebook-f', link: 'https://facebook.com' },
      { platform: 'fab fa-twitter', link: 'https://x.com' },
      { platform: 'fab fa-instagram', link: 'https://www.instagram.com/' },
      {
        platform: 'fab fa-linkedin-in',
        link: 'https://www.linkedin.com',
      },
    ],
    skills: [
      { title: t('data.teamMembers.marketAnalysis'), value: '90' },
      { title: t('data.teamMembers.businessDevelopment'), value: '85' },
      { title: t('data.teamMembers.tradeStrategy'), value: '92' },
    ],
  },
  {
    id: 2,
    name: t('data.teamMembers.sarah'),
    image: '/assets/new_images_from_internet/planning.jpg',
    designation: t('data.teamMembers.marketingDirector'),
    department: t('data.teamMembers.marketingStrategyDept'),
    experience: '10',
    phone: '(+914)123456789',
    email: 'info@newmajestic.com',
    socials: [
      { platform: 'fab fa-facebook-f', link: 'https://facebook.com' },
      { platform: 'fab fa-twitter', link: 'https://x.com' },
      { platform: 'fab fa-instagram', link: 'https://www.instagram.com/' },
      {
        platform: 'fab fa-linkedin-in',
        link: 'https://www.linkedin.com',
      },
    ],
    skills: [
      { title: t('data.teamMembers.digitalMarketing'), value: '95' },
      { title: t('data.teamMembers.campaignManagement'), value: '88' },
      { title: t('data.teamMembers.brandDevelopment'), value: '90' },
    ],
  },
  {
    id: 3,
    name: t('data.teamMembers.fatima'),
    image: '/assets/new_images_from_internet/global_partnership.jpg',
    designation: t('data.teamMembers.businessAnalyst'),
    department: t('data.teamMembers.marketResearchDept'),
    experience: '05',
    phone: '(+914)123456789',
    email: 'info@newmajestic.com',
    socials: [
      { platform: 'fab fa-facebook-f', link: 'https://facebook.com' },
      { platform: 'fab fa-twitter', link: 'https://x.com' },
      { platform: 'fab fa-instagram', link: 'https://www.instagram.com/' },
      {
        platform: 'fab fa-linkedin-in',
        link: 'https://www.linkedin.com',
      },
    ],
    skills: [
      { title: t('data.teamMembers.marketAnalysis'), value: '88' },
      { title: t('data.teamMembers.dataAnalytics'), value: '92' },
      { title: t('data.teamMembers.strategicPlanning'), value: '86' },
    ],
  },
  {
    id: 4,
    name: t('data.teamMembers.michael'),
    image: '/assets/new_images_from_internet/office_showing_statstics.jpg',
    designation: t('data.teamMembers.salesDirector'),
    department: t('data.teamMembers.salesGrowthDept'),
    experience: '25',
    phone: '(+914)123456789',
    email: 'info@newmajestic.com',
    socials: [
      { platform: 'fab fa-facebook-f', link: 'https://facebook.com' },
      { platform: 'fab fa-twitter', link: 'https://x.com' },
      { platform: 'fab fa-instagram', link: 'https://www.instagram.com/' },
      {
        platform: 'fab fa-linkedin-in',
        link: 'https://www.linkedin.com',
      },
    ],
    skills: [
      { title: 'Web Development', value: '75' },
      { title: 'Business Solution', value: '92' },
      { title: 'Digital Marketing', value: '86' },
    ],
  },
  {
    id: 5,
    name: t('data.teamMembers.anna'),
    image: '/assets/new_images_from_internet/data_analytics_tools.jpg',
    designation: t('data.teamMembers.developer'),
    department: t('data.teamMembers.webDeveloperDept'),
    experience: '12',
    phone: '(+914)123456789',
    email: 'ageoinfo@gmail.com',
    socials: [
      { platform: 'fab fa-facebook-f', link: 'https://facebook.com' },
      { platform: 'fab fa-twitter', link: 'https://x.com' },
      { platform: 'fab fa-instagram', link: 'https://www.instagram.com/' },
      {
        platform: 'fab fa-linkedin-in',
        link: 'https://www.linkedin.com',
      },
    ],
    skills: [
      { title: 'Web Development', value: '75' },
      { title: 'Business Solution', value: '92' },
      { title: 'Digital Marketing', value: '86' },
    ],
  },
  {
    id: 6,
    name: t('data.teamMembers.francisRoman'),
    image: '/assets/new_images_from_internet/planning.jpg',
    designation: t('data.teamMembers.developer'),
    department: t('data.teamMembers.webDeveloperDept'),
    experience: '10',
    phone: '(+914)123456789',
    email: 'ageoinfo@gmail.com',
    socials: [
      { platform: 'fab fa-facebook-f', link: 'https://facebook.com' },
      { platform: 'fab fa-twitter', link: 'https://x.com' },
      { platform: 'fab fa-instagram', link: 'https://www.instagram.com/' },
      {
        platform: 'fab fa-linkedin-in',
        link: 'https://www.linkedin.com',
      },
    ],
    skills: [
      { title: 'Web Development', value: '90' },
      { title: 'Business Solution', value: '82' },
      { title: 'Digital Marketing', value: '76' },
    ],
  },
];

export const getTeamDataTwo = (t: TranslationFunction): ITeamDT[] => [
  {
    id: 7,
    name: t('data.teamMembers.jeanStone'),
    image: '/assets/new_images_from_internet/marketing_strategy.jpg',
    designation: t('data.teamMembers.developer'),
    department: t('data.teamMembers.webDeveloperDept'),
    experience: '12',
    phone: '(+914)123456789',
    email: 'ageoinfo@gmail.com',
    socials: [
      { platform: 'fa-brands fa-facebook-f', link: 'https://facebook.com' },
      { platform: 'fa-brands fa-twitter', link: 'https://x.com' },
      {
        platform: 'fa-brands fa-instagram',
        link: 'https://www.instagram.com/',
      },
      {
        platform: 'fa-brands fa-linkedin-in',
        link: 'https://www.linkedin.com',
      },
    ],
    skills: [
      { title: 'Web Development', value: '75' },
      { title: 'Business Solution', value: '92' },
      { title: 'Digital Marketing', value: '86' },
    ],
  },
  {
    id: 8,
    name: t('data.teamMembers.lindaMarsh'),
    image: '/assets/new_images_from_internet/campaign_planning.jpg',
    designation: t('data.teamMembers.designer'),
    department: t('data.teamMembers.webDesignerDept'),
    experience: '18',
    phone: '(+914)123456789',
    email: 'ageoinfo@gmail.com',
    socials: [
      { platform: 'fa-brands fa-facebook-f', link: 'https://facebook.com' },
      { platform: 'fa-brands fa-twitter', link: 'https://x.com' },
      {
        platform: 'fa-brands fa-instagram',
        link: 'https://www.instagram.com/',
      },
      {
        platform: 'fa-brands fa-linkedin-in',
        link: 'https://www.linkedin.com',
      },
    ],
    skills: [
      { title: 'Web Development', value: '80' },
      { title: 'Business Solution', value: '72' },
      { title: 'Digital Marketing', value: '96' },
    ],
  },
  {
    id: 9,
    name: t('data.teamMembers.saraRose'),
    image: '/assets/new_images_from_internet/reception.jpg',
    designation: t('data.teamMembers.adviser'),
    department: t('data.teamMembers.digitalMarketingDept'),
    experience: '8',
    phone: '(+914)123456789',
    email: 'ageoinfo@gmail.com',
    socials: [
      { platform: 'fa-brands fa-facebook-f', link: 'https://facebook.com' },
      { platform: 'fa-brands fa-twitter', link: 'https://x.com' },
      {
        platform: 'fa-brands fa-instagram',
        link: 'https://www.instagram.com/',
      },
      {
        platform: 'fa-brands fa-linkedin-in',
        link: 'https://www.linkedin.com',
      },
    ],
    skills: [
      { title: 'Web Development', value: '90' },
      { title: 'Business Solution', value: '82' },
      { title: 'Digital Marketing', value: '89' },
    ],
  },
];

export const teamData: ITeamDT[] = [
  ...getTeamDataOne((key) => key),
  ...getTeamDataTwo((key) => key),
];
