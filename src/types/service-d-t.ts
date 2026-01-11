import { StaticImageData } from 'next/image';

export interface IServiceDT {
  id: number;
  image?: StaticImageData | string;
  title: string;
  titleKey?: string;
  description?: string;
  descriptionKey?: string;
  detailsImage?: StaticImageData | string;
  icon?: string;
  serviceCount?: string;
  btnText?: string;
}
