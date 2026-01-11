import Image from 'next/image';

import valueImg1 from '@/assets/img/service/value-1-1.png';
import valueImg2 from '@/assets/img/service/value-1-2.png';
import valueImg3 from '@/assets/img/service/value-1-3.png';

const valueData = [
  {
    id: 1,
    image: valueImg1,
    title: 'Professionalism',
    description: 'Commitment to the highest standards of performance and excellence in every step.',
  },
  {
    id: 2,
    image: valueImg2,
    title: 'Quality',
    description: 'Providing reliable products and services that meet and exceed expectations.',
  },
  {
    id: 3,
    image: valueImg3,
    title: 'Innovation',
    description: 'Keeping pace with modern developments in the market to deliver renewed solutions.',
  },
];

const ValueOne = () => {
  return (
    <div className="it-value-2-area black-bg pt-110 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-value-2-section-box text-center mb-50">
              <h4 className="it-section-title-1 text-white it-split-text it-split-in-down">
                Core Values We Live By
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {valueData.map((item, i) => (
            <div
              key={item.id}
              className="col-xl-4 col-lg-4 col-md-6 mb-30 it-fade-anim"
              data-fade-from="bottom"
              data-delay={0.3 + 0.2 * i}
            >
              <div className="it-value-2-item">
                <div className="it-value-2-icon">
                  <span>
                    <Image
                      className="image-height-auto"
                      src={item.image}
                      alt="value-image"
                    />
                  </span>
                </div>
                <h4 className="it-value-2-title">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ValueOne;
