'use client';

import BlogItemTwo from './blog-item/blog-item-two';
import { getBlogDataTwo } from '@/data/blog-data';
import { useLanguage } from '@/context/language-context';

const BlogArea = () => {
  const { t } = useLanguage();
  const blogDataTwo = getBlogDataTwo(t);
  return (
    <div className="it-blog-2-area theme-bg pt-120 pb-90">
      <div className="container">
        <div className="row">
          {blogDataTwo.map((blog, i) => (
            <div
              key={blog.id}
              className="col-xl-4 col-lg-4 col-md-6 mb-30 it-fade-anim"
              data-fade-from="bottom"
              data-delay={0.3 + 0.2 * i}
            >
              <BlogItemTwo blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BlogArea;
