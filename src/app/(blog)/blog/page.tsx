import { Metadata } from 'next';
import BlogMain from '@/views/blog/blog';

export const metadata: Metadata = {
  title: 'New Majestic - Blog',
};

const BlogPage = () => {
  return <BlogMain />;
};
export default BlogPage;
