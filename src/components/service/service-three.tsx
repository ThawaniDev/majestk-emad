'use client';

import { useState } from 'react';
import { getServiceDataThree } from '@/data/service-data';
import ServiceItemThree from './service-item/service-item-three';
import { useLanguage } from '@/context/language-context';

const ServiceThree = () => {
  const { t } = useLanguage();
  const serviceDataThree = getServiceDataThree(t);
  const [hoveredId, setHoveredId] = useState<number | null>(
    serviceDataThree.length > 0 ? serviceDataThree[1].id : null
  ); // State to track hovered item ID
  return (
    <div className="it-service-2-area p-relative theme-bg pt-120 pb-135">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-service-2-section-box text-center mb-10">
              <h5 className="it-section-subtitle-1 pb-25 it-split-text it-split-in-down">
                WHAT WE ACTUALLY OFFER
              </h5>
              <h4 className="it-section-title-1 it-split-text it-split-in-down">
                What We Provide For <br />
                Our Clients
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceDataThree.map((service, i) => (
            <div
              key={service.id}
              className="col-xl-4 col-lg-4 col-md-6 mb-30 it-fade-anim"
              data-fade-from="bottom"
              data-delay={0.3 + 0.2 * i}
              onMouseEnter={() => setHoveredId(service.id)}
            >
              <ServiceItemThree service={service} hoverId={hoveredId} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServiceThree;
