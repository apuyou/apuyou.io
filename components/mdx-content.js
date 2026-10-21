'use client';

import { MDXRemote } from 'next-mdx-remote';

export default function MDXContent({ source }) {
  return <MDXRemote {...source} />;
}
