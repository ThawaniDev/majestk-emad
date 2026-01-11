import Image from 'next/image';
import Link from 'next/link';

const ContactOne = () => {
  return (
    <div className="it-contact-4-area fix theme-bg">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-xl-7 col-lg-7">
            <div
              className="it-contact-4-left-box it-fade-anim"
              data-fade-from="left"
              data-delay=".5"
            >
              <h4 className="it-section-title-1 pb-45 it-split-text it-split-in-right">
                Contact With Us
              </h4>
              <div className="it-contact-4-form-box">
                <form action="#">
                  <input type="text" placeholder="Your Name*" />
                  <input type="text" placeholder="Your Email*" />
                  <input type="text" placeholder="Your Website*" />
                  <textarea placeholder="Tell us Something"></textarea>
                </form>
              </div>
              <Link className="it-btn-main color" href="/contact">
                <span>GET IN TOUCH</span>
              </Link>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div
              className="it-contact-4-thumb it-fade-anim"
              data-fade-from="right"
              data-delay=".5"
            >
              <Image
                className="image-height-auto"
                src="/assets/new_images_from_internet/reception.jpg"
                alt="contact-img"
                width={710}
                height={710}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactOne;
