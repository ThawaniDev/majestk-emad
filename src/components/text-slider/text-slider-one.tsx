'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { useLanguage } from '@/context/language-context';

import circleImg from '@/assets/img/shape/circle.png';

const TextSliderOne = () => {
  const { t, dir } = useLanguage();
  
  // Repeated data for marquee
  const textSliderData = [
    { icon: circleImg, text: t('home.featuredWork') },
    { icon: circleImg, text: t('home.featuredWork') },
    { icon: circleImg, text: t('home.featuredWork') },
    { icon: circleImg, text: t('home.featuredWork') },
  ];

  return (
    <div className="custom-text-slider-section fix theme-bg p-relative pt-85">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-xl-12 it-fade-animation"
            data-fade-from="bottom"
            data-delay=".3"
          >
            <div className="custom-text-slider-wrapper">
              <Marquee speed={100} loop={0} direction={dir === 'rtl' ? 'left' : 'right'}>
                {textSliderData.map((item, i) => (
                  <div key={i} className="custom-text-slider-item">
                    <span>{item.text}</span>
                    <Image
                      className="custom-slider-icon"
                      src={item.icon}
                      alt="Icon Img"
                      width={97}
                      height={97}
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TextSliderOne;
