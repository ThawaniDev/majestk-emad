import Image from 'next/image';
import Link from 'next/link';
import { IBlogDT } from '@/types/blog-d-t';

import blogImg from '@/assets/img/blog/blog-1-1.jpg';

interface BlogItemProps {
  blog: IBlogDT;
}

const BlogItemOne = ({ blog }: BlogItemProps) => {
  return (
    <div className="it-blog-item">
      <div className="it-blog-meta">
        <span>{blog.publishedDate}</span>
      </div>
      <div className="it-blog-content">
        <h5 className="it-blog-title">
          <Link
            href={`blog-details/${blog.id}`}
            dangerouslySetInnerHTML={{ __html: blog.title }}
          ></Link>
        </h5>
        <p>{blog.description}</p>
      </div>
      <div className="it-blog-thumb">
        <Link href={`blog-details/${blog.id}`}>
          <Image
            className="image-height-auto"
            src={blog.image || blogImg}
            alt="blog-img"
            width={230}
            height={213}
          />
        </Link>
      </div>
    </div>
  );
};
export default BlogItemOne;
