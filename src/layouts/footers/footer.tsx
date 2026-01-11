import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer>
      <div
        className="it-footer-wrapper fix it-footer-bg"
        style={{ backgroundImage: `url('/assets/img/footer/bg-1-1.jpg')` }}
      >
        <div className="it-footer-area fix pt-120 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50">
                <div
                  className="it-footer-widget footer-cols-1 it-fade-anim"
                  data-fade-from="bottom"
                  data-delay=".3"
                >
                  <div className="it-footer-logo mb-25">
                    <Link href="/">
                      <Image src="/assets/new_images_from_internet/logo.png" alt="New Majestic" width={155} height={155} />
                    </Link>
                  </div>
                  <div className="it-footer-widget-content">
                    <p>
                      {t('contact.addressValue') || 'Address 301 Princes Street, Ei- Mahall Damietta Egypt-104'}
                    </p>
                    <ul>
                      <li>
                        <a href="tel:+134353353545">+1 343 5335 3545</a>
                      </li>
                      <li>
                        <a href="mailto:xofthelp@gmail.com">
                          ageohelp@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 mb-50">
                <div
                  className="it-footer-widget footer-cols-2 it-fade-anim"
                  data-fade-from="bottom"
                  data-delay=".5"
                >
                  <h4 className="it-footer-widget-title">{t('footer.quickLinks') || 'Navigation'}</h4>
                  <div className="it-footer-widget-list">
                    <ul>
                      <li>
                        <a href="#">{t('navigation.aboutUs')}</a>
                      </li>
                      <li>
                        <a href="#">{t('portfolio.pageTitle')}</a>
                      </li>
                      <li>
                        <a href="#">{t('services.pageTitle')}</a>
                      </li>
                      <li>
                        <a href="#">{t('blog.subtitle')}</a>
                      </li>
                      <li>
                        <a href="#">{t('contact.pageTitle')}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50">
                <div
                  className="it-footer-widget footer-cols-3 it-fade-anim"
                  data-fade-from="bottom"
                  data-delay=".7"
                >
                  <h4 className="it-footer-widget-title">{t('footer.ourServices') || 'Services'}</h4>
                  <div className="it-footer-widget-list">
                    <ul>
                      <li>
                        <a href="#">{t('services.generalTrade')}</a>
                      </li>
                      <li>
                        <a href="#">{t('services.comprehensiveMarketing')}</a>
                      </li>
                      <li>
                        <a href="#">{t('services.brandBuilding')}</a>
                      </li>
                      <li>
                        <a href="#">{t('services.marketResearch')}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-50">
                <div
                  className="it-footer-widget footer-cols-4 it-fade-anim"
                  data-fade-from="bottom"
                  data-delay=".9"
                >
                  <h4 className="it-footer-widget-title">{t('footer.subscribe')}</h4>
                  <div className="it-footer-widget-input-box">
                    <input type="text" placeholder={t('footer.subscribeNewsletter')} />
                    <div className="it-footer-widget-button-box">
                      <span>
                        <i className="fas fa-paper-plane"></i>
                      </span>
                    </div>
                  </div>
                  <div className="it-footer-widget-text">
                    <p>
                      {t('footer.footerDescription')}
                    </p>
                  </div>
                  <div className="it-footer-widget-social-2">
                    <a href="#">tw</a>
                    <a href="#">in</a>
                    <a href="#">db</a>
                    <a href="#">ig</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  copyright-area-start  */}
        <div className="it-copyright-area fix it-copyright-space z-index">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-copyright-text d-flex align-items-center justify-content-center justify-content-sm-between">
                  <p>
                    {t('footer.copyright')} <b>{t('footer.allRightsReserved')}</b>
                  </p>
                  <span>{t('footer.tagline')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* copyright-area-end */}
      </div>
    </footer>
  );
};
export default Footer;
