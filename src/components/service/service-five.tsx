'use client';

import { getServiceDataOne } from '@/data/service-data';
import ServiceItemFour from './service-item/service-item-four';
import { useLanguage } from '@/context/language-context';

const ServiceFive = () => {
  const { t } = useLanguage();
  const serviceDataOne = getServiceDataOne(t);
  return (
    <div className="it-service-area theme-bg pt-120 pb-90">
      <div className="container">
        <div className="row">
          {serviceDataOne
            .map((service, i) => (
              <div
                key={service.id}
                className="col-xl-4 col-lg-4 col-md-6 mb-30 it-fade-anim"
                data-fade-from="bottom"
                data-delay={0.3 + 0.2 * i}
              >
                <ServiceItemFour service={service} />
              </div>
            ))
            .slice(0, 3)}
        </div>
      </div>
    </div>
  );
};
export default ServiceFive;
