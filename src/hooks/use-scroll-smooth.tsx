'use client';

import { gsap } from 'gsap';
import { ScrollSmoother } from '@/plugins';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollSmoother);

export default function useScrollSmooth() {
  useGSAP(() => {
    if (typeof window !== 'undefined') {
      const smoothWrapper = document.getElementById('smooth-wrapper');
      const smoothContent = document.getElementById('smooth-content');

      if (smoothWrapper && smoothContent) {
        gsap.config({ nullTargetWarn: false });

        ScrollSmoother.create({
          smooth: 2,
          effects: true,
          smoothTouch: 0.1,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });

        const animatedElements = document.querySelectorAll(
          '[data-lag], [data-stagger], [data-speed]'
        );

        animatedElements.forEach((el) => {
          const stagger = parseFloat(el.getAttribute('data-stagger') || '0.1');
          const lag = parseFloat(el.getAttribute('data-lag') || '0');
          const speedAttr = el.getAttribute('data-speed');
          const speed = speedAttr === 'auto' ? 1 : parseFloat(speedAttr || '1');

          const element = el as HTMLElement; // Type assertion to access .style

          // Ensure images are visible before animation
          if (element.tagName === 'IMG') {
            element.style.opacity = '1';
          }

          // Prevent initial opacity set to 0
          gsap.fromTo(
            el,
            { opacity: 1, y: 50 },
            {
              opacity: 1,
              y: 0,
              stagger,
              duration: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          gsap.to(el, {
            y: speed * 100,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });

          if (lag > 0) {
            setTimeout(() => {
              gsap.to(el, { opacity: 1, duration: 0.5 });
            }, lag * 1000);
          }
        });
      }
    }
  }, []);
}
