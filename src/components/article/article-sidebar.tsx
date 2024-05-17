/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

import LatestArticles from '@/components/common/latest-articles';

const ArticleSidebar = () => {
  return (
    <div className='edu-blog-sidebar'>
      <div className='edu-blog-widget widget-search'>
        <div className='inner'>
          <h4 className='widget-title'>Search</h4>
          <div className='content'>
            <form
              className='blog-search'
              // onSubmit={(e) => e.preventDefault()}
            >
              <button className='search-button'>
                <i className='icon-2'></i>
              </button>
              <input type='text' placeholder='Search' />
            </form>
          </div>
        </div>
      </div>
      <LatestArticles />

      <div className='edu-blog-widget widget-action'>
        <div className='inner'>
          <h4 className='title'>
            Get access to courses From <span>Truth And Life Academy</span>
          </h4>
          <span className='shape-line'>
            <i className='icon-19'></i>
          </span>

          <Link href='/contact-us' className='edu-btn btn-medium'>
            Contact Us <i className='icon-4'></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleSidebar;
