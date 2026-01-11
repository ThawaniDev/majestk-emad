import Link from 'next/link';
import { Line } from '../svg';
import { useLanguage } from '@/context/language-context';

const CtaOne = () => {
  const { t, dir } = useLanguage();
  const splitDirection = dir === 'rtl' ? 'it-split-in-left' : 'it-split-in-right';

  return (
    <div className="it-cta-area theme-bg pt-120 pb-90 fix">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-6 col-md-8 col-sm-7 mb-30 it-fade-anim"
            data-fade-from={dir === 'rtl' ? "right" : "left"}
            data-delay=".3"
          >
            <div className="it-cta-section-box">
              <h4 className={`it-section-title-1 pb-0 it-split-text ${splitDirection}`}>
                {t('home.ctaTitle')} <br />
                <span className="p-relative z-index">
                  {t('home.ctaTitleHighlight')}
                  <span className="it-shape-1">
                    <Line />
                  </span>
                </span>
              </h4>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-4 col-sm-5 mb-30">
            <div className="it-cta-button text-start text-sm-end">
              <div
                className="it-fade-anim"
                data-fade-from={dir === 'rtl' ? "left" : "right"}
                data-ease="bounce"
                data-delay=".5"
              >
                <Link className="it-btn-main" href="/contact">
                  <span>{t('contact.getInTouch')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CtaOne;
