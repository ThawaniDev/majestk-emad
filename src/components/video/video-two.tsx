'use client';

import Link from 'next/link';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { openModal } from '@/redux/slices/modal-slice';
import ModalVideoWrapper from '../modal-video/modal-video';

const VideoTwo = () => {
  const dispatch = useAppDispatch();

  // Handler for opening modal video
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(openModal('YoOG5H4603Y'));
  };
  return (
    <div className="it-video-4-area">
      <div
        className="it-video-4-bg fix p-relative"
        style={{ backgroundImage: `url('/assets/img/video/bg-4-1.jpg')` }}
      >
        {/* Modal Video Wrapper */}
        <ModalVideoWrapper />
        {/* Modal Video Wrapper */}

        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-video-4-content z-index-5 d-flex align-items-center justify-content-between">
                <h4 className="it-video-4-title it-split-text it-split-in-right">
                  We make innovative solutions <br />
                  to solve problems. We feel <br />
                  your needs and work in a <br />
                  special way.
                </h4>
                <div className="it-video-4-icon">
                  <Link
                    className="popup-video"
                    href="#"
                    onClick={handleLinkClick}
                  >
                    <i className="fa-sharp fa-light fa-play"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoTwo;
