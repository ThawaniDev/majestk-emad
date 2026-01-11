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
import HeaderOne from '@/layouts/headers/header-1';
import HeroSliderTwo from '@/components/hero/hero-slider/hero-slider-two';
import ServiceFour from '@/components/service/service-four';
import FunFactThree from '@/components/funfact/funfact-three';
import AwardOne from '@/components/award/award-one';
import PortfolioOne from '@/components/portfolio/portfolio-one';
import VideoTwo from '@/components/video/video-two';
import TeamTwo from '@/components/team/team-two';
import ContactOne from '@/components/contact/contact-one';
import InstagramOne from '@/components/instagram/instagram-one';
import CtaOne from '@/components/cta/cta-one';
import BlogFour from '@/components/blog/blog-four';

const HomeFourMain = () => {
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
      <HeaderOne
        headerClass="it-header-sticky it-header-transparent z-index-5"
        hasBorder
      />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroSliderTwo />
            <ServiceFour />
            <FunFactThree />
            <AwardOne />
            <PortfolioOne itemClass="it-project-area p-relative fix theme-bg pt-120 pb-120" />
            <VideoTwo />
            <TeamTwo />
            <ContactOne />
            <BlogFour />
            <InstagramOne />
            <CtaOne />
          </main>

          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};
export default HomeFourMain;
