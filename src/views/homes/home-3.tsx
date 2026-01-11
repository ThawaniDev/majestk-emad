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
import HeroSliderOne from '@/components/hero/hero-slider/hero-slider-one';
import HeaderTwo from '@/layouts/headers/header-2';
import AboutTwo from '@/components/about/about-two';
import PortfolioThree from '@/components/portfolio/portfolio-three';
import BrandOne from '@/components/brand/brand-one';
import FunfactTwo from '@/components/funfact/funfact-two';
import ServiceThree from '@/components/service/service-three';
import TestimonialOne from '@/components/testimonial/testimonial-one';
import BlogThree from '@/components/blog/blog-three';
import TextSliderTwo from '@/components/text-slider/text-slider-two';

const HomeThreeMain = () => {
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
            <HeroSliderOne />
            <AboutTwo />
            <PortfolioThree />
            <BrandOne itemClass="it-brand-2-area it-brand-2-border theme-bg pt-120 pb-115" />
            <FunfactTwo />
            <ServiceThree />
            <TestimonialOne
              bgImg="/assets/img/testimonial/bg-3-1.jpg"
              hasNavigation
            />
            <BlogThree />
            <TextSliderTwo />
          </main>

          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};
export default HomeThreeMain;
