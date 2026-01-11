import ContactFormOne from '@/components/form/contact-form-one';

const DetailsContact = () => {
  return (
    <div className="postbox__content-wrap">
      <div className="it-contact-wrap black-bg">
        <div className="it-contact-text pb-30">
          <h5 className="it-contact-title">Let’s Get in Touch</h5>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>
        <div className="it-contact-form-box">
          <ContactFormOne />
        </div>
      </div>
    </div>
  );
};
export default DetailsContact;
