import { StaticImageData } from 'next/image';

export interface IMenuDT {
  id: number;
  title: string;
  link: string;
  home_menus?: {
    title: string;
    link: string;
    img: StaticImageData;
    button: { label: string; href: string }[];
  }[];
  dropdown_menus?: {
    title: string;
    link: string;
  }[];
}
