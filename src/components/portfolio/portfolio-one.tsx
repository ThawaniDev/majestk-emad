'use client';

import { getPortfolioDataOne } from '@/data/portfolio-data';
import PortfolioItemOne from './portfolio-item/portfolio-item-one';
import { useLanguage } from '@/context/language-context';

interface PortfolioProps {
  itemClass?: string;
}

const PortfolioOne = ({ itemClass }: PortfolioProps) => {
  const { t, locale } = useLanguage();
  const isRTL = locale === 'ar';
  const portfolioDataOne = getPortfolioDataOne(t);

  return (
    <div className={itemClass || 'it-project-area theme-bg pt-85 pb-120'} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-project-section-box mb-80">
              <h6 className={`it-section-subtitle-1 it-split-text ${isRTL ? 'it-split-in-left' : 'it-split-in-right'}`}>
                {t('portfolio.subtitle')}
              </h6>
              <h4 className={`it-section-title-1 it-split-text ${isRTL ? 'it-split-in-left' : 'it-split-in-right'}`}>
                {t('portfolio.sectionTitle')}
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="it-project-list-box">
              <ul>
                {portfolioDataOne
                  .map((portfolio) => (
                    <li key={portfolio.id}>
                      <PortfolioItemOne portfolio={portfolio} isRTL={isRTL} />
                    </li>
                  ))
                  .slice(0, 4)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioOne;
