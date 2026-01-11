import Link from 'next/link';
import Image from 'next/image';
import { IBlogDT } from '@/types/blog-d-t';

import blogImg from '@/assets/img/blog/blog-2-1.jpg';

interface BlogItemProps {
  blog: IBlogDT;
}

const BlogItemTwo = ({ blog }: BlogItemProps) => {
  return (
    <div className="it-blog-2-item">
      <div className="it-blog-2-thumb-box">
        <Image
          className="w-100 image-height-auto"
          src={blog.image || blogImg}
          alt="blog-img"
          width={370}
          height={280}
        />
      </div>
      <div className="it-blog-2-content">
        <h4 className="it-blog-2-title">
          <Link href={`/blog-details/${blog.id}`}>{blog.title}</Link>
        </h4>
        <p>{blog.description}</p>
        <div className="it-blog-2-content-link">
          <Link href={`/blog-details/${blog.id}`}>
            {blog.btnText}
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BlogItemTwo;
