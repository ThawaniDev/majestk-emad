import Image from 'next/image';

import avatarImg from '@/assets/img/avata/avata-2.png';

const DetailsReviewBox = () => {
  return (
    <div className="it-shop-details__review-box mb-50">
      <h4 className="postbox__details-title">Client Reviews</h4>
      <div className="it-shop-details__review pt-10 d-flex align-items-start">
        <div className="it-shop-details__review-thumb">
          <Image src={avatarImg} alt="avatar-img" width={80} height={80} />
        </div>
        <div className="it-shop-details__author-info">
          <span>
            <strong>by David Parker / </strong>March 28, 2022
          </span>
          <div className="it-shop-details__star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p>
            Elementum tempus egestas sed sed risus pretium quam vulputate
            dignissim. Dictum at tempor commodo ullamcorper. Sed risus pretium
            quam vulputate dignissim suspendisse. Habitasse platea dictumst
            quisque{' '}
          </p>
        </div>
      </div>
    </div>
  );
};
export default DetailsReviewBox;
