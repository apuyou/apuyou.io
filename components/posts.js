/** @jsxImportSource theme-ui */
import { useState } from 'react';
import { Button } from 'theme-ui';
import Image from 'next/image';

import Grid from 'components/grid';
import GridItem from 'components/griditem';
import Link from 'components/link';

export default function Posts({ posts }) {
  const [expanded, setExpanded] = useState(false);

  const visiblePosts = expanded ? posts : posts?.slice(0, 4);

  return (
    <>
      <h2 id="blog">Blog</h2>
      <Grid>
        {visiblePosts
          .sort((a, b) => {
            return new Date(b.metadata.date) - new Date(a.metadata.date);
          })
          .map((post) => (
            <GridItem key={post.slug}>
              <div
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 2,
                }}
              >
                <div
                  sx={{
                    width: 50,
                    height: 50,
                    flexShrink: 0,
                    marginRight: 2,
                  }}
                >
                  {post.metadata.icon && (
                    <Link href={`/blog/${post.slug}`}>
                      <Image
                        src={post.metadata.icon}
                        width={50}
                        height={50}
                        alt=""
                      />
                    </Link>
                  )}
                </div>
                <div>
                  <h3 sx={{ margin: 0 }}>
                    <Link href={`/blog/${post.slug}`}>
                      {post.metadata.title}
                    </Link>
                  </h3>
                  <h4 sx={{ margin: 0 }}>
                    {new Date(post.metadata.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                    })}
                  </h4>
                </div>
              </div>
              <div sx={{ marginBottom: 3 }}>{post.metadata.excerpt}</div>
              <div>
                <Link href={`/blog/${post.slug}`}>Read →</Link>
              </div>
            </GridItem>
          ))}
      </Grid>

      {!expanded && posts.length > 4 && (
        <div
          sx={{
            marginTop: 3,
            display: 'flex',
            justifyContent: 'center',
            marginX: 'auto',
          }}
        >
          <Button onClick={() => setExpanded(true)}>View all</Button>
        </div>
      )}
    </>
  );
}
