'use client';

import Image from 'next/image';
import { useState } from 'react';

import Button from 'components/button';
import styles from 'components/card.module.css';
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
              <div className={styles.header}>
                <div className={styles.icon}>
                  {post.metadata.icon && (
                    <Link href={`/blog/${post.slug}`}>
                      <Image
                        src={post.metadata.icon}
                        width={50}
                        height={50}
                        alt=""
                        className={styles.image}
                      />
                    </Link>
                  )}
                </div>
                <div>
                  <h3 className={styles.title}>
                    <Link href={`/blog/${post.slug}`}>
                      {post.metadata.title}
                    </Link>
                  </h3>
                  <h4 className={styles.title}>
                    {new Date(post.metadata.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'numeric',
                      day: 'numeric',
                    })}
                  </h4>
                </div>
              </div>
              <div className={styles.text}>{post.metadata.excerpt}</div>
              <div>
                <Link href={`/blog/${post.slug}`}>Read →</Link>
              </div>
            </GridItem>
          ))}
      </Grid>

      {!expanded && posts.length > 4 && (
        <div className={styles.more}>
          <Button onClick={() => setExpanded(true)}>View all</Button>
        </div>
      )}
    </>
  );
}
