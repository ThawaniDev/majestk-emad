'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { Autoplay } from 'swiper/modules';
import { useLanguage } from '@/context/language-context';
import { getGalleryDataOne } from '@/data/gallery-data';

const GalleryOne = () => {
  const { t, locale } = useLanguage();
  const isRTL = locale === 'ar';
  const dir = isRTL ? 'rtl' : 'ltr';
  const galleryData = getGalleryDataOne(t);
  const sliderOptions: SwiperOptions = {
    speed: 1000,
    loop: true,
    slidesPerView: 5,
    spaceBetween: 80,
    autoplay: {
      delay: 3000,
    },
    centeredSlides: true,
    roundLengths: true,
    breakpoints: {
      '1400': {
        slidesPerView: 5,
      },
      '1200': {
        slidesPerView: 3,
      },
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
        slidesPerView: 1,
      },
    },
  };

  return (
    <div id="gallery" className="it-gallery-area theme-bg fix pt-120 pb-120" dir={dir}>
      <div className="container-fluid gx-0">
        <div className="row gx-0">
          <div className="col-xl-12">
            <div className="it-gallery-wrapper">
              <div className="swiper-container it-gallery-active">
                <Swiper
                  modules={[Autoplay]}
                  {...sliderOptions}
                  className="swiper-wrapper align-items-center it-gallery-active-padding"
                >
                  {galleryData.map((item) => (
                    <SwiperSlide key={item.id} className="swiper-slide">
                      <div className="it-gallery-item-box">
                        <div className="it-gallery-item p-relative">
                          <div className="it-gallery-thumb">
                            <Image
                              className="image-height-auto"
                              src={item.image || '/assets/img/gallery/gallery-placeholder.jpg'}
                              alt="gallery-img"
                              width={390}
                              height={550}
                            />
                          </div>
                          <div className="it-gallery-title">
                            <h5>
                              <a href="#">{item.title}</a>
                            </h5>
                          </div>
                          <div className="it-gallery-text">
                            <p
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            ></p>
                          </div>
                        </div>
                        <div className="it-gallery-number text-center">
                          <span>{item.year}</span>
                        </div>
                      </div>
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
export default GalleryOne;
