import fs from 'fs';
import { join } from 'path';

const postsDirectory = join(process.cwd(), 'pages', 'blog');

export async function getPosts() {
  const posts = fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((f) => f.name.endsWith('.mdx'))
    .map((f) => {
      const slug = f.name.substr(0, f.name.length - 4);
      const post = require(`pages/blog/${slug}.mdx`);
      return {
        slug,
        ...post.metadata,
      };
    })
    .filter((p) => !p.draft);

  return posts;
}
