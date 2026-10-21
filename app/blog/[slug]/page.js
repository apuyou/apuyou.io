import { serialize } from 'next-mdx-remote/serialize';
import remarkPrismPlugin from 'remark-prism';

import MDXContent from 'components/mdx-content';
import config from 'data/config';
import { getPost, getPosts } from 'data/posts';

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }, parent) {
  const { slug } = await params;
  const { openGraph } = await parent;

  return {
    title: `${getPost(slug).metadata.title} – ${config.defaultTitle}`,
    openGraph: {
      ...openGraph,
      url: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const source = await serialize(getPost(slug).source, {
    mdxOptions: {
      remarkPlugins: [remarkPrismPlugin],
    },
  });

  return <MDXContent source={source} />;
}
