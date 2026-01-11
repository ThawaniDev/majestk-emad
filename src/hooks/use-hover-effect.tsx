'use client';

import { useEffect, useRef } from 'react';

const useHoverEffect = <T extends HTMLElement>(minWidth = 768) => {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const panels = Array.from(containerRef.current.children) as HTMLElement[];

    function handleMouseEnter(this: HTMLElement) {
      removeActiveClasses();
      this.classList.add('active');
    }

    function removeActiveClasses() {
      panels.forEach((panel) => panel.classList.remove('active'));
    }

    function mediaSize() {
      if (window.matchMedia(`(min-width: ${minWidth}px)`).matches) {
        panels.forEach((panel) => {
          panel.addEventListener('mouseenter', handleMouseEnter);
        });

        // Set the second item as active by default
        if (panels.length > 1) {
          removeActiveClasses();
          panels[1].classList.add('active');
        }
      } else {
        panels.forEach((panel) => panel.classList.add('active'));
      }
    }

    mediaSize();
    window.addEventListener('resize', mediaSize);

    return () => {
      panels.forEach((panel) =>
        panel.removeEventListener('mouseenter', handleMouseEnter)
      );
      window.removeEventListener('resize', mediaSize);
    };
  }, [minWidth]);

  return containerRef;
};

export default useHoverEffect;
