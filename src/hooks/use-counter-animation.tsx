'use client';

import { useEffect, useState } from 'react';
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface CounterAnimProps {
  containerClass: string;
  itemClass: string;
}

gsap.registerPlugin(ScrollTrigger);

const useCountAnimation = ({ containerClass, itemClass }: CounterAnimProps) => {
  const [deviceWidth, setDeviceWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  // Handle responsive width changes efficiently
  useEffect(() => {
    const handleResize = () => setDeviceWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(() => {
    if (typeof window === 'undefined') return;

    gsap.set(`${containerClass} ${itemClass}`, { y: -100, opacity: 0 });

    const animate = () => {
      if (deviceWidth < 1023) {
        const counterArray = gsap.utils.toArray(
          `${containerClass} ${itemClass}`
        ) as HTMLElement[];
        counterArray.forEach((item) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: item as HTMLElement,
                start: 'top center+=200',
              },
            })
            .to(item, {
              y: 0,
              opacity: 1,
              ease: 'bounce',
              duration: 1.5,
            });
        });
      } else {
        gsap.to(`${containerClass} ${itemClass}`, {
          scrollTrigger: {
            trigger: document.querySelector(containerClass) as HTMLElement,
            start: 'top center+=300',
          },
          y: 0,
          opacity: 1,
          ease: 'bounce',
          duration: 1.5,
          stagger: { each: 0.3 },
        });
      }
    };

    // Ensure GSAP runs after hydration
    setTimeout(animate, 500);

    return () => {
      ScrollTrigger.getAll().forEach((trigger: ScrollTrigger) =>
        trigger.kill()
      );
    };
  }, [deviceWidth]);
};

export default useCountAnimation;
