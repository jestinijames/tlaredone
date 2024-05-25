'use client';

import Image from 'next/image';
import React from 'react';

import { api } from '@/trpc/react';

const CommentArea = ({ postId }: { postId: string }) => {
  const { data: comments } = api.comment.getComments.useQuery({
    postId,
  });
  return (
    <div className='comment-area'>
      <h3 className='heading-title'>Comments</h3>

      <div className='comment-list-wrapper'>
        {comments &&
          comments.map((comment, index) => (
            <div key={index} className='comment'>
              <div className='thumbnail'>
                <Image
                  height={80}
                  width={80}
                  src='/images/blog/comment-01.jpg'
                  alt='Comment Images'
                />
              </div>
              <div className='comment-content'>
                <h5 className='title'>{comment.name}</h5>
                <span className='date'>Oct 10, 2021</span>
                <p>{comment.text}</p>
              </div>
            </div>
          ))}
        {/* <div className='comment comment-reply'>
          <div className='thumbnail'>
            <Image
              height={80}
              width={80}
              src='/images/blog/comment-02.jpg'
              alt='Comment Images'
            />
          </div>
          <div className='comment-content'>
            <h5 className='title'>Simon Baker</h5>
            <span className='date'>Oct 10, 2021</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='reply-btn-wrapper'>
              <a className='reply-btn' href='#'>
                Reply
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CommentArea;
