import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import LayoutWrapper from '../components/LayoutWrapper';

export default function BlogLayout({
  children,
  post
}) {
  return (
    <LayoutWrapper
      title={`${post.title} | Andrew Stolzle`}
      description={post.summary}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Andrew Stolzle"
              height={24}
              width={24}
              src={`/static/favicons/favicon-32x32.png`}
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {'Andrew Stolzle'}{' '}&bull;{' '}
              {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
        </div>
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
      </article>
    </LayoutWrapper>
  );
}
