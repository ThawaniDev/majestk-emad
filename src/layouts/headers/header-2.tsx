'use client';

import Image from 'next/image';
import Link from 'next/link';
import MenuItems from './menu-items';
import MobileOffCanvas from '@/components/offcanvas/mobile-offcanvas';
import SearchPopup from '@/components/search-popup/search-popup';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { useHeaderScroll } from '@/hooks/use-header-scroll';
import { toggleOffCanvas, togglePopUp } from '@/redux/slices/header-slice';
import { HEADER_STICKY_CLASS } from '@/utils/constants';

const HeaderTwo = () => {
  const dispatch = useAppDispatch();
  const { isVisible } = useHeaderScroll(); // Custom hook for showing sticky header

  // Handler for opening Off Canvas
  const handleOffCanvasOpen = () => {
    dispatch(toggleOffCanvas(true));
  };

  // Handler for opening PopUp
  const handlePopupOpen = () => {
    dispatch(togglePopUp(true));
  };
  return (
    <>
      {/* Search Pop Up Area */}
      <SearchPopup />
      {/* Search Pop Up Area */}

      {/* Off-Canvas Area */}
      <MobileOffCanvas />
      {/* Off-Canvas Area */}

      <header>
        <div
          id="header-sticky"
          className={`it-header-area it-header-transparent it-header-plr it-header-sticky z-index-5 ${
            isVisible ? HEADER_STICKY_CLASS : ''
          }`}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                <div className="it-header-logo">
                  <Link href="/">
                    <Image src="/assets/new_images_from_internet/logo.png" alt="New Majestic" width={155} height={155} />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                <div className="it-header-main-menu menu-space">
                  <nav className="it-menu-content">
                    <MenuItems />
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                <div className="it-header-right-wrap d-flex align-items-center justify-content-end">
                  <div className="it-header-right-box d-none d-md-block text-end">
                    <Link href="/cart">
                      <i className="flaticon-shopping-cart"></i>
                    </Link>
                    <button
                      className="search-open-btn"
                      onClick={handlePopupOpen}
                    >
                      <i className="flaticon-loupe"></i>
                    </button>
                  </div>
                  <div className="it-header-bar d-lg-none">
                    <button
                      className="it-menu-bar"
                      onClick={handleOffCanvasOpen}
                    >
                      <i className="fa-solid fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default HeaderTwo;
