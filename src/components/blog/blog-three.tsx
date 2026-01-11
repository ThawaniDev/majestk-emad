'use client';

import Link from 'next/link';
import { getBlogDataThree } from '@/data/blog-data';
import BlogItemThree from './blog-item/blog-item-three';
import { useLanguage } from '@/context/language-context';

const BlogThree = () => {
  const { t, locale } = useLanguage();
  const isRTL = locale === 'ar';
  const blogDataThree = getBlogDataThree(t);
  return (
    <div className="it-blog-3-area black-bg pt-120 pb-75" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container">
        <div className={`row ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div
            className="col-xl-8 col-lg-8 it-fade-anim"
            data-fade-from={isRTL ? 'right' : 'left'}
            data-delay="0.5"
          >
            <div className="row">
              {blogDataThree.map((blog) => (
                <div key={blog.id} className="col-xl-6 col-lg-6 col-md-6 mb-30">
                  <BlogItemThree blog={blog} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="it-blog-3-section-title it-text-anim">
              <h5 className={`it-section-subtitle-1 pb-25 it-split-text ${isRTL ? 'it-split-in-up' : 'it-split-in-down'}`}>
                NEWS & ARTICLES
              </h5>
              <h4 className={`it-section-title-1 pb-15 it-split-text ${isRTL ? 'it-split-in-up' : 'it-split-in-down'}`}>
                Blog & News
              </h4>
              <p className="mb-40">
                Filium morte multavit si sine metu cont neret, saluti prospexit
                civium, qua ntellegebat contineri. Quae fue
              </p>
              <div
                className="it-fade-anim"
                data-fade-from="top"
                data-ease="bounce"
                data-delay=".5"
              >
                <Link className="it-btn-main" href="/blog">
                  <span>VIEW ALL POST</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogThree;
