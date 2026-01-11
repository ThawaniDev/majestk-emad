import { StaticImageData } from 'next/image';

export interface ITeamDT {
  id: number;
  name: string;
  designation: string;
  experience?: string;
  department?: string;
  image: StaticImageData | string;
  detailsImg?: StaticImageData | string;
  email: string;
  phone: string;
  socials: {
    platform: string;
    link: string;
  }[];
  skills: {
    title: string;
    value: string;
  }[];
}
