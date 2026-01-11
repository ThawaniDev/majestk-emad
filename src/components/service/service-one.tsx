'use client';

import Link from 'next/link';
import { getServiceDataOne } from '@/data/service-data';
import ServiceItemOne from './service-item/service-item-one';
import { useLanguage } from '@/context/language-context';

const ServiceOne = () => {
  const { t, dir } = useLanguage();
  const isRTL = dir === 'rtl';
  const serviceDataOne = getServiceDataOne(t);
  const splitDirection = dir === 'rtl' ? 'it-split-in-left' : 'it-split-in-right';

  return (
    <div id="service" className="it-service-area theme-bg pt-120" dir={dir}>
      <div className="container">
        <div className="it-service-top-mb mb-60">
          <div className={`row align-items-end ${isRTL ? 'flex-row-reverse' : ''}`}>
             <div className="col-xl-4 col-lg-4 col-md-6">
              <div
                className={`it-service-button ${isRTL ? 'text-start text-md-start' : 'text-start text-md-end'} it-fade-anim`}
                data-fade-from="top"
                data-ease="bounce"
                data-delay=".5"
              >
                <Link className="it-btn-main" href="/service">
                  <span>{t('services.viewMoreServices')}</span>
                </Link>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-6">
              <div className="it-service-section-box">
                <h6 className={`it-section-subtitle-1 it-split-text ${splitDirection}`}>
                  {t('services.subtitle')}
                </h6>
                <h4 className={`it-section-title-1 it-split-text ${splitDirection}`}>
                  {t('services.sectionTitle')}
                </h4>
              </div>
            </div>
           
          </div>
        </div>
        <div className="row">
          {serviceDataOne
            .map((service, i) => (
              <div
                key={service.id}
                className="col-xl-4 col-lg-4 col-md-6 mb-30 it-fade-anim"
                data-fade-from="bottom"
                data-delay={0.3 + 0.2 * i}
              >
                <ServiceItemOne service={service} />
              </div>
            ))
            .slice(0, 3)}
        </div>
      </div>
    </div>
  );
};
export default ServiceOne;
