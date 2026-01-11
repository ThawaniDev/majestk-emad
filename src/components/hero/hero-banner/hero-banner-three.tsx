'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { openModal } from '@/redux/slices/modal-slice';
import useScrollToSection from '@/hooks/use-scroll-to-section';
import ModalVideoWrapper from '@/components/modal-video/modal-video';
import { ScrollDown } from '@/components/svg';

import shapeImg1 from '@/assets/img/hero/shape-5-1.png';
import shapeImg2 from '@/assets/img/hero/shape-5-2.png';

const HeroBannerThree = () => {
  const dispatch = useAppDispatch();
  const { scrollToSection } = useScrollToSection(); // Custom hook for scrolling to section

  // Handler for opening modal video
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(openModal('YoOG5H4603Y'));
  };

  return (
    <div className="it-hero-5-area fix">
      {/* Modal Video Wrapper */}
      <ModalVideoWrapper />
      {/* Modal Video Wrapper */}

      <div
        className="it-hero-5-bg p-relative"
        style={{ backgroundImage: `url('/assets/img/hero/bg-5-1.jpg')` }}
      >
        <div
          className="it-hero-5-thumb it-fade-anim"
          data-fade-from="right"
          data-delay=".3"
        >
          <Image
            className="image-height-auto"
            data-lag="0.1"
            data-speed="auto"
            src="/assets/new_images_from_internet/office_showing_statstics.jpg"
            alt="hero-img"
            width={846}
            height={846}
          />
        </div>
        <div className="it-hero-5-shape-1">
          <Image src={shapeImg1} alt="shape-img" width={78} height={78} />
        </div>
        <div className="it-hero-5-video-box d-none d-xl-block">
          <div className="it-hero-5-video-text">
            <Image src={shapeImg2} alt="shape-img" width={112} height={113} />
          </div>
          <div className="it-hero-5-video-icon">
            <Link className="popup-video" href="#" onClick={handleLinkClick}>
              <i className="fal fa-play"></i>
            </Link>
          </div>
        </div>
        <div className="it-mouse-scroll it-mouse-scroll-space smooth">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about-item');
            }}
          >
            <ScrollDown />
          </Link>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-hero-5-content z-index">
                <h1
                  className="it-hero-5-title it-split-text it-split-in-left"
                  data-lag="0.5"
                  data-stagger="0.08"
                >
                  <span>TRADE &</span> <br />
                  <span className="text-space">MARKETING</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBannerThree;
