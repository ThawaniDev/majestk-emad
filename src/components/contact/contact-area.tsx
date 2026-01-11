'use client';
import { useLanguage } from '@/context/language-context';

const ContactArea = () => {
  const { t } = useLanguage();
  return (
    <div className="it-contact__area theme-bg pt-120 pb-120">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-5 col-lg-6">
            <div className="it-contact__right-box">
              <div className="it-contact__section-box pb-20">
                <h4 className="it-section-title-1 pb-15">{t('contact.getInTouch')}</h4>
                <p>
                  {t('contact.contactDescription')}
                </p>
              </div>
              <div className="it-contact__content">
                <h5>{t('contact.contactInfo')}</h5>
                <ul>
                  <li>
                    <div className="it-contact__list">
                      <span>{t('contact.address')}</span>
                      <a href="#">{t('contact.addressValue')}</a>
                    </div>
                  </li>
                  <li>
                    <div className="it-contact__list">
                      <span>{t('contact.phone')}</span>
                      <a href="tel:09354587874">
                        {t('contact.phoneValue')}
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="it-contact__list">
                      <span>{t('contact.email')}</span>
                      <a href="mailto:info@example.com">
                        {t('contact.emailValue')}
                      </a>
                    </div>
                  </li>
                </ul>
                <a href="mailto:www.example.com">{t('contact.website')}</a>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="it-contact__location">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d146513.05509247648!2d73.19133525789097!3d54.98596156928781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43aafde2f601090b%3A0x5eefc33861a69b1a!2z4KaT4Kau4Ka44KeN4KaVLCBPbXNrIE9ibGFzdCwg4Kaw4Ka-4Ka24Ka_4Kav4Ka84Ka-!5e0!3m2!1sbn!2sbd!4v1689181288902!5m2!1sbn!2sbd"
                width="600"
                height="450"
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactArea;
