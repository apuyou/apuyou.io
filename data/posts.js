import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'data', 'blog');

export function getPosts() {
  const posts = fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((f) => f.name.endsWith('.mdx'))
    .map((f) => {
      const slug = f.name.substr(0, f.name.length - 4);
      return getPost(slug);
    });

  return posts;
}

export function getPost(slug) {
  const path = join(postsDirectory, `${slug}.mdx`);
  const source = fs.readFileSync(path).toString();
  const { content, data } = matter(source);
  return {
    slug,
    source: content,
    metadata: data,
  };
}
