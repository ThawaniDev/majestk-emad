'use client';

import { getPortfolioDataFour } from '@/data/portfolio-data';
import useHoverEffect from '@/hooks/use-hover-effect';
import PortfolioItemTwo from './portfolio-item/portfolio-item-two';
import { useLanguage } from '@/context/language-context';

const PortfolioFour = () => {
  const { t } = useLanguage();
  const portfolioDataFour = getPortfolioDataFour(t);
  const containerRef = useHoverEffect<HTMLDivElement>();
  return (
    <div className="it-project-2-area theme-bg pt-120 pb-90">
      <div className="container">
        <div className="it-project-2-top mb-60">
          <div className="row align-items-end">
            <div className="col-xl-12">
              <div className="it-project-2-section-box text-center">
                <h5 className="it-section-subtitle-1 pb-25 it-split-text it-split-in-right">
                  OUR LATEST PROJECTS
                </h5>
                <h4 className="it-section-title-1 it-split-text it-split-in-right">
                  A quick glance of our <br />
                  past projects.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="it-project-2-plr">
          <div className="row-custom" ref={containerRef}>
            {portfolioDataFour.map((portfolio) => (
              <div key={portfolio.id} className="col-custom">
                <PortfolioItemTwo
                  portfolio={portfolio}
                  itemClass="it-panel-item-box text-color fix p-relative"
                  iconClass="it-panel-icon black-color"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioFour;
