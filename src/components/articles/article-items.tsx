'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { api } from '@/trpc/react';

const ArticleItems = () => {
  const { data } = useSession();

  const posts = api.post.getPosts.useInfiniteQuery(
    {
      userId: data?.user?.id,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  return (
    <div className='col-lg-8'>
      <InfiniteScroll
        dataLength={posts.data?.pages.flatMap((page) => page.posts).length ?? 0} //This is important field to render the next data
        next={posts.fetchNextPage}
        hasMore={Boolean(posts.hasNextPage)}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p className='text-center font-bold'>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {posts.isSuccess &&
          posts.data.pages
            .flatMap((page) => page.posts)
            .map(
              (
                {
                  title,
                  description,
                  slug,
                  featuredImage,

                  id,
                },
                i
              ) => (
                <div key={i} className='edu-blog blog-style-4 post-gallery'>
                  <div className='inner'>
                    <div className='thumbnail'>
                      <Link href={`/articles/article/${slug}`}>
                        {featuredImage && (
                          <Image
                            height={420}
                            width={750}
                            src={featuredImage}
                            alt='Blog Images'
                          />
                        )}
                      </Link>
                    </div>
                    <div className='content'>
                      <div className='category-wrap'>
                        <a href='#' className='blog-category'>
                          Article
                        </a>
                      </div>
                      <h3 className='title'>
                        <Link href={`/blog-details/${id}`}>{title}</Link>
                      </h3>
                      <ul className='blog-meta'>
                        <li>
                          <i className='icon-62'></i>
                          Revanth T
                        </li>
                        {/* <li>
                    <i className='icon-28'></i>Com {comment}
                  </li> */}
                      </ul>
                      <p>{description}</p>
                      <div className='read-more-btn'>
                        <Link
                          className='edu-btn btn-border btn-medium'
                          href={`/articles/article/${slug}`}
                        >
                          Learn More <i className='icon-4'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
      </InfiniteScroll>
    </div>
  );
};

export default ArticleItems;
