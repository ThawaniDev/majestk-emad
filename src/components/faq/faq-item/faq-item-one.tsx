'use client';

import { useState, useEffect } from 'react';
import { IFaqDT } from '@/types/faq-d-t';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Props Type
interface FaqItemProps {
  faqs: IFaqDT[];
  preExpand: string;
}

const FaqItemOne = ({ faqs, preExpand }: FaqItemProps) => {
  const [expandedUuids, setExpandedUuids] = useState<string[]>([preExpand]);

  // Update expanded state if preExpand prop changes
  useEffect(() => {
    setExpandedUuids([preExpand]);
  }, [preExpand]);

  return (
    <Accordion
      className="accordion"
      allowZeroExpanded
      preExpanded={expandedUuids}
      onChange={(ids) => setExpandedUuids(ids as string[])}
    >
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.uuid}
          className={`accordion-items ${
            expandedUuids.includes(faq.uuid) ? 'active' : ''
          }`}
          uuid={faq.uuid}
        >
          <AccordionItemHeading className="accordion-header" id="headingOne">
            <AccordionItemButton className="accordion-buttons">
              {faq.title}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="accordion-body d-flex align-items-center">
              <p className="mb-0">{faq.description}</p>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqItemOne;
