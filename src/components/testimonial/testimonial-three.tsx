'use client';

import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { getTestimonialDataThree } from '@/data/testimonial-data';
import { useLanguage } from '@/context/language-context';

import avatarImg from '@/assets/img/testimonial/author-1-6.png';

interface TestimonialProps {
  itemClass?: string;
}

const TestimonialThree = ({ itemClass }: TestimonialProps) => {
  const { t } = useLanguage();
  const testimonialDataThree = getTestimonialDataThree(t);

  const sliderOptions: SwiperOptions = {
    speed: 1000,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      '1200': {
        slidesPerView: 2,
      },
      '576': {
        slidesPerView: 1,
      },
      '0': {
        slidesPerView: 1,
      },
    },
  };

  return (
    <div className={itemClass || 'it-testimonial-5-area theme-bg pb-150'}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-testimonial-5-section-box text-center mb-50">
              <h6 className="it-section-subtitle-1 it-split-text it-split-in-right">
                {t('testimonial.subtitle')}
              </h6>
              <h4 className="it-section-title-1 it-split-text it-split-in-right">
                {t('testimonial.sectionTitle')}
              </h4>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="it-testimonial-5-wrapper">
              <div className="swiper-container it-testimonial-5-active">
                <Swiper
                  modules={[Autoplay]}
                  {...sliderOptions}
                  className="swiper-wrapper"
                >
                  {testimonialDataThree.map((testimonial) => (
                    <SwiperSlide key={testimonial.id} className="swiper-slide">
                      <div className="it-testimonial-5-item p-relative">
                        <div className="it-testimonial-5-thumb">
                          <Image
                            className="image-height-auto"
                            src={testimonial.avatar || avatarImg}
                            alt={testimonial.author}
                            width={130}
                            height={130}
                          />
                        </div>
                        <div className="it-testimonial-5-text">
                          <p>{testimonial.description}</p>
                        </div>
                        <div className="it-testimonial-5-author-box d-flex align-items-center justify-content-between">
                          <div className="it-testimonial-5-author-info">
                            <h5>{testimonial.author}</h5>
                            <span>{testimonial.designation}</span>
                          </div>
                          <div className="it-testimonial-5-star">
                            {Array.from({ length: 5 }).map((_, starIndex) => (
                              <i key={starIndex} className="fas fa-star"></i>
                            ))}
                          </div>
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
export default TestimonialThree;
