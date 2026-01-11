'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getBlogDataOne } from '@/data/blog-data';
import BlogItemOne from './blog-item/blog-item-one';
import { useLanguage } from '@/context/language-context';

import shapeImg from '@/assets/img/blog/shape-1.png';

const BlogOne = () => {
  const { t, locale } = useLanguage();
  const isRTL = locale === 'ar';
  const blogDataOne = getBlogDataOne(t);

  return (
    <div className="it-blog-area fix p-relative theme-bg pt-120 pb-70" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="it-blog-shape">
        <Image
          className="image-height-auto"
          src={shapeImg}
          alt="shape-img"
          width={1920}
          height={844}
        />
      </div>
      <div className="container">
        <div className={`row ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div
            className="col-xl-6 col-lg-6 it-fade-anim"
            data-fade-from={isRTL ? 'right' : 'left'}
            data-delay=".5"
          >
            <div className="it-blog-section-title-box">
              <div className="it-blog-section-title it-text-anim">
                <h4 className={`it-section-title-1 pb-35 it-split-text ${isRTL ? 'it-split-in-left' : 'it-split-in-right'}`}>
                  {t('blog.sectionTitle')}
                </h4>
                <p>
                  {t('blog.description')}
                </p>
                <div
                  className="it-fade-anim"
                  data-fade-from="top"
                  data-ease="bounce"
                  data-delay=".5"
                >
                  <Link className="it-btn-main" href="/blog">
                    <span>{t('blog.viewAllPost')}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="it-blog-item-box">
              <ul>
                {blogDataOne.map((blog, i) => (
                  <li
                    key={blog.id}
                    className="it-fade-anim"
                    data-fade-from="bottom"
                    data-delay={0.3 + 0.2 * i}
                  >
                    <BlogItemOne blog={blog} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogOne;
