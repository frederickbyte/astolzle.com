import { useState } from 'react';
import { getAllPosts } from "../lib/mdx";
import Link from 'next/link'
import LayoutWrapper from '../components/LayoutWrapper';
import { parseISO, format } from 'date-fns';

export default function Blog({
  posts
}) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter((post) =>
    post.frontmatter.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <LayoutWrapper title="Blog | Andrew Stolzle">
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          Blog
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          I enjoy writing as it helps me to organize my ideas and to think more clearly. Use the search below to filter through {posts.length} articles.
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search posts"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-3xl dark:text-white">
          Posts
        </h3>
        {!filteredBlogPosts.length && (
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}
        {
          filteredBlogPosts.sort((a, b) => new Date(b.frontmatter.publishedAt) - new Date(a.frontmatter.publishedAt)).map((post, index) => (
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
      </div>
    </LayoutWrapper>
  );
}

export function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
