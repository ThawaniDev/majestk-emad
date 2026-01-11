import Image from 'next/image';

import awardImg from '@/assets/img/gallery/award.jpg';

const itemData = [
  { id: 1, title: 'behance', description: 'Site of the day' },
  { id: 2, title: 'Envato', description: 'Identity X3' },
  { id: 3, title: 'CSSDA', description: 'wotd and UX/UI innovation' },
];

const AwardOne = () => {
  return (
    <div className="it-award-area theme-bg pt-100 fix">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="it-award-thumb">
              <Image
                className="image-height-auto"
                src={awardImg}
                alt="award-img"
                width={876}
                height={624}
              />
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="it-award-left-box black-bg">
              <h4 className="it-section-title-1 it-split-text it-split-in-right">
                Our Awards
              </h4>
              <div className="it-award-list-box">
                <ul>
                  {itemData.map((item, i) => (
                    <li
                      key={item.id}
                      className="it-fade-anim"
                      data-fade-from="bottom"
                      data-delay={0.3 + 0.2 * i}
                    >
                      <div className="it-award-wrap d-flex align-items-center">
                        <div className="it-award-number d-flex align-items-center">
                          <i>{String(item.id).padStart(2, '0')}</i>
                          <h5 className="it-award-title">{item.title}</h5>
                        </div>
                        <div className="it-award-content">
                          <span>{item.description}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AwardOne;
