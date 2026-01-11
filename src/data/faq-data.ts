import { IFaqDT } from '@/types/faq-d-t';

type TranslationFunction = (key: string) => string;

export const getFaqDataOne = (t: TranslationFunction): IFaqDT[] => [
  {
    uuid: 'a',
    title: t('data.faqTitles.valueOfDesign'),
    description: t('data.faqDescriptions.valueOfDesignDesc'),
  },
  {
    uuid: 'b',
    title: t('data.faqTitles.colorAccessible'),
    description: t('data.faqDescriptions.colorAccessibleDesc'),
  },
  {
    uuid: 'c',
    title: t('data.faqTitles.valueOfDesign2'),
    description: t('data.faqDescriptions.valueOfDesign2Desc'),
  },
  {
    uuid: 'd',
    title: t('data.faqTitles.colorAccessible2'),
    description: t('data.faqDescriptions.colorAccessible2Desc'),
  },
];

export const getFaqDataTwo = (t: TranslationFunction): IFaqDT[] => [
  {
    uuid: 'a',
    title: t('data.faqTitles.totalBeginner'),
    description: t('data.faqDescriptions.totalBeginnerDesc'),
  },
  {
    uuid: 'b',
    title: t('data.faqTitles.technicalSkills'),
    description: t('data.faqDescriptions.technicalSkillsDesc'),
  },
  {
    uuid: 'c',
    title: t('data.faqTitles.logicalDrives'),
    description: t('data.faqDescriptions.logicalDrivesDesc'),
  },
  {
    uuid: 'd',
    title: t('data.faqTitles.safetyMeasures'),
    description: t('data.faqDescriptions.safetyMeasuresDesc'),
  },
];

export const getFaqDataThree = (t: TranslationFunction): IFaqDT[] => [
  {
    uuid: 'a',
    title: t('data.faqTitles.logicalDrives'),
    description: t('data.faqDescriptions.logicalDrivesDesc'),
  },
  {
    uuid: 'b',
    title: t('data.faqTitles.safetyMeasures'),
    description: t('data.faqDescriptions.safetyMeasuresDesc'),
  },
  {
    uuid: 'c',
    title: t('data.faqTitles.totalBeginner'),
    description: t('data.faqDescriptions.totalBeginnerDesc'),
  },
  {
    uuid: 'd',
    title: t('data.faqTitles.technicalSkills'),
    description: t('data.faqDescriptions.technicalSkillsDesc'),
  },
];

export const faqData = [
  ...getFaqDataOne((key) => key),
  ...getFaqDataTwo((key) => key),
  ...getFaqDataThree((key) => key),
];
