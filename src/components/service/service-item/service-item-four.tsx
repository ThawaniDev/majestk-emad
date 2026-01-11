import Link from 'next/link';
import Image from 'next/image';
import { IServiceDT } from '@/types/service-d-t';
import { RightArrowUp } from '@/components/svg';

import serviceImg from '@/assets/img/service/service-1-1.jpg';

interface ServiceItemProps {
  service: IServiceDT;
}

const ServiceItemFour = ({ service }: ServiceItemProps) => {
  return (
    <div className="it-service-item it-service-item-box p-relative">
      <div className="it-service-thumb">
        <Image
          className="w-100 image-height-auto"
          src={service.image || serviceImg}
          alt={`service-img-${service.id}`}
          width={370}
          height={420}
        />
      </div>
      <Link
        className="it-service-thumb-icon-2"
        href={`/service-details/${service.id}`}
      >
        <RightArrowUp />
      </Link>
      <div className="it-service-thumb-box">
        <h5 className="it-service-thumb-title">
          <Link href={`/service-details/${service.id}`}>{service.title}</Link>
        </h5>
      </div>
    </div>
  );
};
export default ServiceItemFour;
