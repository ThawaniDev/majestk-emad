import { StaticImageData } from 'next/image';

export interface IProductDT {
  id: number;
  title: string;
  image: StaticImageData | string;
  price: number;
  reviewCount?: number;
  description?: string;
  category?: string;
  detailsImg?: StaticImageData | string;
  sku?: string;
  tag?: string;
  socials?: {
    icon: string;
    link: string;
  }[];
  btnText?: string;
}
