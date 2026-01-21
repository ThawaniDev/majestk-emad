'use client';

import { useGSAP } from '@gsap/react';
import {
  fadeAnimation,
  splitAnimation,
  textAnimation,
} from '@/utils/title-animation';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import HeroBannerOne from '@/components/hero/hero-banner/hero-banner-one';
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import HeaderOne from '@/layouts/headers/header-1';
import Wrapper from '@/layouts/wrapper';
import ServiceOne from '@/components/service/service-one';
import TextSliderOne from '@/components/text-slider/text-slider-one';
import PortfolioOne from '@/components/portfolio/portfolio-one';
import TeamOne from '@/components/team/team-one';
import InstagramOne from '@/components/instagram/instagram-one';
import CtaOne from '@/components/cta/cta-one';
import Footer from '@/layouts/footers/footer';

const HomeMain = () => {
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
      <HeaderOne />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroBannerOne />
            <ServiceOne />
            <TextSliderOne />
            <PortfolioOne />
            <TeamOne />
            {/* <BrandOne hasTitle /> */}
            {/* <GalleryOne /> */}
            {/* <FunFactOne /> */}
            {/* <TestimonialOne /> */}
            {/* <BlogOne />/ */}
            <InstagramOne />
            <CtaOne />
          </main>

          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};
export default HomeMain;
