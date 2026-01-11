'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';

interface ChooseProps {
  itemClass?: string;
}

const ChooseOne = ({ itemClass }: ChooseProps) => {
  const { t } = useLanguage();

  return (
    <div className={itemClass || 'it-choose-5-area theme-bg pt-10 pb-120'}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="it-choose-5-left-box">
              <div className="it-choose-5-section-title mb-30">
                <h6 className="it-section-subtitle-1 it-split-text it-split-in-right">
                  {t('choose.subtitle')}
                </h6>
                <h4 className="it-section-title-1 it-split-text it-split-in-right">
                  {t('choose.sectionTitle')}
                </h4>
              </div>
              <div className="it-choose-5-text mb-40 it-text-anim">
                <p>
                  {t('choose.description')}
                </p>
              </div>
              <div className="it-choose-5-icon-wrap mb-45 d-flex align-items-center">
                <div className="it-choose-5-icon">
                  <span>
                    <i className="flaticon-solution"></i>
                  </span>
                </div>
                <div className="it-choose-5-icon-text">
                  <h6>{t('choose.deliverAwesomeIdea')}</h6>
                  <p>
                    {t('choose.deliverAwesomeIdeaDesc')}
                  </p>
                </div>
              </div>
              <Link className="it-btn-main" href="/contact">
                <span>{t('contact.getInTouch')}</span>
              </Link>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 it-fade-anim"
            data-fade-from="right"
            data-delay=".5"
          >
            <div className="it-choose-5-thumb-box p-relative">
              <div className="it-choose-5-thumb text-end">
                <Image
                  className="image-height-auto"
                  src="/assets/new_images_from_internet/global_partnership.jpg"
                  alt="choose-img"
                  width={450}
                  height={450}
                />
              </div>
              <div className="it-choose-5-thumb-sm">
                <Image
                  className="image-height-auto"
                  src="/assets/new_images_from_internet/data_analytics_tools.jpg"
                  alt="choose-img"
                  width={450}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChooseOne;
