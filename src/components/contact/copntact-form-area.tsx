'use client';
import { useLanguage } from '@/context/language-context';
import ContactFormOne from '../form/contact-form-one';

const ContactFormArea = () => {
  const { t } = useLanguage();
  return (
    <div className="it-contact-form-box theme-bg pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-contact-wrap black-bg">
              <div className="it-contact-text pb-30">
                <h5 className="it-contact-title">{t('contact.formTitle')}</h5>
                <p>
                  {t('contact.formSubtitle')}
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
export default ContactFormArea;
