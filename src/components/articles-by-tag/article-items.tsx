'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { toast } from 'react-toastify';

import { api } from '@/trpc/react';

const ArticleItems = ({ tagId }: { tagId: string }) => {
  const { status } = useSession();

  const posts = api.post.getPostsByTag.useInfiniteQuery(
    {
      tagId: tagId,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

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

  return (
    <div className='col-lg-8'>
      {posts.isError && (
        <p style={{ padding: '1rem' }}>
          Something went wrong while fetching the blog posts!
        </p>
      )}

      {posts.isLoading && <div className='spinner-border' role='status'></div>}

      <InfiniteScroll
        dataLength={posts.data?.pages.flatMap((page) => page.posts).length ?? 0} //This is important field to render the next data
        next={posts.fetchNextPage}
        hasMore={Boolean(posts.hasNextPage)}
        loader={
          <div className='spinner-border' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        }
        // endMessage={
        //   <p className='text-center font-bold'>
        //     <b>Yay! You have seen it all</b>
        //   </p>
        // }
      >
        {posts.isSuccess &&
          posts.data.pages
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
                              onClick={() => deletePost.mutate({ postId: id })}
                              type='button'
                              className='btn btn-danger'
                            >
                              Delete
                            </button>
                          </li>
                          <li>
                            <button type='button' className='btn btn-warning'>
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
  );
};

export default ArticleItems;
