import Image from 'next/image';

import avatarImg from '@/assets/img/avata/avata-3.png';

const DetailsCommentBox = () => {
  return (
    <div className="postbox__comment">
      <h3 className="postbox__comment-title">01 Comments</h3>
      <ul>
        <li>
          <div className="postbox__comment-box d-flex align-items-center">
            <div className="postbox__comment-info ">
              <div className="postbox__comment-avater mr-20">
                <Image
                  className="image-height-auto"
                  src={avatarImg}
                  alt="avatar-img"
                  width={154}
                  height={154}
                />
              </div>
            </div>
            <div className="postbox__comment-text">
              <div className="postbox__comment-reply d-flex align-items-center justify-content-between">
                <span className="post-meta">September 6, 2022 at 1:28 pm </span>
                <a href="#">Reply</a>
              </div>
              <div className="postbox__comment-name">
                <h5>Jonathon Lopez</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipi vestibulum lectus
                egestas cubilia nam sagittis, nulla posuere habitant
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default DetailsCommentBox;
