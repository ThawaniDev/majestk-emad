import Image from 'next/image';
import Link from 'next/link';
import { IServiceDT } from '@/types/service-d-t';
import { useLanguage } from '@/context/language-context';

import serviceImg from '@/assets/img/service/service-1-1.jpg';

interface ServiceItemProps {
  service: IServiceDT;
}

const ServiceItemOne = ({ service }: ServiceItemProps) => {
  const { t, dir } = useLanguage();
  return (
    <div className="it-service-item p-relative">
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
        className="it-service-thumb-icon"
        href={`/service-details/${service.id}`}
      >
        <i className={`fas ${dir === 'rtl' ? 'fa-arrow-left' : 'fa-arrow-right'}`}></i>
      </Link>
      <div className="it-service-thumb-box">
        <h5 className="it-service-thumb-title">
          <Link href={`/service-details/${service.id}`}>
            {service.titleKey ? t(service.titleKey) : service.title}
          </Link>
        </h5>
      </div>
    </div>
  );
};
export default ServiceItemOne;
