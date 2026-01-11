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
import HeaderOne from '@/layouts/headers/header-1';
import Footer from '@/layouts/footers/footer';
import HeroBannerTwo from '@/components/hero/hero-banner/hero-banner-two';
import FunFactOne from '@/components/funfact/funfact-one';
import AboutOne from '@/components/about/about-one';
import ServiceTwo from '@/components/service/service-two';
import PortfolioTwo from '@/components/portfolio/portfolio-two';
import ValueOne from '@/components/value/value-one';
import InstagramOne from '@/components/instagram/instagram-one';
import CtaOne from '@/components/cta/cta-one';
import BrandOne from '@/components/brand/brand-one';
import VideoOne from '@/components/video/video-one';
import BlogTwo from '@/components/blog/blog-two';
import TestimonialTwo from '@/components/testimonial/testimonial-two';

const HomeTwoMain = () => {
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
            <HeroBannerTwo />
            <FunFactOne
              itemClass="it-funtact-area it-funtact-space p-relative theme-bg"
              hasShape
            />
            <AboutOne />
            <ServiceTwo />
            <PortfolioTwo />
            <ValueOne />
            <TestimonialTwo />
            <BrandOne itemClass="it-brand-2-area black-bg pt-120 pb-120" />
            <VideoOne />
            <BlogTwo />
            <InstagramOne />
            <CtaOne />
          </main>

          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};
export default HomeTwoMain;
