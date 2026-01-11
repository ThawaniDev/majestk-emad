'use client';

import { useState } from 'react';
import Image from 'next/image';
import useCountAnimation from '@/hooks/use-counter-animation';
import Counter from './counter-item/counter-item';
import { useLanguage } from '@/context/language-context';

import shapeImg1 from '@/assets/img/about/shape-2-1.png';
import shapeImg2 from '@/assets/img/about/shape-2-2.png';

// Props Type
interface FunFactProps {
  itemClass?: string;
  hasShape?: boolean;
}

const FunFactOne = ({ itemClass, hasShape }: FunFactProps) => {
  const { t } = useLanguage();
  const [hoveredId, setHoveredId] = useState<number>(2); // State to track hovered item ID
  
  // Custom hook for Counter Animation
  useCountAnimation({
    containerClass: '.it-count-anim',
    itemClass: '.count-anim',
  });

  const counterData = [
    {
      id: 1,
      countNum: 10,
      countTitle: t('about.yearsExperience'),
    },
    {
      id: 2,
      countNum: 28,
      countTitle: t('home.awardsWon'),
    },
    {
      id: 3,
      countNum: 36,
      countTitle: t('home.visitedConference'),
    },
    {
      id: 4,
      countNum: 97,
      countTitle: t('home.projectsWorldwide'),
    },
  ];

  return (
    <div
      id="funfact-item"
      className={itemClass || 'it-funtact-area it-funtact-space black-bg'}
    >
      {hasShape && (
        <div>
          <div className="it-funtact-shape-1 d-none d-xxl-block">
            <Image src={shapeImg1} alt="shape-img" width={75} height={70} />
          </div>
          <div className="it-funtact-shape-2 d-none d-xxl-block">
            <Image src={shapeImg2} alt="shape-img" width={104} height={109} />
          </div>
        </div>
      )}
      <div className="container">
        <div className="it-funtact-wrap it-count-anim">
          <div className="row g-0 row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
            {counterData.map((item) => (
              <div
                key={item.id}
                className={`col col-funfact-border count-anim`}
                onMouseEnter={() => setHoveredId(item.id)}
              >
                <div
                  className={`it-funtact-item text-center ${
                    hoveredId === item.id ? 'active' : ''
                  }`}
                >
                  <h3 className="it-funtact-mumber">
                    <Counter start={0} end={item.countNum} duration={3} />
                  </h3>
                  <span className="it-funfact-text">{item.countTitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFactOne;
