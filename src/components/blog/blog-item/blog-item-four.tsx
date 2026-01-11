import Image from 'next/image';
import Link from 'next/link';
import { IBlogDT } from '@/types/blog-d-t';

import blogImg from '@/assets/img/blog/blog-4-1.jpg';

interface BlogItemProps {
  blog: IBlogDT;
}

const BlogItemFour = ({ blog }: BlogItemProps) => {
  return (
    <div className="it-blog-4-item fix p-relative">
      <Link href={`/blog-details/${blog.id}`}>
        <div className="it-blog-4-thumb fix">
          <Image
            className="image-height-auto"
            src={blog.image || blogImg}
            alt="blog-img"
            width={370}
            height={480}
          />
        </div>
      </Link>
      <div className="it-blog-4-content">
        <div className="it-blog-4-meta">
          <span>{blog.category}</span>
          <span>{blog.publishedDate}</span>
        </div>
        <h4 className="it-blog-4-title">
          <Link
            href={`/blog-details/${blog.id}`}
            dangerouslySetInnerHTML={{ __html: blog.title }}
          ></Link>
        </h4>
        <Link href={`/blog-details/${blog.id}`}>{blog.btnText}</Link>
      </div>
    </div>
  );
};
export default BlogItemFour;
