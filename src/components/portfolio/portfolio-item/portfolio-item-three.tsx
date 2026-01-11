import Link from 'next/link';
import { IPortfolioDT } from '@/types/portfolio-d-t';

interface PortfolioItemProps {
  portfolio: IPortfolioDT;
  hoverId: number | null;
  isRTL?: boolean;
}

const PortfolioItemThree = ({ portfolio, hoverId, isRTL = false }: PortfolioItemProps) => {
  return (
    <div
      className={`it-project-3-item-bg ${
        hoverId === portfolio.id ? 'active' : ''
      }`}
    >
      <div className="row">
        <div className="col-xl-12">
          <div className={`it-project-3-item-content d-flex align-items-center justify-content-between ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="it-project-3-item-text">
              <span
                dangerouslySetInnerHTML={{
                  __html: portfolio.subtitle || ' Branding Design',
                }}
              ></span>
              <h5 className="it-project-3-item-title">
                <Link href={`/portfolio-details/${portfolio.id}`}>
                  {portfolio.title}
                </Link>
              </h5>
            </div>
            <div className="it-project-3-item-arrow">
              <Link href={`/portfolio-details/${portfolio.id}`}>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioItemThree;
