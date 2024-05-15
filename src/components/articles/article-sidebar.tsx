'use client';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import React from 'react';

import blog_data from '@/data/blog-data';

const latest_blog = blog_data.slice(0, 3);

const ArticleSidebar = ({ tags }: { tags: any }) => {
  const { data: sessionData, status } = useSession();

  return (
    <div className='edu-blog-sidebar'>
      {status === 'authenticated' && (
        <div className='edu-blog-widget widget-action'>
          <div className='inner'>
            <Link href='create-article' className='edu-btn btn-medium'>
              Create Article <i className='icon-4'></i>
            </Link>
          </div>
        </div>
      )}

      <div className='edu-blog-widget widget-search'>
        <div className='inner'>
          <h4 className='widget-title'>Search</h4>
          <div className='content'>
            <form className='blog-search'>
              <button className='search-button'>
                <i className='icon-2'></i>
              </button>
              <input type='text' placeholder='Search' />
            </form>
          </div>
        </div>
      </div>

      <div className='edu-blog-widget widget-latest-post'>
        <div className='inner'>
          <h4 className='widget-title'>Latest Post</h4>
          <div className='content latest-post-list'>
            {latest_blog.map((blog) => (
              <div key={blog.id} className='latest-post'>
                <div className='thumbnail'>
                  <Link href={`/blog-details/${blog.id}`}>
                    <img src={blog.img} alt='Blog Images' />
                  </Link>
                </div>
                <div className='post-content'>
                  <h6 className='title'>
                    <Link href={`/blog-details/${blog.id}`}>
                      {blog.title.substring(0, 25)}...
                    </Link>
                  </h6>
                  <ul className='blog-meta'>
                    <li>
                      <i className='icon-27'></i>
                      {blog.date}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='edu-blog-widget widget-tags'>
        <div className='inner'>
          <h4 className='widget-title'>Tags</h4>
          <div className='content'>
            <div className='tag-list'>
              {tags &&
                tags.map((tag: any) => (
                  <Link key={tag.id} href='#'>
                    {tag.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSidebar;
