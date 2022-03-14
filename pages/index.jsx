import Link from 'next/link'
import LayoutWrapper from '../components/LayoutWrapper'
import BlogPost from '../components/BlogPost'
import BlogPostCard from '../components/BlogPostCard'
import Bio from '../components/Bio'
import { allBlogs } from 'contentlayer/generated';
import { pick } from '../lib/utils';

export function getStaticProps() {
  const posts = allBlogs
    .map((post) => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .slice(0, 3);

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <LayoutWrapper>
      <div className="flex flex-col justify-center min-h-full items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <Bio />
        <div className="flex gap-6 flex-col md:flex-row my-4">
          <BlogPostCard
            title="Amazon Web Services"
            description="Notes and materials regarding AWS"
            slug="/aws"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
          <BlogPostCard
            title="Rust Language"
            description="Notes and resources on Rust"
            slug="/rust"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
        </div>
        <h3 className="mt-2 mb-0 text-2xl font-bold tracking-tight text-black md:text-3xl dark:text-white">
          Recent Posts
        </h3>
        <p className='mt-0 mb-8'>
          I write about everything from tech to politics. Here's a few recent ones...
        </p>
        {
          posts.map((post) => (
            <BlogPost key={post.title} {...post} />
          ))
        }
        <Link href="/blog">
          <a href='/blog' aria-label='view blog button' className="transform hover:scale-[1.01] transition-all bg-transparent hover:text-gray-900 text-gray-700 font-semibold py-2 px-4 border border-gray-700 hover:border-gray-900 rounded inline-flex items-center">
            View articles &rarr;
          </a>
        </Link>
      </div>
    </LayoutWrapper>
  )
}
