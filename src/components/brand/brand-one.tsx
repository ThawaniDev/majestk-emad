'use client';

import Marquee from 'react-fast-marquee';
import { BrandIcon } from '../svg';

interface BranProps {
  itemClass?: string;
  hasTitle?: boolean;
}

const brandData = [
  { id: 1, icon: <BrandIcon /> },
  { id: 2, icon: <BrandIcon /> },
  { id: 3, icon: <BrandIcon /> },
  { id: 4, icon: <BrandIcon /> },
  { id: 5, icon: <BrandIcon /> },
  { id: 6, icon: <BrandIcon /> },
  { id: 7, icon: <BrandIcon /> },
];

const BrandOne = ({ itemClass, hasTitle }: BranProps) => {
  return (
    <div className={itemClass || 'it-brand-area theme-bg pt-120'}>
      <div className="container">
        {hasTitle && (
          <div className="row">
            <div className="col-xl-12">
              <div className="it-brand-text text-center pb-60">
                <p>OVER 100+ BUSINESSES GROWING WITH NEW MAJESTIC</p>
              </div>
            </div>
          </div>
        )}

        <div className="row">
          <div className="col-xl-12">
            <div className="it-brand-2-item-wrapper">
              <div className="swiper-container it-brand-2-item-active">
                <Marquee speed={100} loop={0}>
                  {brandData.map((item) => (
                    <div
                      key={item.id}
                      className="it-brand-2-item text-center mr-50"
                    >
                      <span>{item.icon}</span>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrandOne;
