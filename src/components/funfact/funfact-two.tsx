'use client';

import { useState } from 'react';
import useCountAnimation from '@/hooks/use-counter-animation';
import Counter from './counter-item/counter-item';

// Funfact Data
const counterData = [
  {
    id: 1,
    countNum: 820,
    countSuffix: '+',
    countTitle: 'Grandiose <br />Work',
  },
  {
    id: 2,
    countNum: 1450,
    countSuffix: '+',
    countTitle: 'HAPPY <br />CUSTOMERS',
  },
  {
    id: 3,
    countNum: 20,
    countSuffix: '+',
    countTitle: 'Years <br />EXPERIENCE',
  },
  {
    id: 4,
    countNum: 82,
    countSuffix: '+',
    countTitle: 'DESIGN <br />AWARDS',
  },
];

const FunfactTwo = () => {
  const [hoveredId, setHoveredId] = useState<number>(3); // State to track hovered item ID

  // Custom hook for Counter Animation
  useCountAnimation({
    containerClass: '.it-count-anim',
    itemClass: '.count-anim',
  });

  return (
    <div className="it-funfact-3-area black-bg pt-130 pb-120">
      <div className="container">
        <div className="it-funfact-3-border">
          <div className="row gx-0 it-count-anim">
            {counterData.map((item) => (
              <div
                key={item.id}
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 count-anim"
                onMouseEnter={() => setHoveredId(item.id)}
              >
                <div
                  className={`it-funfact-3-item-box ${
                    hoveredId === item.id ? 'active' : ''
                  }`}
                >
                  <div className="it-funfact-3-item">
                    <div className="it-funfact-3-number-sm">
                      <span>{String(item.id).padStart(2, '0')}</span>
                    </div>
                    <div className="it-funfact-3-text">
                      <span
                        dangerouslySetInnerHTML={{ __html: item.countTitle }}
                      ></span>
                    </div>
                    <h4 className="it-funfact-3-number">
                      <Counter
                        start={0}
                        end={item.countNum}
                        counterSuffix={item.countSuffix}
                        duration={3}
                      />
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FunfactTwo;
