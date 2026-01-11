'use client';

import { getPortfolioDataOne } from '@/data/portfolio-data';
import PortfolioItemOne from './portfolio-item/portfolio-item-one';
import { useLanguage } from '@/context/language-context';

const PortfolioArea = () => {
  const { t } = useLanguage();
  const portfolioDataOne = getPortfolioDataOne(t);
  return (
    <div className={'it-project-area theme-bg pt-85 pb-120'}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-project-section-box text-center mb-80">
              <h6 className="it-section-subtitle-1 it-split-text it-split-in-right">
                OUR LATEST PROJECTS
              </h6>
              <h4 className="it-section-title-1 it-split-text it-split-in-right">
                A quick glance of our past projects.
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="it-project-list-box">
              <ul>
                {portfolioDataOne.map((portfolio) => (
                  <li key={portfolio.id}>
                    <PortfolioItemOne portfolio={portfolio} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioArea;
