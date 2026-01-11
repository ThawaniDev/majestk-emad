import Image from 'next/image';
import Link from 'next/link';

import shapeImg from '@/assets/img/service/shape-2-1.png';

const categoryData = [
  'Cloud Service',
  'Web Development',
  'Ui/Ux Designing',
  'IT Management',
  'Data Visualization',
  'Security System',
];

const ServiceDetailsSidebar = () => {
  return (
    <div className="sidebar__wrapper-box">
      <div className="sidebar__widget color-box  mb-40">
        <div className="sidebar__widge-title-box">
          <h3 className="sidebar__widget-title">Categories</h3>
        </div>
        <div className="sidebar__widget-content">
          <ul>
            {categoryData.map((item, i) => (
              <li key={i}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sidebar__widget mb-40">
        <div className="it-service-details__thumb-box  d-flex justify-content-center align-items-center fix p-relative">
          <div className="it-service-details__thumb-shape">
            <Image
              className="image-height-auto"
              src={shapeImg}
              alt="shape-img"
              width={370}
              height={388}
            />
          </div>
          <div className="it-service-details__thumb-content z-index text-center">
            <h5 className="it-service-details__title mb-40">
              Need Any Types <br />
              of Service <br />
              from us
            </h5>
            <Link className="it-btn-white z-index" href="/contact">
              <span>FIND SOLUTION</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceDetailsSidebar;
