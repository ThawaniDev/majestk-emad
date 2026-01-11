import useCountAnimation from '@/hooks/use-counter-animation';
import { FunFactIconOne } from '../svg';
import Counter from './counter-item/counter-item';

// Funfact Data
const counterData = [
  {
    id: 1,
    countNum: 820,
    countIcon: <FunFactIconOne />,
    countSuffix: '+',
    countTitle: 'Grandiose Work',
  },
  {
    id: 2,
    countNum: 1450,
    countSuffix: '+',
    countIcon: <FunFactIconOne />,
    countTitle: 'Happy Customers',
  },
  {
    id: 3,
    countNum: 20,
    countIcon: <FunFactIconOne />,
    countSuffix: '+',
    countTitle: 'Years Experience',
  },
  {
    id: 4,
    countNum: 71,
    countIcon: <FunFactIconOne />,
    countSuffix: '+',
    countTitle: 'Awards Won',
  },
];

const FunFactThree = () => {
  // Custom hook for Counter Animation
  useCountAnimation({
    containerClass: '.it-count-anim',
    itemClass: '.count-anim',
  });

  return (
    <div className="it-funfact-4-area theme-bg pb-85 z-index">
      <div className="container">
        <div className="it-funfact-4-ml">
          <div className="row g-0 it-count-anim">
            {counterData.map((item) => (
              <div
                key={item.id}
                className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-30 count-anim"
              >
                <div className="it-funfact-4-item text-center">
                  <div className="it-funfact-4-icon">
                    <span>{item.countIcon}</span>
                  </div>
                  <div className="it-funfact-4-text">
                    <h5 className="it-funfact-4-number">
                      <Counter
                        start={0}
                        end={item.countNum}
                        counterSuffix={item.countSuffix}
                        duration={3}
                      />
                    </h5>
                    <span className="it-funfact-4-title">
                      {item.countTitle}
                    </span>
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
export default FunFactThree;
