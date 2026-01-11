import ContactFormOne from '../form/contact-form-one';

const ContactTwo = () => {
  return (
    <div className="it-contact-form-box theme-bg pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-contact-wrap black-bg">
              <div className="it-contact-text pb-30">
                <h5 className="it-contact-title">Let’s Get in Touch</h5>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>
              <div className="it-contact-form-box">
                <ContactFormOne />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactTwo;
