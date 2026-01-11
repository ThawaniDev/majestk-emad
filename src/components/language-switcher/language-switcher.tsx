'use client';

import { useLanguage } from '@/context/language-context';

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLanguage();

  const switchLocale = () => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  };

  return (
    <div className="language-switcher">
      <button
        onClick={switchLocale}
        className="it-btn-main"
        style={{
          padding: '8px 16px',
          fontSize: '14px',
          minWidth: 'auto',
          background: 'transparent',
          border: '1px solid currentColor',
        }}
      >
        {locale === 'en' ? 'العربية' : 'English'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
