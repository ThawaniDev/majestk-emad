'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/language-context';

interface MenuItem {
  id: number;
  title: string;
  link: string;
}

const HeaderMenus = () => {
  const { t } = useLanguage();

  const menuData: MenuItem[] = [
    {
      id: 1,
      title: t('navigation.home'),
      link: `/`,
    },
    {
      id: 2,
      title: t('navigation.aboutUs'),
      link: `/about`,
    },  
    {
      id: 3,
      title: t('navigation.service'),
      link: `/service`,
    }, 
    {
      id: 4,
      title: t('navigation.contact'),
      link: `/contact`,
    },
  ];

  return (
    <ul>
      {menuData.map((menu) => (
        <li key={menu.id}>
          <Link href={menu.link}>{menu.title}</Link>
        </li>
      ))}
    </ul>
  );
};
export default HeaderMenus;
