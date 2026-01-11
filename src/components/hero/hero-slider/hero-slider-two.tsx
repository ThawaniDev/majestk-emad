'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import useScrollToSection from '@/hooks/use-scroll-to-section';

import shapeImg1 from '@/assets/img/hero/shape-4-1.png';
import shapeImg2 from '@/assets/img/hero/shape-4-2.png';

const sliderData = [
  {
    id: 1,
    bgImg: '/assets/img/hero/slider-4-3.jpg',
    subtitle: 'WE DELIVER EXCELLENCE',
    title: 'NEW MAJESTIC <br /> TRADE & MARKETING',
    btnText: 'GET IN TOUCH',
    btnUrl: '/contact',
  },
  {
    id: 2,
    bgImg: '/assets/img/hero/slider-4-2.jpg',
    subtitle: 'YOUR STRATEGIC PARTNER',
    title: 'INTEGRATED <br /> BUSINESS SOLUTIONS',
    btnText: 'GET IN TOUCH',
    btnUrl: '/contact',
  },
  {
    id: 3,
    bgImg: '/assets/img/hero/slider-4-1.jpg',
    subtitle: 'COMMITTED TO INNOVATION',
    title: 'LEADING SOLUTIONS <br /> FOR YOUR SUCCESS',
    btnText: 'GET IN TOUCH',
    btnUrl: '/contact',
  },
];

const HeroSliderTwo = () => {
  const { scrollToSection } = useScrollToSection(); // Custom hook for scrolling to section

  // Slider Settings
  const sliderOption: SwiperOptions = {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 0,
    speed: 1500,
    effect: 'fade',
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
  };
  return (
    <div className="it-slider-4-area p-relative black-bg">
      <div className="it-slider-4-wrap fix p-relative">
        <div className="it-slider-4-social">
          <a href="#">TW</a>
          <a href="#">IN</a>
          <a href="#">DB</a>
          <a href="#">IG</a>
        </div>
        <div className="it-scroll-bottom smooth">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('service-box');
            }}
          >
            SCROLL DOWN
          </Link>
        </div>
        <div className="swiper-container it-slider-4-active">
          <Swiper
            modules={[Autoplay, EffectFade]}
            {...sliderOption}
            className="swiper-wrapper"
          >
            {sliderData.map((item) => (
              <SwiperSlide key={item.id} className="swiper-slide">
                <div className="it-slider-4-space it-slider-4-overlay p-relative">
                  <div className="it-slider-4-shape-1 d-none d-xxl-block">
                    <Image
                      className="image-height-auto"
                      src={shapeImg1}
                      alt="shape-img"
                      width={272}
                      height={569}
                    />
                  </div>
                  <div className="it-slider-4-shape-2">
                    <Image
                      className="image-height-auto"
                      src={shapeImg2}
                      alt="shape-img"
                      width={112}
                      height={113}
                    />
                  </div>

                  <div
                    className="it-slider-4-bg"
                    style={{ backgroundImage: `url(${item.bgImg})` }}
                  ></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="it-slider-4-content">
                          <div className="it-slider-4-section-title mb-35">
                            <h4 className="it-slider-4-subtitle">
                              {item.subtitle}
                            </h4>
                            <h1
                              className="it-slider-4-title"
                              dangerouslySetInnerHTML={{ __html: item.title }}
                            ></h1>
                          </div>
                          <div className="it-slider-4-btn-box">
                            <Link className="it-btn-main" href={item.btnUrl}>
                              <span>{item.btnText}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default HeroSliderTwo;
