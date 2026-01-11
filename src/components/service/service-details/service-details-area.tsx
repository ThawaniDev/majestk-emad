import Image from 'next/image';
import ServiceDetailsSidebar from './service-details-sidebar';
import DetailsFaq from './details-faq';
import { IServiceDT } from '@/types/service-d-t';

import detailsImg from '@/assets/img/service/details1-1.jpg';

interface ServiceDetailsProps {
  service: IServiceDT;
}

const ServiceDetailsArea = ({ service }: ServiceDetailsProps) => {
  return (
    <div className="it-service-details__area theme-bg pt-120 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 mb-50">
            {/* Sidebar Area */}
            <ServiceDetailsSidebar />
            {/* Sidebar Area */}
          </div>
          <div className="col-xl-8 col-lg-8 mb-50">
            <div className="it-service-details__wrap">
              <div className="it-service-details__content-box">
                <h5 className="postbox__details-title mb-15">
                  {service?.title.replace(/<br\s*\/?>/gi, ' ') ||
                    'Title Not Found'}
                </h5>
                <p className="pb-15">
                  We embrace holistic development and support for employees with
                  the aim of being a first-choice employer within our sectors.
                  Through a unique combination of engineering, construction and
                  design disciplines and expertise.
                </p>
                <div className="it-service-details__thumb pb-35">
                  <Image
                    className="image-height-auto"
                    src={service?.detailsImage || detailsImg}
                    alt="details-img"
                    width={740}
                    height={368}
                  />
                </div>
                <h5 className="it-service-details__title">Cloud Service</h5>
                <p className="pb-30">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
                  Aenean eu enim justo. Vestibulum aliquam hendrerit molestie.
                  Mauris malesuada nisi sit amet augue accumsan tincidunt.
                  Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros
                  facilisis libero, vitae commodo nunc quam et ligula
                </p>
                <div className="row">
                  <div className="col-xl-5 col-lg-5">
                    <div className="it-service-details__left-box">
                      <h5 className="it-service-details__title">Our Goals</h5>
                      <div className="it-service-details__list">
                        <ul>
                          <li>
                            <i className="flaticon-check-mark"></i>Aliquam
                            accumsan et ante id
                          </li>
                          <li>
                            <i className="flaticon-check-mark"></i>Lorem ipsum
                            dolor sit dgdr
                          </li>
                          <li>
                            <i className="flaticon-check-mark"></i>Maecenas
                            varius tortor
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-7">
                    <div className="it-service-details__right-box">
                      <h5 className="it-service-details__title">
                        The Challenges
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas varius tortor nibh, sit amet tempor finibus et.
                        Aenean eu enim justo. Vestibulum
                      </p>
                    </div>
                  </div>

                  {/* FAQ Area */}
                  <DetailsFaq />
                  {/* FAQ Area */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceDetailsArea;
