import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import remarkPrismPlugin from 'remark-prism';
import Head from 'next/head';

import config from 'data/config';
import { getPost, getPosts } from 'data/posts';

export default function BlogPostPage({ source, metadata }) {
  return (
    <>
      <Head>
        <title>
          {metadata.title} – {config.defaultTitle}
        </title>
      </Head>
      <MDXRemote {...source} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPost(params.slug);
  const mdxSource = await serialize(post.source, {
    mdxOptions: {
      remarkPlugins: [remarkPrismPlugin],
    },
  });
  return { props: { source: mdxSource, metadata: post.metadata } };
}

export async function getStaticPaths() {
  const posts = getPosts();
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.slug,
      },
    })),
    fallback: false,
  };
}
