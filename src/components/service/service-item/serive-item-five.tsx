import Image from 'next/image';
import Link from 'next/link';
import { IServiceDT } from '@/types/service-d-t';

import shapeImg from '@/assets/img/about/shape-4-4.png';

interface ServiceItemProps {
  service: IServiceDT;
}

const ServiceItemFive = ({ service }: ServiceItemProps) => {
  return (
    <div className="it-service-4__item fix text-center">
      <span>
        <i className={service.icon}></i>
      </span>
      <Link href={`/service-details/${service.id}`}>
        <h5
          className="it-service-4__title"
          dangerouslySetInnerHTML={{ __html: service.title }}
        ></h5>
      </Link>
      <div className="it-service-4__link">
        <Link href={`/service-details/${service.id}`}>{service.btnText}</Link>
      </div>
      <div className="it-service-4__overly">
        <div className="it-service-4__shape-1">
          <Image
            className="image-height-auto"
            src={shapeImg}
            alt="shape-img"
            width={220}
            height={180}
          />
        </div>
      </div>
    </div>
  );
};
export default ServiceItemFive;
