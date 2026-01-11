'use client';

import BlogItemFour from './blog-item/blog-item-four';
import { getBlogDataFour } from '@/data/blog-data';
import { useLanguage } from '@/context/language-context';

const BlogFour = () => {
  const { t } = useLanguage();
  const blogDataFour = getBlogDataFour(t);
  return (
    <div className="it-blog-4-area fix theme-bg pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-blog-4-section-box text-center mb-60">
              <h6 className="it-section-subtitle-1 it-split-text it-split-in-right">
                OUR BLOG AND NEWS
              </h6>
              <h4 className="it-section-title-1 it-split-text it-split-in-right">
                Check Our Recent Articles
              </h4>
            </div>
          </div>
          {blogDataFour.map((blog, i) => (
            <div
              key={blog.id}
              className="col-xl-4 col-lg-4 col-md-6 mb-30 it-fade-anim"
              data-fade-from="bottom"
              data-delay={0.3 + 0.2 * i}
            >
              <BlogItemFour blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BlogFour;
