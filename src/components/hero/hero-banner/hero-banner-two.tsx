import Image from 'next/image';
import Link from 'next/link';
import useScrollToSection from '@/hooks/use-scroll-to-section';
import { ScrollDown } from '@/components/svg';

import shapeImg1 from '@/assets/img/hero/shape-2-2.png';
import shapeImg2 from '@/assets/img/hero/shape-2-3.png';
import shapeImg3 from '@/assets/img/hero/shape-2-4.png';
import shapeImg4 from '@/assets/img/hero/shape-2-5.png';

const HeroBannerTwo = () => {
  const { scrollToSection } = useScrollToSection(); // Custom hook for scrolling to section

  return (
    <div
      className="it-hero-2-area it-hero-2-bg black-bg fix p-relative"
      style={{ backgroundImage: `url('/assets/img/hero/shape-2-1.png')` }}
    >
      <div
        className="it-hero-2-thumb d-none d-lg-block it-fade-anim"
        data-fade-from="right"
        data-delay=".5"
      >
        <Image
          className="image-height-auto"
          data-lag="0.1"
          data-speed="auto"
          src="/assets/new_images_from_internet/planning.jpg"
          alt="hero-img"
          width={765}
          height={765}
        />
      </div>
      <div className="it-hero-2-shape-1">
        <Image
          className="image-height-auto"
          src={shapeImg1}
          alt="shape-img"
          width={718}
          height={840}
        />
      </div>
      <div className="it-hero-2-shape-2 d-none d-xl-block">
        <Image src={shapeImg2} alt="shape-img" width={73} height={76} />
      </div>
      <div className="it-hero-2-shape-3 d-none d-xl-block">
        <Image src={shapeImg3} alt="shape-img" width={70} height={72} />
      </div>
      <div className="it-hero-2-shape-4">
        <Image src={shapeImg4} alt="shape-img" width={33} height={33} />
      </div>
      <div className="it-hero-2-social d-none d-xxl-block">
        <a href="#">TW</a>
        <a href="#">IN</a>
        <a href="#">DB</a>
        <a href="#">IG</a>
      </div>
      <div className="it-mouse-scroll smooth">
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('funfact-item');
          }}
        >
          <ScrollDown />
        </Link>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12" data-lag="0.5" data-stagger="0.08">
            <div className="it-hero-2-content z-index pb-55">
              <h2 className="it-hero-2-title it-split-text it-split-in-down">
                Integrated Solutions <br />
                for Trade & Marketing
              </h2>
            </div>
            <div
              className="it-hero-2-content it-fade-anim"
              data-fade-from="top"
              data-ease="bounce"
              data-delay=".5"
            >
              <Link className="it-btn-main" href="/contact">
                <span>GET IN TOUCH</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBannerTwo;
