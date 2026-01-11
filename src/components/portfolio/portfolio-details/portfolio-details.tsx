import Image from 'next/image';
import Link from 'next/link';
import { IPortfolioDT } from '@/types/portfolio-d-t';

interface PortfolioDetailsProps {
  portfolio: IPortfolioDT;
}

import detailsImg from '@/assets/img/project/port-details-1.jpg';

const PortfolioDetailsArea = ({ portfolio }: PortfolioDetailsProps) => {
  return (
    <div className="it-portfolio-details-area black-bg pt-120 pb-95">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-portfolio-details-thumb mb-60">
              <Image
                className="image-height-auto"
                src={portfolio?.detailsImage || detailsImg}
                alt="details-img"
                width={1170}
                height={522}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="it-portfolio-details-left-wrap">
              <div className="it-portfolio-details-left-box mb-50">
                <div className="it-portfolio-details-left-item">
                  <h5 className="it-portfolio-details-left-title">Client</h5>
                  <span>{portfolio?.client || 'New Majestic'} , Trade & Marketing</span>
                </div>
                <div className="it-portfolio-details-left-item">
                  <h5 className="it-portfolio-details-left-title">Service</h5>
                  <span>{portfolio?.title || 'No Title'}</span>
                </div>
                <div className="it-portfolio-details-left-item">
                  <h5 className="it-portfolio-details-left-title">Year</h5>
                  <span>{portfolio?.serviceYear || '2024'}</span>
                </div>
              </div>
              <div className="it-portfolio-details-left-social mb-50">
                <a className="facebook" href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a className="twitter" href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a className="instagram" href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a className="linkedin" href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
              <div className="it-portfolio-details-left-btn">
                <Link className="it-btn-main" href="/about">
                  <span>DISCOVER MORE</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="it-portfolio-details-right-box">
              <div className="it-portfolio-details-right-top-wrap mb-20">
                <h4 className="it-portfolio-details-right-top-title mb-20">
                  {portfolio?.title.replace(/<br\s*\/?>/gi, ' ') || 'No Title'}
                </h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error <br />
                  sit voluptatem accusantium.
                </p>
              </div>
              <div className="it-portfolio-details-right-content mb-40">
                <h4 className="it-portfolio-details-right-title">
                  The Process
                </h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt.
                </p>
                <p>
                  Ellentesque sit amet odio nisi. Phasellus quis lorem leo. s,
                  libero diam finibus tellus, at sagittis tellus eros vitae
                  nisi. Sed dignissim augue sit amet diam laoreet venenatis.
                  Aliquam bibendum erat eu nisi faucibus dignissim. Phasellus
                  dignissim est tempor eros pulvinar luctus. Nam vulputate,
                  risus a efficitur cursus, felis dolor vulputate mi, ac
                  eleifend libero velit sed nunc.
                </p>
              </div>
              <div className="it-portfolio-details-right-content">
                <h4 className="it-portfolio-details-right-title">
                  The Service
                </h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <p>
                  Ellentesque sit amet odio nisi. Phasellus quis lorem leo. s,
                  libero diam finibus tellus, at sagittis tellus eros vitae
                  nisi. Sed dignissim augue sit amet diam laoreet venenatis.
                  Aliquam bibendum erat eu nisi faucibus dignissim. Phasellus
                  dignissim est tempor eros pulvinar luctus. Nam vulputate,
                  risus a efficitur cursus, felis dolor vulputate mi, ac
                  eleifend libero velit sed nunc.
                </p>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioDetailsArea;
