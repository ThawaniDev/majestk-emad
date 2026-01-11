'use client';

import Link from 'next/link';
import Image from 'next/image';
import FaqItemOne from '../faq/faq-item/faq-item-one';
import { getFaqDataOne } from '@/data/faq-data';
import { useLanguage } from '@/context/language-context';

import aboutImg from '@/assets/img/about/about-2-1.png';

const AboutOne = () => {
  const { t } = useLanguage();
  const faqDataOne = getFaqDataOne(t);

  return (
    <div className="it-about-2-area theme-bg pt-55 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-5 col-lg-6 it-fade-anim"
            data-fade-from="left"
            data-delay=".5"
          >
            <div className="it-about-2-thumb-box">
              <Image
                className="image-height-auto"
                data-lag="0.5"
                data-speed="auto"
                src={aboutImg}
                alt="about-img"
                width={541}
                height={695}
              />
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="it-about-2-right-box">
              <div className="it-about-2-section-box it-text-anim">
                <h4 className="it-section-title-1 pb-25 it-split-text it-split-in-down">
                  {t('aboutSections.specialization')}
                </h4>
                <p>
                  {t('aboutSections.specializationDesc')}
                </p>
                <span>{t('aboutSections.benefitsTitle')}</span>
              </div>
              <div className="it-customs-accordion pb-45">
                <FaqItemOne faqs={faqDataOne} preExpand="a" />
              </div>
              <div className="it-about-2-button d-flex align-items-end">
                <div
                  className="it-fade-anim"
                  data-fade-from="top"
                  data-ease="bounce"
                  data-delay=".5"
                >
                  <Link className="it-btn-main" href="/about">
                    <span>{t('aboutSections.discoverMore')}</span>
                  </Link>
                </div>
                <div className="it-about-2-button-text">
                  <span>
                    <b>10</b>
                    {t('aboutSections.yearsExperience')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutOne;
