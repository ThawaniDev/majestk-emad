'use client';

import { useCallback } from 'react';

const useScrollToSection = () => {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  }, []);

  return { scrollToSection };
};

export default useScrollToSection;
