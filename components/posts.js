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
      <h2>Blog</h2>
      <Grid>
        {visiblePosts.map((post) => (
          <GridItem key={post.id}>{post.slug}</GridItem>
        ))}
      </Grid>

      {!expanded && (
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
