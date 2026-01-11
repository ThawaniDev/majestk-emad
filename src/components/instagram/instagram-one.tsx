'use client';

import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';

const imageData = [
  '/assets/new_images_from_internet/do_something_great.jpg',
  '/assets/new_images_from_internet/do_more.jpg',
  '/assets/new_images_from_internet/idea_in_hand.jpg',
  '/assets/new_images_from_internet/marketing.jpg',
  '/assets/new_images_from_internet/white_papers_over_each_other.jpg',
  '/assets/new_images_from_internet/do_more.jpg',
  '/assets/new_images_from_internet/marketing.jpg',
];

const InstagramOne = () => {
  const sliderOption: SwiperOptions = {
    speed: 1000,
    loop: true,
    slidesPerView: 5,
    spaceBetween: 0,
    autoplay: { delay: 2500 },
    roundLengths: true,
    breakpoints: {
      '1400': {
        slidesPerView: 5,
      },
      '1200': {
        slidesPerView: 4,
      },
      '992': {
        slidesPerView: 3,
      },
      '768': {
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
    <div className="it-instagram-area">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-xl-12">
            <div className="it-instagram-wrapper">
              <div className="swiper-container it-instagram-active">
                <Swiper
                  modules={[Autoplay]}
                  {...sliderOption}
                  className="swiper-wrapper"
                >
                  {imageData.map((img, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <div className="it-instagram-item">
                        <div className="it-instagram-thumb">
                          <Image
                            className="w-100 image-height-auto"
                            src={img}
                            alt="instagram-image"
                            width={384}
                            height={300}
                          />
                        </div>
                        <div className="it-instagram-icon">
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
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
export default InstagramOne;
