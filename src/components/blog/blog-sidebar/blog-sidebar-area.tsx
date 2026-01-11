'use client';

import BlogItemFive from '../blog-item/blog-item-five';
import Sidebar from '../sidebar';
import { getBlogDataFive } from '@/data/blog-data';
import { useLanguage } from '@/context/language-context';

const BlogSidebarArea = () => {
  const { t } = useLanguage();
  const blogDataFive = getBlogDataFive(t);
  return (
    <div className="postbox__area pt-120 pb-120 black-bg">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 mb-40">
            <div className="postbox__details-wrapper">
              {blogDataFive.map((blog, i) => (
                <BlogItemFive key={blog.id} blog={blog} index={i} />
              ))}
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 mb-40">
            <Sidebar />
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="it-pagination">
              <nav>
                <ul>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a className="color" href="#">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogSidebarArea;
