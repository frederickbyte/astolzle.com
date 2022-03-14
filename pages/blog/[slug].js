import { useMDXComponent } from 'next-contentlayer/hooks';
import components from '../../components/MDXComponents';
import BlogPost from '../../layouts/blog';
import { allBlogs } from 'contentlayer/generated';

export default function Post({ post }) {
  const Component = useMDXComponent(post.body.code);

  return (
    <BlogPost post={post}>
      <Component
        components={
          {
            ...components
          }
        }
      />
    </BlogPost>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  return { props: { post } };
}
