'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Interweave } from 'interweave';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useUrl } from 'nextjs-current-url';
import React, { useEffect, useState } from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from 'react-share';

import ArticleSidebar from '@/components/article/article-sidebar';

import { api } from '@/trpc/react';
const ArticleDetailsArea = ({ slug }: { slug: string }) => {
  const utils = api.useContext();
  const { data: sessionData } = useSession();

  const { data: blog, isSuccess } = api.post.getPost.useQuery(
    { slug: slug as string, userId: sessionData?.user?.id },
    {
      enabled: !!slug,
    }
  );

  const [{ isLiked, likesCount }, setLikesObject] = useState({
    isLiked: Boolean(blog?.likes && blog.likes.length > 0),
    likesCount: blog?._count.likes ?? 0,
  });

  useEffect(() => {
    setLikesObject({
      isLiked: Boolean(blog?.likes && blog.likes.length > 0),
      likesCount: blog?._count.likes ?? 0,
    });
  }, [blog]);

  const likePost = api.post.likePost.useMutation({
    onSuccess: () => {
      setLikesObject(({ likesCount }) => ({
        isLiked: true,
        likesCount: likesCount + 1,
      }));
      utils.post.getPost.invalidate({
        slug: slug as string,
        userId: sessionData?.user?.id,
      });
    },
  });
  const dislikePost = api.post.dislikePost.useMutation({
    onSuccess: () => {
      setLikesObject(({ likesCount }) => ({
        isLiked: false,
        likesCount: likesCount - 1,
      }));
      utils.post.getPost.invalidate({
        slug: slug as string,
        userId: sessionData?.user?.id,
      });
    },
  });

  const { href: currentUrl } = useUrl() ?? {};

  return (
    <div className='blog-details-area section-gap-equal'>
      <div className='container'>
        <div className='row row--30'>
          <div className='col-lg-8'>
            <div className='blog-details-content'>
              <div className='entry-content'>
                <span className='category'>Article</span>
                {isSuccess && <h3 className='title'> {blog?.title} </h3>}
                {blog && (
                  <ul className='blog-meta'>
                    {!likePost.isPending &&
                      !dislikePost.isPending &&
                      (isLiked ? (
                        <li>
                          <FcLike
                            style={{
                              cursor: 'pointer',
                              fontSize: '1.5rem',
                              lineHeight: '2rem',
                            }}
                            className='cursor-pointer text-2xl'
                            onClick={() =>
                              dislikePost.mutate({ postId: blog.id })
                            }
                          />
                          {likesCount}
                        </li>
                      ) : (
                        <li>
                          <FcLikePlaceholder
                            style={{
                              cursor: 'pointer',
                              fontSize: '1.5rem',
                              lineHeight: '2rem',
                            }}
                            className='cursor-pointer text-2xl'
                            onClick={() => likePost.mutate({ postId: blog.id })}
                          />{' '}
                          {likesCount}
                        </li>
                      ))}
                  </ul>
                )}
                {isSuccess && blog?.featuredImage && (
                  <div className='thumbnail'>
                    <Image
                      height={750}
                      width={420}
                      src={blog?.featuredImage}
                      alt={blog?.title}
                    />
                  </div>
                )}
              </div>

              <Interweave content={blog?.text} />

              <div className='blog-share-area'>
                <div className='row align-items-center'>
                  <div className='col-md-7'>
                    <div className='blog-tags'>
                      <h6 className='title'>Tags:</h6>
                      <div className='tag-list'>
                        {blog?.tags.map((tag) => (
                          <Link href={`/articles/tag/${tag.id}`} key={tag.id}>
                            {tag.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className='col-md-5'>
                    <div className='blog-share'>
                      <h6 className='title'>Share on:</h6>
                      {currentUrl && (
                        <ul className='social-share icon-transparent'>
                          <li>
                            <FacebookShareButton url={currentUrl}>
                              <FacebookIcon size={30} round />
                            </FacebookShareButton>
                          </li>
                          <li>
                            <TwitterShareButton url={currentUrl}>
                              <XIcon size={30} round />
                            </TwitterShareButton>
                          </li>
                          <li>
                            <WhatsappShareButton url={currentUrl}>
                              <WhatsappIcon size={30} round />
                            </WhatsappShareButton>
                          </li>
                          <li>
                            <LinkedinShareButton
                              className='w-full'
                              url={currentUrl}
                            >
                              <LinkedinIcon size={30} round />
                            </LinkedinShareButton>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='blog-author'>
              <div className='thumbnail'>
                <Image
                  width={100}
                  height={100}
                  src='/images/faculty/detail/revanth.jpg'
                  alt='Revanth T'
                />
              </div>
              <div className='author-content'>
                <h5 className='title'>Revanth T</h5>

                <ul className='social-share icon-transparent'>
                  <li>
                    <Link href='https://www.facebook.com/TandLA'>
                      <i className='icon-facebook'></i>
                    </Link>
                  </li>
                  <li>
                    <Link href='https://twitter.com/revanth03'>
                      <i className='icon-twitter'></i>
                    </Link>
                  </li>
                  <li>
                    <Link href='https://www.instagram.com/truthandlifepod/'>
                      <i className='icon-instagram'></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='blog-pagination'>
              <div className='row g-5'>
                <div className='col-lg-6'>
                  <div className='blog-pagination-list prev-post'>
                    <Link href='/articles'>
                      <i className='icon-west'></i>
                      <span>Back to articles home</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* DONT DELETE: DISABLING COMMENTS FOR NOW*/}
            {/* <CommentArea />
            <div className='comment-form-area'>
              <h3 className='heading-title'>Leave Your Comment Here</h3>
              <ArticleCommentForm />
            </div> */}
          </div>

          <div className='col-lg-4'>
            <ArticleSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailsArea;
