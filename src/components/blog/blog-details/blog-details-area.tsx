import Image from 'next/image';
import Sidebar from '../sidebar';
import DetailsCommentBox from './details-commet-box';
import DetailsContact from './details-contact';
import { IBlogDT } from '@/types/blog-d-t';

import detailsImg from '@/assets/img/blog/blog-details-1.jpg';
import detailsImg2 from '@/assets/img/blog/blog-details-2.jpg';
import detailsImg3 from '@/assets/img/blog/blog-details-3.jpg';

interface BlogDetailsProps {
  blog: IBlogDT;
}

const BlogDetailsArea = ({ blog }: BlogDetailsProps) => {
  return (
    <div className="postbox__area pt-120 pb-120 black-bg">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="postbox__details-wrapper">
              <article>
                <div className="postbox__thumb mb-30 w-img">
                  <a href="#">
                    <Image
                      className="image-height-auto"
                      src={blog?.detailsImage || detailsImg}
                      alt="details-img"
                      width={740}
                      height={450}
                    />
                  </a>
                </div>
                <div className="postbox__details-title-box pb-40">
                  <span>
                    {blog?.publishedDate || 'No Date'} _{' '}
                    {blog?.category || 'DEVELOPMENT'} _ BY{' '}
                    {blog?.author || 'Author Not Found'} _{' '}
                    {blog?.commentCount || '2'} Comments
                  </span>
                  <h4 className="postbox__details-title mb-20">
                    {blog?.title.replace(/<br\s*\/?>/gi, ' ') || 'No Title'}
                  </h4>
                  <p>
                    With worldwide annual spend on digital advertising
                    surpassing $325 billion, it’s no surprise that different
                    approaches to online marketing are becoming available. One
                    of these new approaches is performance marketing or digital
                    performance marketing. Keep reading to learn all about
                    performance marketing, from how it works to how it compares
                    to digital marketing. Plus, get insight into the benefits
                    and risks of performance marketing and how it can affect
                    your company’s long-term success and profitability.
                    Performance marketing is an approach to digital marketing or
                    advertising where businesses only pay when a specific result
                    occurs. This result could be a new lead, sale, or other
                    outcome agreed upon by the advertiser and business.
                    Performance marketing involves channels such as affiliate
                    marketing, online advertising.
                  </p>
                </div>
                <div className="postbox__content pb-20">
                  <div className="postbox__content-img mb-60 d-flex justify-content-between">
                    <Image
                      className="mr-30 image-height-auto"
                      src={detailsImg2}
                      alt="details-img"
                      width={355}
                      height={240}
                    />
                    <Image
                      className="image-height-auto"
                      src={detailsImg3}
                      alt="details-img"
                      width={355}
                      height={240}
                    />
                  </div>
                  <div className="postbox__text">
                    <h4 className="postbox__details-title">
                      Latest Articles Updated Daily
                    </h4>
                    <p>
                      With worldwide annual spend on digital advertising
                      surpassing $325 billion, it’s no surprise that different
                      approaches to online marketing are becoming available. One
                      of these new approaches is performance marketing or
                      digital performance marketing. Keep reading to learn all
                      about performance marketing
                    </p>
                  </div>
                </div>
                <div className="postbox__item text-center">
                  <i className="fas fa-quote-right"></i>
                  <p>
                    Diam luctus nostra dapibus varius et semper semper rutrum ad
                    risus felis eros. Cursus libero viverra tempus netus diam
                    vestibulum
                  </p>
                  <span>David Backhum</span>
                </div>
                <div className="postbox__details-share-wrapper">
                  <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-8 col-md-8">
                      <div className="postbox__details-tag">
                        <span>Posted in:</span>
                        <a href="#">Development</a>
                        <a href="#">Digital</a>
                        <a href="#">Tech</a>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                      <div className="postbox__details-share text-lg-end">
                        <span>Share:</span>
                        <a href="#">
                          <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comment Box Area */}
                <DetailsCommentBox />

                {/* Contact Area */}
                <DetailsContact />
              </article>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogDetailsArea;
