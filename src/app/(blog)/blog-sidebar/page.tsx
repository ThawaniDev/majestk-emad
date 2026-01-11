import { Metadata } from 'next';
import BlogSidebarMain from '@/views/blog-sidebar/blog-sidebar';

export const metadata: Metadata = {
  title: 'New Majestic - Blog',
};

const BlogSidebarPage = () => {
  return <BlogSidebarMain />;
};
export default BlogSidebarPage;
