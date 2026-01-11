'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState<string | null>(null);
  const { t } = useLanguage();

  const menuData = [
    {
      id: 1,
      title: t('navigation.home'),
      link: `/`,
    },
    {
      id: 2,
      title: t('navigation.pages'),
      link: '#',
      dropdown_menus: [
        { title: t('navigation.aboutUs'), link: `/about` },
        { title: t('navigation.service'), link: `/service` },
      ],
    },
    {
      id: 6,
      title: t('navigation.contact'),
      link: `/contact`,
    },
  ];

  // Toggle Mobile Menu
  const toggleMobileMenu = (menu: string) => {
    setNavTitle((prev) => (prev === menu ? null : menu));
  };

  return (
    <ul>
      {menuData.map((menu) => (
        <li
          key={menu.id}
          className={`${menu.dropdown_menus ? 'has-dropdown' : ''} ${navTitle === menu.title ? 'active' : ''}`}
        >
          <Link href={menu.link}>
            {menu.title}
            {menu.dropdown_menus && (
              <button
                className={`dropdown-toggle-btn ${
                  navTitle === menu.title ? 'dropdown-opened' : ''
                } d-xl-none`}
                onClick={(e) => {
                  e.preventDefault();
                  toggleMobileMenu(menu.title);
                }}
              >
                <i className="fal fa-angle-right"></i>
              </button>
            )}
          </Link>
          {menu.dropdown_menus ? (
            <ul
              className={`it-submenu submenu ${
                navTitle === menu.title ? 'd-block' : ''
              }`}
            >
              {menu.dropdown_menus?.map((item, i) => (
                <li key={i}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
};
export default MobileMenus;
