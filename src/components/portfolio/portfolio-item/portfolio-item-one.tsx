import Image from 'next/image';
import Link from 'next/link';
import { RightArrow } from '@/components/svg';
import { IPortfolioDT } from '@/types/portfolio-d-t';

import portfolioImg from '@/assets/img/project/project-1-1.jpg';

interface PortfolioItemProps {
  portfolio: IPortfolioDT;
  isRTL?: boolean;
}

const PortfolioItemOne = ({ portfolio, isRTL = false }: PortfolioItemProps) => {
  return (
    <div className="it-project-content-box p-relative it-reveal-item">
      <div className="it-project-content-thumb">
        <Image
          className="w-100"
          src={portfolio.image || portfolioImg}
          alt="portfolio-img"
          width={196}
          height={270}
        />
      </div>
      <div className={`row align-items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
        <div className="col-xl-7 col-lg-7 col-md-6 col-md-6">
          <div className={`it-project-content p-relative d-flex align-items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            <h4 className="it-project-content-title">
              <Link href={`/portfolio-details/${portfolio.id}`}>
                {portfolio.title}
              </Link>
            </h4>
            <div className="it-project-content-arrow">
              <span>
                <RightArrow />
              </span>
            </div>
          </div>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-6 col-md-6">
          <div className="it-project-content-text">
            <p>{portfolio.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioItemOne;
