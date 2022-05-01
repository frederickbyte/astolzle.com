import Link from 'next/link'
import LayoutWrapper from '../components/LayoutWrapper'
import BlogPostCard from '../components/BlogPostCard'
import { parseISO, format } from 'date-fns';
import Bio from '../components/Bio'
import { getAllPosts } from "../lib/mdx";

export default function Home({ posts }) {
  return (
    <LayoutWrapper>
      <div className="flex flex-col justify-center min-h-full items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <Bio />
        <div className="flex gap-6 flex-col md:flex-row my-8">
          <BlogPostCard
            title="Amazon Web Services"
            description="Notes and materials regarding AWS"
            slug="/aws"
            gradient='text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900'
          />
          <BlogPostCard
            title="Rust Language"
            description="Notes and resources on Rust"
            slug="/rust"
            gradient='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'
          />
        </div>
        <h3 className="mt-2 mb-0 text-2xl font-semibold tracking-tight text-black md:text-3xl dark:text-white">
          Recent Posts
        </h3>
        <p className='mt-0 mb-8'>
          I write about everything from tech to politics. Here are a few recent ones...
        </p>
        {
          posts.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`}>
              <a className="w-full transform hover:scale-[1.01] transition-all mb-2">
                <div className="w-full mb-6">
                  <div className="flex flex-col justify-between md:flex-row">
                    <h4 className="mb-1 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100 hover:underline hover:underline-offset-4">
                      {post.frontmatter.title}
                    </h4>
                    <div>{format(parseISO(post.frontmatter.publishedAt), 'MMM dd, yyyy')}</div>
                  </div>
                  <p className="mt-0 text-gray-600 dark:text-gray-400">{post.frontmatter.summary}</p>
                </div>
              </a>
            </Link>
          ))
        }
        <Link href="/blog">
          <a href='/blog' aria-label='view blog button' className="blocky inline-flex items-center">
            View articles &rarr;
          </a>
        </Link>
      </div>
    </LayoutWrapper>
  )
}

export const getStaticProps = async () => {
  const posts = getAllPosts().sort((a, b) => new Date(b.frontmatter.publishedAt) - new Date(a.frontmatter.publishedAt)).slice(0, 4);
  return {
    props: { posts },
  };
};
