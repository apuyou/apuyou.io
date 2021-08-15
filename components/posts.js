/** @jsxImportSource theme-ui */

export default function Posts({ posts }) {
  return (
    <>
      <h2>Blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>{post.slug}</li>
        ))}
      </ul>
    </>
  );
}
