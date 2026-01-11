'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { openModal } from '@/redux/slices/modal-slice';
import ModalVideoWrapper from '../modal-video/modal-video';
import VideoText from '../svg/video-text';

import shapeImg from '@/assets/img/video/shape-2-1.png';

const VideoOne = () => {
  const dispatch = useAppDispatch();

  // Handler for opening modal video
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(openModal('YoOG5H4603Y'));
  };

  return (
    <div className="it-video-2-area">
      {/* Modal Video Wrapper */}
      <ModalVideoWrapper />
      {/* Modal Video Wrapper */}

      <div
        className="it-video-2-bg p-relative"
        style={{ backgroundImage: `url('/assets/img/video/bg-1-1.jpg')` }}
      >
        <div className="it-video-2-shape d-none d-lg-block">
          <Image src={shapeImg} alt="shape-img" width={112} height={112} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-video-2-content z-index">
                <div className="it-video-2-icon">
                  <Link
                    className="popup-video"
                    href="#"
                    onClick={handleLinkClick}
                  >
                    <i className="fas fa-play"></i>
                  </Link>
                </div>
                <div className="it-video-2-text d-none d-lg-block">
                  <span>
                    <VideoText />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoOne;
