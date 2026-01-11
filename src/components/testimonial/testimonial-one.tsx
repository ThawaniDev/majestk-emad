'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, Navigation } from 'swiper/modules';
import { getTestimonialDataOne } from '@/data/testimonial-data';
import { useLanguage } from '@/context/language-context';

import avatarImg from '@/assets/img/testimonial/author-1-1.png';

interface TestimonialProps {
  itemClass?: string;
  bgImg?: string;
  hasNavigation?: boolean;
}

const TestimonialOne = ({
  itemClass,
  bgImg,
  hasNavigation,
}: TestimonialProps) => {
  const { t } = useLanguage();
  const testimonialDataOne = getTestimonialDataOne(t);
  const sliderOptions: SwiperOptions = {
    speed: 1500,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 60,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      prevEl: '.slider-prev',
      nextEl: '.slider-next',
    },
  };

  return (
    <div
      className={itemClass || 'it-testimonial-area it-testimonial-bg'}
      style={{
        backgroundImage: `url(${
          bgImg || '/assets/img/testimonial/bg-1-1.jpg'
        })`,
      }}
    >
      {hasNavigation && (
        <div className="it-testimonial-arrow-box">
          <div className="slider-prev">
            <button>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          </div>
          <div className="slider-next active">
            <button>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      )}

      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-testimonial-wrapper">
              <div className="swiper-container it-testimonial-active">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  {...sliderOptions}
                  className="swiper-wrapper"
                >
                  {testimonialDataOne.map((item) => (
                    <SwiperSlide key={item.id} className="swiper-slide">
                      <div className="it-testimonial-item text-center z-index">
                        <div className="it-testimonial-text">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          ></p>
                        </div>
                        <div className="it-testimonial-author-box d-flex align-items-center justify-content-center">
                          <div className="it-testimonial-author-thumb">
                            <Image
                              className="image-height-auto"
                              src={item.avatar || avatarImg}
                              alt={item.author}
                              width={112}
                              height={112}
                            />
                          </div>
                          <div className="it-testimonial-author-box text-start">
                            <h5>{item.author}</h5>
                            <span>{item.designation}</span>
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
export default TestimonialOne;
