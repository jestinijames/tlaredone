/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

import LatestArticles from '@/components/common/latest-articles';

const ArticleSidebar = () => {
  return (
    <div className='edu-blog-sidebar'>
      <LatestArticles />

      <div className='edu-blog-widget widget-action'>
        <div className='inner'>
          <h4 className='title'>
            Browse through our <span>Course Catalogue</span>
          </h4>
          <span className='shape-line'>
            <i className='icon-19'></i>
          </span>

          <Link href='/courses' className='edu-btn btn-medium'>
            Check it out <i className='icon-4'></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleSidebar;
