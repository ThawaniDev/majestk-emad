'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';

import aboutImg1 from '@/assets/img/about/about-3-1.jpg';
import aboutImg2 from '@/assets/img/about/about-3-2.jpg';
import aboutImg3 from '@/assets/img/about/about-3-3.jpg';
import shapeImg1 from '@/assets/img/about/shape-3-1.png';
import shapeImg2 from '@/assets/img/about/shape-3-2.png';
import shapeImg3 from '@/assets/img/about/shape-3-3.png';

const AboutTwo = () => {
  const { t } = useLanguage();

  return (
    <div className="it-about-3-area theme-bg pt-120 pb-115">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-6 it-fade-anim"
            data-fade-from="left"
            data-delay="0.5"
          >
            <div className="it-about-3-left-box z-index">
              <h4 className="it-section-title-1 pb-30 it-split-text it-split-in-down">
                {t('aboutSections.unlockPotential')}
              </h4>
              <div className="it-about-3-content">
                <div className="it-about-3-text it-text-anim">
                  <p>
                    {t('aboutSections.unlockDesc')}
                  </p>
                </div>
                <div className="it-about-3-icon-box d-flex align-items-start">
                  <div className="it-about-3-icon">
                    <span>
                      <i className="fa-solid fa-house"></i>
                    </span>
                  </div>
                  <div className="it-about-3-icon-text">
                    <h5 className="it-about-3-title-sm">
                      {t('aboutSections.deliverAwesomeIdea')}
                    </h5>
                    <p>
                      {t('aboutSections.deliverDesc')}
                    </p>
                  </div>
                </div>
                <div
                  className="it-about-3-button it-fade-anim"
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
          <div
            className="col-xl-6 col-lg-6 it-fade-anim"
            data-fade-from="right"
            data-delay="0.5"
          >
            <div className="it-about-3-thumb-box text-end p-relative">
              <div className="it-about-3-main-thumb">
                <Image
                  className="image-height-auto"
                  src={aboutImg1}
                  alt="about-img"
                  width={246}
                  height={352}
                />
              </div>
              <div className="it-about-3-thumb-sm-1">
                <Image
                  className="image-height-auto"
                  src={aboutImg2}
                  alt="about-img"
                  width={218}
                  height={323}
                />
              </div>
              <div className="it-about-3-thumb-sm-2">
                <Image
                  className="image-height-auto"
                  src={aboutImg3}
                  alt="about-img"
                  width={370}
                  height={250}
                />
              </div>
              <div className="it-about-3-shape-1 d-none d-xl-block">
                <Image
                  className="image-height-auto"
                  src={shapeImg1}
                  alt="shape-img"
                  width={56}
                  height={330}
                />
              </div>
              <div className="it-about-3-shape-2 d-none d-xl-block">
                <Image
                  className="image-height-auto"
                  src={shapeImg2}
                  alt="shape-img"
                  width={66}
                  height={234}
                />
              </div>
              <div className="it-about-3-shape-3 d-none d-xl-block">
                <Image
                  className="image-height-auto"
                  src={shapeImg3}
                  alt="shape-img"
                  width={166}
                  height={136}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutTwo;
