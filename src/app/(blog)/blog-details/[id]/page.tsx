import { Metadata } from 'next';
import { blogData } from '@/data/blog-data';
import BlogDetailsMain from '@/views/blog-details/blog-details';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const blog = blogData.find((blog) => String(blog.id) === params.id);
  return {
    title: blog
      ? `New Majestic - ${blog.title.replace(/<br\s*\/?>/gi, ' ')}`
      : 'New Majestic - Blog Not Found',
  };
}

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    id: String(blog.id),
  }));
}

export default function BlogDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const blog = blogData.find((blog) => String(blog.id) === params.id);
  return blog ? (
    <BlogDetailsMain blog={blog} />
  ) : (
    <div className="text-center pt-100">
      Blog not found with id: {params.id}
    </div>
  );
}
