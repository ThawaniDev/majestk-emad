import Image from 'next/image';
import Link from 'next/link';
import { IPortfolioDT } from '@/types/portfolio-d-t';

import portfolioImg from '@/assets/img/project/project-1-1.jpg';

interface PortfolioItemProps {
  portfolio: IPortfolioDT;
  itemClass?: string;
  iconClass?: string;
}

const PortfolioItemTwo = ({
  portfolio,
  itemClass,
  iconClass,
}: PortfolioItemProps) => {
  return (
    <div className={itemClass || 'it-panel-item-box fix p-relative'}>
      <div className="it-panel-item">
        <div className="it-panel-content">
          <Image
            className="image-height-auto"
            src={portfolio.image || portfolioImg}
            alt="portfolio-img"
            width={570}
            height={600}
          />
        </div>
      </div>
      <div className="it-panel-item-2">
        <div className="it-panel-text d-flex justify-content-between align-items-center">
          <div>
            <h4 className="it-panel-title">
              <Link
                href={`/portfolio-details/${portfolio.id}`}
                dangerouslySetInnerHTML={{ __html: portfolio.title }}
              ></Link>
            </h4>
          </div>
          <div className={iconClass || 'it-panel-icon'}>
            <Link href={`/portfolio-details/${portfolio.id}`}>
              <i className="flaticon-right-arrow"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioItemTwo;
