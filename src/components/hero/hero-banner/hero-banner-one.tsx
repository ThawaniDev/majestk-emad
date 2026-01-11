import Image from 'next/image';
import Link from 'next/link';
import useScrollToSection from '@/hooks/use-scroll-to-section';
import { ScrollDown } from '@/components/svg';
import { useLanguage } from '@/context/language-context';

import shapeImg1 from '@/assets/img/hero/shape-1-1.png';
import shapeImg2 from '@/assets/img/hero/shape-1-2.png';

const HeroBannerOne = () => {
  const { t, dir } = useLanguage();
  const isRTL = dir === 'rtl';
  const { scrollToSection } = useScrollToSection(); // Custom hook for scrolling to section  
  const splitDirection = dir === 'rtl' ? 'it-split-in-left' : 'it-split-in-right';
    return (
    <div
      className="it-hero-area it-hero-bg p-relative"
      style={{ backgroundImage: `url("/assets/img/hero/bg-1-1.jpg")` }}
      dir={dir}
    >
      <div className="it-hero-social d-none d-xxl-block">
        <a href="#">TW</a>
        <a href="#">IN</a>
        <a href="#">DB</a>
        <a href="#">IG</a>
      </div>
      <div
        className={`it-hero-thumb d-none d-lg-block it-fade-anim ${isRTL ? 'it-hero-thumb-rtl' : ''}`}
        data-fade-from="bottom"
        data-delay=".5"
        style={isRTL ? { left: '60px', right: 'auto' } : {}}
      >
        <Image
          className="image-height-auto"
          data-lag="0.7"
          data-speed="auto"
          src="/assets/new_images_from_internet/conference_with_people_setting.jpg"
          alt="hero-img"
          width={571}
          height={571}
        />
      </div>
      <div className="it-hero-shape-1 d-none d-lg-block">
        <Image
          className="image-height-auto"
          src={shapeImg1}
          alt="shape-img"
          width={166}
          height={136}
        />
      </div>
      <div className="it-hero-shape-2 d-none d-lg-block">
        <Image
          className="image-height-auto"
          src={shapeImg2}
          alt="shape-img"
          width={78}
          height={64}
        />
      </div>
      <div className="it-hero-mouse-scroll smooth">
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('gallery');
          }}
        >
          <ScrollDown />
        </Link>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12" data-lag="0.5" data-stagger="0.08">
            <div className="it-hero-content z-index pb-10">
              <h2 className={`it-hero-title it-split-text ${splitDirection}`}>
                {t('home.heroTitle')}
              </h2>
            </div>
            <div className="it-hero-content d-flex align-items-center it-text-anim">
              <p>
                {t('home.heroDescription')}
              </p>
              <div
                className="it-fade-anim"
                data-fade-from="top"
                data-ease="bounce"
                data-delay=".5"
              >
                <Link className="it-btn-main" href="/contact">
                  <span>{t('contact.getInTouch') || 'GET IN TOUCH'}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBannerOne;
