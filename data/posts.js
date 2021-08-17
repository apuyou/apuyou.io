import fs from 'fs';
import { join } from 'path';

const postsDirectory = join(process.cwd(), 'pages', 'blog');

export async function getPosts() {
  const posts = fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((f) => f.isDirectory())
    .map((f) => ({ slug: f.name }));
  return posts;
}
