'use client';

import { useGSAP } from '@gsap/react';
import { fadeAnimation, splitAnimation } from '@/utils/title-animation';
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import Wrapper from '@/layouts/wrapper';
import HeaderOne from '@/layouts/headers/header-1';
import Footer from '@/layouts/footers/footer';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import { IBlogDT } from '@/types/blog-d-t';
import BlogDetailsArea from '@/components/blog/blog-details/blog-details-area';
import { useLanguage } from '@/context/language-context';

interface BlogDetailsProps {
  blog: IBlogDT;
}

const ServiceDetailsMain = ({ blog }: BlogDetailsProps) => {
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
            <Breadcrumb title={blog?.title} subtitle={t('blog.detailsTitle')} />
            <BlogDetailsArea blog={blog} />
          </main>

          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};
export default ServiceDetailsMain;
