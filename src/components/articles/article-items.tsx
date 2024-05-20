/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { toast } from 'react-toastify';

import LatestArticles from '@/components/common/latest-articles';

import { api } from '@/trpc/react';

const ArticleItems = () => {
  const { data, status } = useSession();

  const [keyword, setKeyword] = useState('');

  const posts = api.post.getPosts.useInfiniteQuery(
    {
      userId: data?.user?.id,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  const searchPosts = api.post.getArticlesBySearch.useInfiniteQuery(
    { keyword },
    {
      enabled: false, // Disable automatic fetching
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  const { data: tags } = api.tag.getTags.useQuery();

  const utils = api.useUtils();
  const router = useRouter();
  const deletePost = api.post.deletePost.useMutation({
    onSuccess: () => {
      utils.post.getPosts.invalidate();
      toast.success('yey 🥳, post deleted successfully!');
      router.refresh();
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      if (keyword.trim() === '') {
        posts.refetch();
      } else {
        searchPosts.refetch();
      }
    }, 300); // Adjust the debounce delay as needed (300ms in this case)

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const currentPosts = keyword.trim() === '' ? posts : searchPosts;

  return (
    <>
      <div className='col-lg-8'>
        {currentPosts.isError && (
          <p style={{ padding: '1rem' }}>
            Something went wrong while fetching the blog posts!
          </p>
        )}

        {currentPosts.isLoading && (
          <div className='spinner-border' role='status'></div>
        )}

        <InfiniteScroll
          dataLength={
            currentPosts.data?.pages.flatMap((page) => page.posts).length ?? 0
          } //This is important field to render the next data
          next={posts.fetchNextPage}
          hasMore={Boolean(posts.hasNextPage)}
          loader={
            <div className='spinner-border' role='status'>
              <span className='sr-only'>Loading...</span>
            </div>
          }
        >
          {currentPosts.isSuccess &&
            currentPosts.data.pages
              .flatMap((page) => page.posts)
              .map(({ title, description, slug, featuredImage, id }) => (
                <div key={id} className='edu-blog blog-style-4 post-gallery'>
                  <div className='inner'>
                    <div className='thumbnail'>
                      <Link href={`/articles/article/${slug}`}>
                        {featuredImage && (
                          <Image
                            height={420}
                            width={750}
                            src={featuredImage}
                            alt={title}
                          />
                        )}
                      </Link>
                    </div>
                    <div className='content'>
                      <div className='category-wrap'>
                        <div className='blog-category'>Article</div>
                      </div>
                      <h3 className='title'>
                        <Link href={`/articles/article/${slug}`}>{title}</Link>
                      </h3>
                      <ul className='blog-meta'>
                        <li>
                          <i className='icon-62'></i>
                          Revanth T
                        </li>
                        {status === 'authenticated' && (
                          <>
                            <li>
                              <button
                                onClick={() =>
                                  deletePost.mutate({ postId: id })
                                }
                                type='button'
                                className='btn btn-danger'
                              >
                                Delete
                              </button>
                            </li>
                            <li>
                              <button
                                onClick={() => {
                                  router.push(`/update-article/${slug}`);
                                }}
                                type='button'
                                className='btn btn-warning'
                              >
                                Update
                              </button>
                            </li>
                          </>
                        )}
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
              ))}
        </InfiniteScroll>
      </div>

      {/* Sidebar */}
      <div className='col-lg-4'>
        <div className='edu-blog-sidebar'>
          <div className='edu-blog-widget widget-search'>
            <div className='inner'>
              <h4 className='widget-title'>Search</h4>
              <div className='content'>
                <form className='blog-search'>
                  <button className='search-button'>
                    <i className='icon-2'></i>
                  </button>
                  <input
                    type='text'
                    placeholder='Search'
                    value={keyword}
                    onChange={handleSearchChange}
                  />
                </form>
              </div>
            </div>
          </div>

          <LatestArticles />

          <div className='edu-blog-widget widget-tags'>
            <div className='inner'>
              <h4 className='widget-title'>Tags</h4>
              <div className='content'>
                <div className='tag-list'>
                  {tags &&
                    tags.map((tag: any) => (
                      <Link key={tag.id} href={`/articles/tag/${tag.id}`}>
                        {tag.name}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleItems;
