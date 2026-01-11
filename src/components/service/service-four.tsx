'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { Autoplay } from 'swiper/modules';
import ServiceItemOne from './service-item/service-item-one';
import { getServiceDataOne } from '@/data/service-data';
import { useLanguage } from '@/context/language-context';

const ServiceFour = () => {
  const { t } = useLanguage();
  const serviceDataOne = getServiceDataOne(t);
  const sliderOptions: SwiperOptions = {
    speed: 1000,
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      '992': {
        slidesPerView: 4,
      },
      '768': {
        slidesPerView: 3,
      },
      '576': {
        slidesPerView: 2,
      },
      '0': {
        slidesPerView: 2,
      },
    },
  };
  return (
    <div
      id="service-box"
      className="it-service-area theme-bg fix pt-120 pb-120"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-service-section-box mb-70">
              <h6 className="it-section-subtitle-1 it-split-text it-split-in-right">
                WHAT WE ACTUALLY OFFER
              </h6>
              <h4 className="it-section-title-1 it-split-text it-split-in-right">
                We Work to Craft Solid Products <br />
                and Services For You
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="it-service-wrapper">
              <div className="swiper-container it-service-active">
                <Swiper
                  modules={[Autoplay]}
                  {...sliderOptions}
                  className="swiper-wrapper it-service-custom-padding"
                >
                  {serviceDataOne.map((service) => (
                    <SwiperSlide key={service.id} className="swiper-slide">
                      <ServiceItemOne service={service} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceFour;
