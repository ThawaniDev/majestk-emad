'use client';

import FaqItemOne from '@/components/faq/faq-item/faq-item-one';
import { getFaqDataTwo } from '@/data/faq-data';
import { useLanguage } from '@/context/language-context';

const DetailsFaq = () => {
  const { t } = useLanguage();
  const faqDataTwo = getFaqDataTwo(t);
  return (
    <div className="it-faq__wrapper-box">
      <div className="it-customs-accordion-2">
        <FaqItemOne faqs={faqDataTwo} preExpand="a" />
      </div>
    </div>
  );
};
export default DetailsFaq;
