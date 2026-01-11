'use client';

import { useGSAP } from '@gsap/react';
import { fadeAnimation, splitAnimation } from '@/utils/title-animation';
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import Wrapper from '@/layouts/wrapper';
import HeaderOne from '@/layouts/headers/header-1';
import Footer from '@/layouts/footers/footer';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import ContactArea from '@/components/contact/contact-area';
import ContactFormArea from '@/components/contact/copntact-form-area';
import { useLanguage } from '@/context/language-context';

const ContactMain = () => {
  const { t } = useLanguage();
  // Enable smooth scrolling
  useScrollSmooth();

  // GSAP animations
  useGSAP(() => {
    const timer = setTimeout(() => {
      splitAnimation();
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
            <Breadcrumb title={t('contact.pageTitle')} />
            <ContactArea />
            <ContactFormArea />
          </main>

          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};
export default ContactMain;
