import Link from 'next/link';
import { IServiceDT } from '@/types/service-d-t';

interface ServiceItemProps {
  service: IServiceDT;
  hoverId: number | null;
}

const ServiceItemTwo = ({ service, hoverId }: ServiceItemProps) => {
  return (
    <div
      className={`it-service-2-item ${hoverId === service.id ? 'active' : ''}`}
    >
      <span>{service.serviceCount}</span>
      <h4 className="it-service-2-title">
        <Link href={`/service-details/${service.id}`}>{service.title}</Link>
      </h4>
      <p>{service.description}</p>
      <Link href={`/service-details/${service.id}`}>{service.btnText}</Link>
    </div>
  );
};
export default ServiceItemTwo;
