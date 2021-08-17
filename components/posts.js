/** @jsxImportSource theme-ui */
import { useState } from 'react';
import { Button } from 'theme-ui';
import Image from 'next/image';

import Grid from 'components/grid';
import GridItem from 'components/griditem';

export default function Posts({ posts }) {
  const [expanded, setExpanded] = useState(false);

  const visiblePosts = expanded ? posts : posts?.slice(0, 4);

  return (
    <>
      <h2 id="blog">Blog</h2>
      <Grid>
        {visiblePosts.map((post) => (
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
                {post.icon && <Image src={post.icon} width={50} height={50} />}
              </div>
              <h3 sx={{ margin: 0 }}>{post.title}</h3>
            </div>
            <div sx={{ marginBottom: 3 }}>{post.excerpt}</div>
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
