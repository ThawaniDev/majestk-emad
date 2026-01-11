'use client';

import { useGSAP } from '@gsap/react';
import {
  fadeAnimation,
  splitAnimation,
  textAnimation,
} from '@/utils/title-animation';
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import Wrapper from '@/layouts/wrapper';
import Footer from '@/layouts/footers/footer';
import HeaderTwo from '@/layouts/headers/header-2';
import HeroBannerThree from '@/components/hero/hero-banner/hero-banner-three';
import AboutThree from '@/components/about/about-three';
import TextSliderThree from '@/components/text-slider/text-slider-three';
import ServiceFive from '@/components/service/service-five';
import ServiceSix from '@/components/service/service-six';
import PortfolioFour from '@/components/portfolio/portfolio-four';
import TestimonialThree from '@/components/testimonial/testimonial-three';
import VideoOne from '@/components/video/video-one';
import BrandOne from '@/components/brand/brand-one';
import ChooseOne from '@/components/choose/choose-one';
import TeamThree from '@/components/team/team-three';
import BlogTwo from '@/components/blog/blog-two';
import MapOne from '@/components/map/map-one';

const HomeFiveMain = () => {
  // Enable smooth scrolling
  useScrollSmooth();

  // GSAP animations
  useGSAP(() => {
    const timer = setTimeout(() => {
      splitAnimation();
      textAnimation();
      fadeAnimation();
    }, LOADING_ANIMATION_TIMEOUT);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <HeaderTwo />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroBannerThree />
            <AboutThree />
            <TextSliderThree />
            <ServiceFive />
            <ServiceSix />
            <PortfolioFour />
            <TestimonialThree />
            <VideoOne />
            <BrandOne itemClass="it-brand-2-area theme-bg pt-120 pb-120" />
            <ChooseOne />
            <TeamThree />
            <BlogTwo />
            <MapOne />
          </main>

          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};
export default HomeFiveMain;
