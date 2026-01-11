'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { usePathname } from 'next/navigation';
import { toggleOffCanvas } from '@/redux/slices/header-slice';
import { selectIsOffCanvasOpen } from '@/redux/selectors/header-selector';
import MobileMenus from './mobile-menus';
import LanguageSwitcher from '@/components/language-switcher/language-switcher';
import { useLanguage } from '@/context/language-context';

const MobileOffCanvas = () => {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const { t } = useLanguage();

  const isOffCanvasOpen = useAppSelector(selectIsOffCanvasOpen); // Selector for getting the state of the Off-canvas

  // State to disable animation on route change
  const [disableTransition, setDisableTransition] = useState(false);

  // Closing OffCanvas on Route change
  useEffect(() => {
    setDisableTransition(true); // Disable transition
    dispatch(toggleOffCanvas(false));

    const timeout = setTimeout(() => {
      setDisableTransition(false); // Re-enable transition after state updates
    }, 10);

    return () => clearTimeout(timeout);
  }, [pathname, dispatch]);

  // Handler for Closing the off-canvas menu
  const handleClose = () => {
    dispatch(toggleOffCanvas(false));
  };
  return (
    <>
      <div className="it-offcanvas-area">
        <div
          className={`itoffcanvas ${isOffCanvasOpen ? 'opened' : ''} ${
            disableTransition ? 'no-transition' : ''
          }`}
        >
          <div className="it-offcanva-bottom-shape d-none d-xxl-block"></div>
          <div className="itoffcanvas__close-btn">
            <button className="close-btn" onClick={handleClose}>
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="itoffcanvas__logo">
            <Link href="/">
              <Image src="/assets/new_images_from_internet/logo.png" alt="New Majestic" width={155} height={155} />
            </Link>
          </div>
          <div className="itoffcanvas__text">
            <p>
              {t('contact.description')}
            </p>
          </div>
          <div className="it-menu-mobile">
            <MobileMenus />
          </div>
          <div className="itoffcanvas__lang mb-20">
            <LanguageSwitcher />
          </div>
          <div className="itoffcanvas__info">
            <h3 className="offcanva-title">{t('contact.getInTouch')}</h3>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-envelope"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>{t('contact.email')}</span>
                <a href="mailto:info@newmajestic.com">info@newmajestic.com</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fal fa-phone-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>{t('contact.phone')}</span>
                <a href="tel:+20123456789">+20 123 456 789</a>
              </div>
            </div>
            <div className="it-info-wrapper mb-20 d-flex align-items-center">
              <div className="itoffcanvas__info-icon">
                <a href="#">
                  <i className="fas fa-map-marker-alt"></i>
                </a>
              </div>
              <div className="itoffcanvas__info-address">
                <span>{t('contact.address')}</span>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                >
                  {t('contact.addressValue')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOffCanvasOpen ? (
        <div className="body-overlay apply" onClick={handleClose}></div>
      ) : (
        <div className="body-overlay"></div>
      )}
    </>
  );
};
export default MobileOffCanvas;
