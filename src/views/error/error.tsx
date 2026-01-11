'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { fadeAnimation, splitAnimation } from '@/utils/title-animation';
import useScrollSmooth from '@/hooks/use-scroll-smooth';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import Wrapper from '@/layouts/wrapper';
import HeaderOne from '@/layouts/headers/header-1';
import Footer from '@/layouts/footers/footer';
import Breadcrumb from '@/components/breadcrumb/breadcrumb';
import { useLanguage } from '@/context/language-context';

import shapeImg from '@/assets/img/blog/shape-2.png';

// Props Type
type ErrorProps = {
  errorMessage?: string;
  onRetry?: () => void;
};

const ErrorMain = ({ errorMessage, onRetry }: ErrorProps) => {
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
            <Breadcrumb
              title={errorMessage ? t('error.somethingWentWrong') : t('error.notFoundTitle')}
              subtitle={t('error.pageTitle')}
            />

            <div className="it-error-area p-relative fix theme-bg pt-70 pb-120">
              <div className="it-error-shape">
                <Image
                  className="image-height-auto"
                  src={shapeImg}
                  alt="shape-img"
                  width={882}
                  height={1070}
                />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div
                      className="it-error-content z-index text-center it-fade-anim"
                      data-fade-from="bottom"
                      data-delay=".3"
                    >
                      <h5 className="it-error-number">
                        {errorMessage ? t('error.errorLabel') : '404'}
                      </h5>

                      {errorMessage ? (
                        <span>{t('error.somethingWrong')}</span>
                      ) : (
                        <span>
                          {t('error.somethingNotRight')}
                        </span>
                      )}

                      {errorMessage ? (
                        <p>
                          {errorMessage ||
                            t('error.unexpectedError')}
                        </p>
                      ) : (
                        <p>{t('error.notFoundDesc')}</p>
                      )}

                      {onRetry ? (
                        <button className="it-btn-main" onClick={onRetry}>
                          <span>{t('error.tryAgain')}</span>
                        </button>
                      ) : (
                        <Link className="it-btn-main" href="/">
                          <span>{t('error.backToHome')}</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};
export default ErrorMain;
