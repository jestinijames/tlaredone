'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { api } from '@/trpc/react';

// types.ts or interfaces.ts
export interface Post {
  id: string;
  title: string;
  description: string;
  slug: string;
  featuredImage: string | null;
  html: string;
  text: string;
  authorId: string;
  isPublished: boolean | null;
  createdAt: Date;
  updatedAt: Date;
}

const LatestArticles = () => {
  const { data: randomPosts, isLoading } =
    api.post.getRandomPosts.useQuery<Post[]>();

  return (
    <div className='edu-blog-widget widget-latest-post'>
      <div className='inner'>
        <h4 className='widget-title'>Popular Articles</h4>
        <div className='content latest-post-list'>
          {isLoading && <div className='spinner-border' role='status' />}
          {randomPosts?.map((post: Post) => (
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
