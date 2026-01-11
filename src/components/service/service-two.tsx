'use client';

import Image from 'next/image';
import { useState } from 'react';
import { getServiceDataTwo } from '@/data/service-data';
import ServiceItemTwo from './service-item/service-item-two';
import { useLanguage } from '@/context/language-context';

import shapeImg from '@/assets/img/service/shape-1-1.png';

const ServiceTwo = () => {
  const { t } = useLanguage();
  const serviceDataTwo = getServiceDataTwo(t);
  const [hoveredId, setHoveredId] = useState<number | null>(
    serviceDataTwo.length > 0 ? serviceDataTwo[0].id : null
  ); // State to track hovered item ID

  return (
    <div className="it-service-2-area p-relative theme-bg pb-135">
      <div className="it-service-2-shape d-none d-xxl-block">
        <Image src={shapeImg} alt="shape-img" width={235} height={280} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-service-2-section-box mb-50">
              <h5 className="it-section-subtitle-1 pb-25 it-split-text it-split-in-down">
                WHAT WE DO FOR OUR CUSTOMERS
              </h5>
              <h4 className="it-section-title-1 it-split-text it-split-in-down">
                Creativity is Connecting <br />
                Things.
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceDataTwo.map((service, i) => (
            <div
              key={service.id}
              className="col-xl-4 col-lg-4 col-md-6 mb-30 it-fade-anim"
              data-fade-from="bottom"
              data-delay={0.3 + 0.2 * i}
              onMouseEnter={() => setHoveredId(service.id)}
            >
              <ServiceItemTwo service={service} hoverId={hoveredId} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServiceTwo;
