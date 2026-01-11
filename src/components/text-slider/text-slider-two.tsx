'use client';

import Marquee from 'react-fast-marquee';
import Image from 'next/image';

import authorImg1 from '@/assets/img/testimonial/author-1-2.png';
import authorImg2 from '@/assets/img/testimonial/author-1-3.png';
import authorImg3 from '@/assets/img/testimonial/author-1-4.png';
import authorImg4 from '@/assets/img/testimonial/author-1-5.png';

const TextSliderTwo = () => {
  return (
    <div className="it-text-slider-area it-text-slider-space theme-bg p-relative fix">
      <div className="it-text-slider-shape-1 d-none d-lg-block">
        <Image src={authorImg1} alt="author-img" width={112} height={112} />
      </div>
      <div className="it-text-slider-shape-2 d-none d-lg-block">
        <Image src={authorImg2} alt="author-img" width={112} height={112} />
      </div>
      <div className="it-text-slider-shape-3 d-none d-lg-block">
        <Image src={authorImg3} alt="author-img" width={112} height={112} />
      </div>
      <div className="it-text-slider-shape-4 d-none d-lg-block">
        <Image src={authorImg4} alt="author-img" width={112} height={112} />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <Marquee speed={100} loop={0} direction="right">
              <div className="it-text-slider-item">
                <span>
                  CREATIVE AGENCY <i></i> CREATIVE AGENCY <i></i> CREATIVE
                  AGENCY <i></i> CREATIVE AGENCY <i></i> CREATIVE AGENCY <i></i>{' '}
                </span>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TextSliderTwo;
