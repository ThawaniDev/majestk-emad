'use client';

import { useGSAP } from '@gsap/react';
import { fadeAnimation, splitAnimation } from '@/utils/title-animation';
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import Wrapper from '@/layouts/wrapper';
import HeaderOne from '@/layouts/headers/header-1';
import Footer from '@/layouts/footers/footer';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import { IPortfolioDT } from '@/types/portfolio-d-t';
import PortfolioDetailsArea from '@/components/portfolio/portfolio-details/portfolio-details';
import { useLanguage } from '@/context/language-context';

interface PortfolioDetailsProps {
  portfolio: IPortfolioDT;
}

const PortfolioDetailsMain = ({ portfolio }: PortfolioDetailsProps) => {
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
            <Breadcrumb title={portfolio?.title} subtitle={t('portfolio.detailsTitle')} />
            <PortfolioDetailsArea portfolio={portfolio} />
          </main>

          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};
export default PortfolioDetailsMain;
