/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import blog_data from '@/data/blog-data';

const blog_items = blog_data.filter((blog) => blog.home_4);
const large_blog = blog_items.find((blog) => blog.large);
const sm_blogs = blog_items.filter((blog) => !blog.large);

const BlogArea = () => {
  return (
    <div className='edu-blog-area blog-area-3 edu-section-gap'>
      <div className='container'>
        <div
          className='section-title section-center'
          data-sal-delay='50'
          data-sal='slide-up'
          data-sal-duration='800'
        >
          <span className='pre-title'>Trending Articles</span>
          <h2 className='title'>Check out our trending articles!</h2>
          <span className='shape-line'>
            <i className='icon-19'></i>
          </span>
        </div>
        <div className='row g-5 row--45'>
          <div
            className='col-lg-6 col-12'
            data-sal-delay='50'
            data-sal='slide-up'
            data-sal-duration='800'
          >
            <div className='edu-blog blog-style-2 first-large-blog'>
              <div className='inner'>
                <div className='thumbnail'>
                  <Link href={`/articles/article/${large_blog?.id}`}>
                    {large_blog?.img && (
                      <Image
                        height={370}
                        width={540}
                        src={large_blog?.img}
                        alt={large_blog.title}
                      />
                    )}
                  </Link>
                </div>
                <div className='content'>
                  <div className='category-wrap'>
                    <Link
                      className='blog-category'
                      href={`/articles/article/${large_blog?.id}`}
                    >
                      {large_blog?.category}
                    </Link>
                  </div>
                  <h4 className='title'>
                    <Link href={`/articles/article/${large_blog?.id}`}>
                      {large_blog?.title}
                    </Link>
                  </h4>
                  <p>
                    It is important to remember, right at the outset, that
                    slavery in the Bible was not like the well-known slave trade
                    of the last few centuries.
                  </p>
                  <ul className='blog-meta'>
                    <li>
                      <i className='icon-25'></i>{' '}
                      <a href='/faculty/member/revanth-t'>
                        {large_blog?.author}
                      </a>
                    </li>
                    {/* <li>
                      <i className='icon-28'></i>Com {large_blog?.comment}
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className='col-lg-6'
            data-sal-delay='100'
            data-sal='slide-up'
            data-sal-duration='800'
          >
            {sm_blogs.map((blog) => {
              const { id, img, category, title, author } = blog;
              return (
                <div key={id} className='edu-blog blog-style-2'>
                  <div className='inner'>
                    <div className='thumbnail'>
                      <Link href={`/articles/article/${id}`}>
                        <Image height={170} width={240} src={img} alt={title} />
                      </Link>
                      {/* <div className='blog-date'>
                        <span className='day'>{date.split(' ')[1]}</span>
                        <span className='month'>{date.split(' ')[0]}</span>
                      </div> */}
                    </div>
                    <div className='content'>
                      <div className='category-wrap'>
                        <Link
                          className='blog-category'
                          href={`/blog-details/${id}`}
                        >
                          {category}
                        </Link>
                      </div>
                      <h5 className='title'>
                        <Link href={`/blog-details/${id}`}>{title}</Link>
                      </h5>
                      <ul className='blog-meta'>
                        <li>
                          <i className='icon-25'></i>{' '}
                          <a href='/faculty/member/revanth-t'>{author}</a>
                        </li>
                        {/* <li>
                          <i className='icon-28'></i>Com {comment}
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArea;
