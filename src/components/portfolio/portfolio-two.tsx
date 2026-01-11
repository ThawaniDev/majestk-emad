'use client';

import Link from 'next/link';
import useHoverEffect from '@/hooks/use-hover-effect';
import { getPortfolioDataTwo } from '@/data/portfolio-data';
import PortfolioItemTwo from './portfolio-item/portfolio-item-two';
import { useLanguage } from '@/context/language-context';

const PortfolioTwo = () => {
  const containerRef = useHoverEffect<HTMLDivElement>();
  const { t } = useLanguage();
  const portfolioDataTwo = getPortfolioDataTwo(t);

  return (
    <div className="it-project-2-area theme-bg pb-100">
      <div className="container">
        <div className="it-project-2-top mb-60">
          <div className="row align-items-end">
            <div className="col-xl-8 col-lg-8 col-md-7">
              <div className="it-project-2-section-box">
                <h5 className="it-section-subtitle-1 pb-25 it-split-text it-split-in-down">
                  {t('portfolio.subtitle')}
                </h5>
                <h4 className="it-section-title-1 it-split-text it-split-in-down">
                  {t('portfolio.sectionTitle')}
                </h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-5">
              <div
                className="it-project-2-button text-start text-md-end it-fade-anim"
                data-fade-from="right"
                data-ease="bounce"
                data-delay=".5"
              >
                <Link className="it-btn-main" href="/portfolio">
                  <span>{t('portfolio.viewMoreProjects')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="it-project-2-plr">
          <div className="row-custom" ref={containerRef}>
            {portfolioDataTwo.map((portfolio) => (
              <div key={portfolio.id} className="col-custom">
                <PortfolioItemTwo portfolio={portfolio} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioTwo;
