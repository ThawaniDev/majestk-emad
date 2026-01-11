'use client';

import Link from 'next/link';
import { getServiceDataFour } from '@/data/service-data';
import ServiceItemFive from './service-item/serive-item-five';
import { useLanguage } from '@/context/language-context';

const ServiceSix = () => {
  const { t } = useLanguage();
  const serviceDataFour = getServiceDataFour(t);

  return (
    <div className="it-service-4__area fix black-bg p-relative pt-180 pb-120">
      <div className="container">
        <div className="it-service-4__section-mb">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="it-service-4__section-box">
                <h6 className="it-section-subtitle-1 it-split-text it-split-in-right">
                  {t('services.subtitle')}
                </h6>
                <h4 className="it-section-title-1 it-split-text it-split-in-right">
                  {t('services.sectionTitle')}
                </h4>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="it-service-4__top-text it-text-anim">
                <p>
                  {t('choose.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-xl-5 row-cols-lg-3 row-cols-md-3 row-cols-1 row-cols-sm-2">
          {serviceDataFour.map((service, i) => (
            <div
              key={service.id}
              className="col mb-30 it-fade-anim"
              data-fade-from="bottom"
              data-delay={0.3 + 0.2 * i}
            >
              <ServiceItemFive service={service} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="it-service-4__bottom-text text-center pt-45">
              <p>
                Need digital marketing solutions & services?{' '}
                <Link href="/contact">Send a request now</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceSix;
