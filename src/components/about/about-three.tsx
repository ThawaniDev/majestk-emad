'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Checkmark } from '../svg';
import { useLanguage } from '@/context/language-context';

import iconImg from '@/assets/img/about/icon-1png.png';

import shapeImg1 from '@/assets/img/about/shape-5-1.png';
import shapeImg2 from '@/assets/img/about/shape-5-2.png';

const AboutThree = () => {
  const { t, locale } = useLanguage();
  const isRTL = locale === 'ar';

  const itemData = [
    t('about.understandingNeeds'),
    t('about.buildingTrust'),
    t('about.commitmentInnovation'),
  ];

  return (
    <div id="about-item" className="it-about-5-area it-about-5-space theme-bg" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className="row align-items-start">
          <div className={`col-xl-5 col-lg-5 it-fade-anim ${isRTL ? 'order-1' : 'order-2'}`}
            data-fade-from={isRTL ? 'left' : 'right'}
            data-delay=".5"
          >
            <div className={`it-about-5-right-box p-relative ${isRTL ? 'text-start' : 'text-end'}`}>
              <div className="it-about-5-main-thumb">
                <Image
                  className="image-height-auto"
                  src="/assets/new_images_from_internet/global_partnership.jpg"
                  alt="about-img"
                  width={436}
                  height={436}
                />
              </div>
              <div className="it-about-5-thumb-2">
                <Image
                  className="image-height-auto"
                  src="/assets/new_images_from_internet/data_analytics_tools.jpg"
                  alt="about-img"
                  width={464}
                  height={309}
                />
              </div>
              <div className="it-about-5-shape-1 d-none d-xl-block">
                <Image
                  src={shapeImg1}
                  alt="shape-img"
                  width={158}
                  height={158}
                />
              </div>
              <div className="it-about-5-shape-2 d-none d-xl-block">
                <Image
                  src={shapeImg2}
                  alt="shape-img"
                  width={158}
                  height={67}
                />
              </div>
            </div>
          </div>
          <div className={`col-xl-7 col-lg-7 ${isRTL ? 'order-2' : 'order-1'}`}>
            <div className="it-about-5-left-box">
              <div className="it-about-5-section-box mb-30">
                <h6 className={`it-section-subtitle-1 it-split-text ${isRTL ? 'it-split-in-left' : 'it-split-in-right'}`}>
                  {t('about.whoWeAre')}
                </h6>
                <h4 className={`it-section-title-1 it-split-text ${isRTL ? 'it-split-in-left' : 'it-split-in-right'}`}>
                  {t('about.sectionTitle')}
                </h4>
              </div>
              <div className="it-about-5-content it-text-anim">
                <p>
                  {t('about.description')}
                </p>
                <div className={`it-about-5-content-icon-box mb-45 d-flex align-items-center ${isRTL ? '' : ''}`}>
                  <span>
                    <Image
                      src={iconImg}
                      alt="icon-img"
                      width={62}
                      height={62}
                    />
                  </span>
                  <h5>
                    {t('aboutSections.strategicPartner')}
                  </h5>
                </div>
                <div className="it-about-5-content-list mb-50">
                  <ul>
                    {itemData.map((item, i) => (
                      <li key={i}>
                        <span>
                          <Checkmark />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutThree;
