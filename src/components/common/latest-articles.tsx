'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { api } from '@/trpc/react';

const LatestArticles = () => {
  const { data: latestPosts, isLoading } = api.post.getLatestPosts.useQuery();

  return (
    <div className='edu-blog-widget widget-latest-post'>
      <div className='inner'>
        <h4 className='widget-title'>Latest Articles</h4>
        <div className='content latest-post-list'>
          {isLoading && <div className='spinner-border' role='status' />}
          {latestPosts?.map((post) => (
            <div key={post.id} className='latest-post'>
              <div className='thumbnail'>
                <Link href={`/articles/article/${post.slug}`}>
                  {post.featuredImage && (
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      height={170}
                      width={240}
                    />
                  )}
                </Link>
              </div>
              <div className='post-content'>
                <h6 className='title'>
                  <Link href={`/articles/article/${post.slug}`}>
                    {post.title.substring(0, 25)}...
                  </Link>
                </h6>
                <ul className='blog-meta'>
                  <li>
                    <i className='icon-25'></i>
                    Revanth T
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
