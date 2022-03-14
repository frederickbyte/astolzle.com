import { useMemo } from 'react';
import LayoutWrapper from '../../components/LayoutWrapper'
import Image from 'next/image';
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "../../lib/mdx";
import { parseISO, format } from 'date-fns';

const Post = ({ code, frontmatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <LayoutWrapper
      title={`${frontmatter.title} | Andrew Stolzle`}
      description={frontmatter.summary}
      date={new Date(frontmatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {frontmatter.title}
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
              {format(parseISO(frontmatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
        </div>
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          <Component />
        </div>
      </article>
    </LayoutWrapper>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;