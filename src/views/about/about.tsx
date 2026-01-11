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
import AboutThree from '@/components/about/about-three';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import FunFactOne from '@/components/funfact/funfact-one';
import TestimonialThree from '@/components/testimonial/testimonial-three';
import VideoOne from '@/components/video/video-one';
import TeamTwo from '@/components/team/team-two';
import BrandOne from '@/components/brand/brand-one';
import { useLanguage } from '@/context/language-context';

const AboutMain = () => {
  const { t } = useLanguage();
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
            <Breadcrumb title={t('about.pageTitle')} />
            <AboutThree />
            <FunFactOne />
            <TestimonialThree itemClass="it-testimonial-5-area theme-bg pt-120 pb-140" />
            <VideoOne />
            <TeamTwo />
            <BrandOne itemClass="it-brand-2-area it-brand-2-border theme-bg pt-120 pb-115" />
          </main>

          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};
export default AboutMain;
