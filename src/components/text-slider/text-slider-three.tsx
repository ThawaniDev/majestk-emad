'use client';

import Marquee from 'react-fast-marquee';

const textData = ['Business solution', 'Transform Ideas', 'Digital Agency'];

const TextSliderThree = () => {
  return (
    <div className="it-text-slider-5-area black-bg p-relative pt-120 pb-120 fix">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <Marquee speed={100} loop={0} direction="right">
              <div className="it-text-slider-5-item">
                {textData.map((item, i) => (
                  <span key={i} className="me-3">
                    <i className="fa-light fa-star"></i> {item}
                  </span>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TextSliderThree;
