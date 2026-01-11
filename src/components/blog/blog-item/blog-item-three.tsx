import Link from 'next/link';
import Image from 'next/image';
import { IBlogDT } from '@/types/blog-d-t';

import blogImg from '@/assets/img/blog/blog-3-1.jpg';

interface BlogItemProps {
  blog: IBlogDT;
}

const BlogItemThree = ({ blog }: BlogItemProps) => {
  return (
    <div className="it-blog-3-item">
      <div className="it-blog-3-thumb p-relative">
        <Image
          className="image-height-auto"
          src={blog.image || blogImg}
          alt="blog-img"
          width={370}
          height={268}
        />
        <div className="it-blog-3-thumb-text">
          <Link href={`/blog-details/${blog.id}`}>{blog.btnText}</Link>
        </div>
      </div>
      <div className="it-blog-3-content">
        <span className="it-blog-3-meta">
          {blog.publishedDate}_{blog.category}
        </span>
        <h4 className="it-blog-3-title">
          <Link href={`/blog-details/${blog.id}`}>{blog.title}</Link>
        </h4>
      </div>
    </div>
  );
};
export default BlogItemThree;
