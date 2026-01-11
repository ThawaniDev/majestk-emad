'use client';

import BlogItemTwo from './blog-item/blog-item-two';
import { getBlogDataTwo } from '@/data/blog-data';
import { useLanguage } from '@/context/language-context';

const BlogTwo = () => {
  const { t } = useLanguage();
  const blogDataTwo = getBlogDataTwo(t);
  return (
    <div className="it-blog-2-area theme-bg pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-service-2-section-box text-center mb-50">
              <h5 className="it-section-subtitle-1 pb-25 it-split-text it-split-in-down">
                OUR BLOG AND NEWS
              </h5>
              <h4 className="it-section-title-1 it-split-text it-split-in-down">
                Check Our Recent Articles
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {blogDataTwo
            .map((blog, i) => (
              <div
                key={blog.id}
                className="col-xl-4 col-lg-4 col-md-6 mb-30 it-fade-anim"
                data-fade-from="bottom"
                data-delay={0.3 + 0.2 * i}
              >
                <BlogItemTwo blog={blog} />
              </div>
            ))
            .slice(0, 3)}
        </div>
      </div>
    </div>
  );
};
export default BlogTwo;
