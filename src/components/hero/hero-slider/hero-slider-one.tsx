'use client';

import Link from 'next/link';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { openModal } from '@/redux/slices/modal-slice';
import ModalVideoWrapper from '@/components/modal-video/modal-video';
import { useLanguage } from '@/context/language-context';

//Slider Data
const sliderData = [
  {
    id: 1,
    bgImg: '/assets/img/hero/slider-1-2.jpg',
    title: 'CREATIVE <br /> <span>AGENCY</span>',
    description: `Our creative agency is ready for new projects. We
                    are a creative digital agency <br />
                    Xoft from Los Angeles productive agency for grow
                    business`,
    btnText: 'GET IN TOUCH',
    btnUrl: '/contact',
  },
  {
    id: 2,
    bgImg: '/assets/img/hero/slider-1-3.jpg',
    title: 'CREATIVE <br /> <span>AGENCY</span>',
    description: `Our creative agency is ready for new projects. We
                    are a creative digital agency <br />
                    Xoft from Los Angeles productive agency for grow
                    business`,
    btnText: 'GET IN TOUCH',
    btnUrl: '/contact',
  },
  {
    id: 3,
    bgImg: '/assets/img/hero/slider-1-1.jpg',
    title: 'CREATIVE <br /> <span>AGENCY</span>',
    description: `Our creative agency is ready for new projects. We
                    are a creative digital agency <br />
                    Xoft from Los Angeles productive agency for grow
                    business`,
    btnText: 'GET IN TOUCH',
    btnUrl: '/contact',
  },
];

const HeroSliderOne = () => {
  const dispatch = useAppDispatch();
  const { locale } = useLanguage();
  const isRTL = locale === 'ar';

  // Handler for opening modal video
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(openModal('YoOG5H4603Y'));
  };

  // Slider Settings
  const sliderOptions: SwiperOptions = {
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
    <div className="it-slider-3-area p-relative" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Modal Video Wrapper */}
      <ModalVideoWrapper />
      {/* Modal Video Wrapper */}

      <div className="it-slider-3-wrapper">
        <div className="swiper-container it-slider-3-active">
          <Swiper
            modules={[Autoplay, EffectFade]}
            {...sliderOptions}
            className="swiper-wrapper p-relative"
          >
            <div className="it-video-2-content it-video-2-content-wrap z-index">
              <div className="it-video-2-icon d-none d-md-block">
                <Link
                  className="popup-video"
                  href="#"
                  onClick={handleLinkClick}
                >
                  <i className="fas fa-play"></i>
                </Link>
              </div>
            </div>
            <div className="it-slider-3-social d-none d-xxl-block">
              <a href="#">TW</a>
              <a href="#">IN</a>
              <a href="#">DB</a>
              <a href="#">IG</a>
            </div>
            {sliderData.map((item) => (
              <SwiperSlide key={item.id} className="swiper-slide">
                <div className="it-slider-3-wrapper it-slider-3-overlay it-slider-3-height z-index p-relative">
                  <div
                    className="it-slider-3-bg"
                    style={{ backgroundImage: `url(${item.bgImg})` }}
                  ></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="it-slider-3-content-box p-relative z-index-3">
                          <div className="it-slider-3-content">
                            <div className="it-slider-3-title-box">
                              <h1
                                className="it-slider-3-title"
                                dangerouslySetInnerHTML={{ __html: item.title }}
                              ></h1>
                            </div>
                            <div className="it-slider-3-text mb-50">
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: item.description,
                                }}
                              ></p>
                            </div>
                          </div>
                          <div className="it-slider-3-button">
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
export default HeroSliderOne;
