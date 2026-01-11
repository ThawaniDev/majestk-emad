import { StaticImageData } from 'next/image';

export interface IPortfolioDT {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  image?: StaticImageData | string;
  client?: string;
  serviceYear?: string;
  detailsImage?: StaticImageData | string;
}
