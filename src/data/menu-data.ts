import { IMenuDT } from '@/types/menu-d-t';

type TranslationFunction = (key: string) => string;

export const getMenuData = (t: TranslationFunction): IMenuDT[] => [
  {
    id: 1,
    title: t('data.menu.home'),
    link: '/',
  },
  {
    id: 2,
    title: t('data.menu.pages'),
    link: '#',
    dropdown_menus: [
      { title: t('data.menu.aboutUs'), link: '/about' },
      { title: t('data.menu.service'), link: '/service' },
    ],
  },
  {
    id: 6,
    title: t('data.menu.contact'),
    link: '/contact',
  },
];

export const menuData = getMenuData((key) => key);
