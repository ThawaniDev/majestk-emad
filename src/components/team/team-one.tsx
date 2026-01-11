'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getTeamDataOne } from '@/data/team-data';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, Pagination } from 'swiper/modules';
import { useLanguage } from '@/context/language-context';

import TeamItemOne from './team-item/team-item-one';
import shapeImg1 from '@/assets/img/team/shape-1-1.png';
import shapeImg2 from '@/assets/img/team/shape-1-2.png';

const TeamOne = () => {
  const { t } = useLanguage();
  const teamDataOne = getTeamDataOne(t);

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
        slidesPerView: 1,
      },
      '0': {
        slidesPerView: 1,
      },
    },
    pagination: {
      el: '.team-slider-dots',
      clickable: true,
    },
  };
  return (
    <div className="it-team-area fix p-relative black-bg pt-120 pb-120">
      <div className="it-team-shape-1 d-none d-xl-block">
        <Image
          data-lag="0.5"
          data-speed="auto"
          src={shapeImg1}
          alt="shape-img"
          width={166}
          height={136}
        />
      </div>
      <div className="it-team-shape-2 d-none d-xl-block">
        <Image
          data-lag="0.5"
          data-speed="auto"
          src={shapeImg2}
          alt="shape-img"
          width={50}
          height={50}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-team-section-box mb-80 text-center">
              <h6 className="it-section-subtitle-1 it-split-text it-split-in-right">
                {t('team.subtitle')}
              </h6>
              <h4 className="it-section-title-1 it-split-text it-split-in-right">
                {t('team.sectionTitle')}
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="it-team-wrapper p-relative">
              <div className="swiper-container it-team-active">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  {...sliderOptions}
                  className="swiper-wrapper"
                >
                  {teamDataOne
                    .map((team) => (
                      <SwiperSlide key={team.id} className="swiper-slide">
                        <TeamItemOne team={team} />
                      </SwiperSlide>
                    ))
                    .slice(0, 5)}
                </Swiper>
              </div>
              <div className="team-slider-dots"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamOne;
