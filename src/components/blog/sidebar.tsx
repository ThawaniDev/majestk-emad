'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getBlogDataOne, getBlogDataTwo, getBlogDataThree, getBlogDataFour, getBlogDataFive } from '@/data/blog-data';
import { IBlogDT } from '@/types/blog-d-t';
import { useLanguage } from '@/context/language-context';

import blogImg from '@/assets/img/blog/blog-sidebar-sm-1.jpg';

const categoryData = [
  'Cloud Service',
  'Web Development',
  'Ui/Ux Designing',
  'IT Management',
  'Data Visualization',
  'Security System',
];

const Sidebar = () => {
  const { t } = useLanguage();
  const blogData = [
    ...getBlogDataOne(t),
    ...getBlogDataTwo(t),
    ...getBlogDataThree(t),
    ...getBlogDataFour(t),
    ...getBlogDataFive(t),
  ];
  // Function to convert the date string to a Date object for comparison
  const sortByPublishedDate = (blog1: IBlogDT, blog2: IBlogDT): number => {
    const dateA = blog1.publishedDate
      ? new Date(blog1.publishedDate)
      : new Date(0);
    const dateB = blog2.publishedDate
      ? new Date(blog2.publishedDate)
      : new Date(0);
    return dateB.getTime() - dateA.getTime();
  };

  // Sort the blogs
  const recentBlogs = blogData.sort(sortByPublishedDate).slice(0, 3);

  return (
    <div className="sidebar__wrapper-box">
      <div className="sidebar__widge-title-box">
        <h3 className="sidebar__widget-title">Search</h3>
      </div>
      <div className="sidebar__serch mb-60">
        <div className="sidebar__search">
          <form action="#">
            <div className="sidebar__search">
              <input type="text" placeholder="Keywords here...." />
              <button type="submit">
                <i className="fal fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="sidebar__widget mb-40">
        <div className="sidebar__widge-title-box">
          <h3 className="sidebar__widget-title">Recent Post</h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="sidebar__post">
            {recentBlogs.map((blog) => (
              <div key={blog.id} className="rc__post mb-20 d-flex">
                <div className="rc__post-thumb mr-20">
                  <Link href={`/blog-details/${blog.id}`}>
                    <Image
                      src={blog.image || blogImg}
                      alt="blog-img"
                      width={90}
                      height={90}
                    />
                  </Link>
                </div>
                <div className="rc__post-content">
                  <h3 className="rc__post-title">
                    <Link href={`/blog-details/${blog.id}`}>
                      {blog.title.replace(/<br\s*\/?>/gi, ' ')}
                    </Link>
                  </h3>
                  <div className="rc__meta">
                    <span>{blog.publishedDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-40">
        <div className="sidebar__widge-title-box">
          <h3 className="sidebar__widget-title">Categories</h3>
        </div>
        <div className="sidebar__widget-content">
          <ul>
            {categoryData.map((item, i) => (
              <li key={i}>
                <a href="/blog">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sidebar__widget mb-40">
        <div className="sidebar__widge-title-box">
          <h3 className="sidebar__widget-title sm-border">Tag</h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="tagcloud">
            <a href="#">IT Technology</a>
            <a href="#">Software</a>
            <a href="#">Design</a>
            <a href="#">Service</a>
            <a href="#">Development</a>
            <a href="#">Digital</a>
            <a href="#">Cyber</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
