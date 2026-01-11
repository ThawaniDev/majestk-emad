import Link from 'next/link';
import { IServiceDT } from '@/types/service-d-t';

interface ServiceItemProps {
  service: IServiceDT;
  hoverId: number | null;
}

const ServiceItemThree = ({ service, hoverId }: ServiceItemProps) => {
  return (
    <div
      className={`it-service-2-item color-none ${
        hoverId === service.id ? 'active' : ''
      }`}
    >
      <span>
        <i className={service.icon}></i>
      </span>
      <h4 className="it-service-2-title">
        <Link href={`/service-details/${service.id}`}>{service.title}</Link>
      </h4>
      <p>{service.description}</p>
      <Link href={`/service-details/${service.id}`}>
        {service.btnText}
        <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </div>
  );
};
export default ServiceItemThree;
