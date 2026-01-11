import { StaticImageData } from 'next/image';

export interface IBlogDT {
  id: number;
  image?: StaticImageData | string;
  images?: (StaticImageData | string)[];
  title: string;
  author?: string;
  publishedDate?: string;
  commentCount?: string;
  detailsImage?: StaticImageData | string;
  description?: string;
  category?: string;
  btnText?: string;
  hasModalVideo?: string;
}
