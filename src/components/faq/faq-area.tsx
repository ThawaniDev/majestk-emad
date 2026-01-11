'use client';

import { getFaqDataTwo, getFaqDataThree } from '@/data/faq-data';
import FaqItemOne from './faq-item/faq-item-one';
import { useLanguage } from '@/context/language-context';

const FaqArea = () => {
  const { t } = useLanguage();
  const faqDataTwo = getFaqDataTwo(t);
  const faqDataThree = getFaqDataThree(t);
  return (
    <div className="it-faq-area theme-bg pt-135 pb-50">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 it-fade-anim"
            data-fade-from="left"
            data-delay=".5"
          >
            <div className="it-customs-accordion-2 pb-50">
              <FaqItemOne faqs={faqDataTwo} preExpand="a" />
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 it-fade-anim"
            data-fade-from="right"
            data-delay=".5"
          >
            <div className="it-customs-accordion-2 pb-50">
              <FaqItemOne faqs={faqDataThree} preExpand="a" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FaqArea;
