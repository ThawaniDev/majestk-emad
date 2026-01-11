'use client';

import { useState } from 'react';
import { getPortfolioDataThree } from '@/data/portfolio-data';
import PortfolioItemThree from './portfolio-item/portfolio-item-three';
import { useLanguage } from '@/context/language-context';

const PortfolioThree = () => {
  const { t, locale } = useLanguage();
  const isRTL = locale === 'ar';
  const portfolioDataThree = getPortfolioDataThree(t);
  const [hoveredId, setHoveredId] = useState<number | null>(
    portfolioDataThree.length > 0 ? portfolioDataThree[0].id : null
  );
  return (
    <div className="it-project-3-area fix theme-bg" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-project-3-section-box text-center mb-70">
              <h5 className={`it-section-subtitle-1 pb-25 it-split-text ${isRTL ? 'it-split-in-up' : 'it-split-in-down'}`}>
                OUR LATEST PROJECTS
              </h5>
              <h4 className={`it-section-title-1 it-split-text ${isRTL ? 'it-split-in-up' : 'it-split-in-down'}`}>
                Check Our Projects
              </h4>
            </div>
          </div>
          {portfolioDataThree.map((portfolio) => (
            <div
              key={portfolio.id}
              className="col-xl-12"
              onMouseEnter={() => setHoveredId(portfolio.id)}
            >
              <PortfolioItemThree portfolio={portfolio} hoverId={hoveredId} isRTL={isRTL} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PortfolioThree;
