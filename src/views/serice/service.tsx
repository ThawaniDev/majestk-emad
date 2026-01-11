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
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import CtaOne from '@/components/cta/cta-one';
import ServiceOne from '@/components/service/service-one';
import ServiceSix from '@/components/service/service-six';
import ChooseOne from '@/components/choose/choose-one';
import VideoOne from '@/components/video/video-one';
import { useLanguage } from '@/context/language-context';

const ServiceMain = () => {
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
            <Breadcrumb title={t('services.pageTitle')} subtitle={t('navigation.service')} />
            <ServiceOne />
            <ServiceSix />
            <ChooseOne itemClass="it-choose-5-area theme-bg pt-120 pb-175" />
            <VideoOne />
            <CtaOne />
          </main>

          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};
export default ServiceMain;
