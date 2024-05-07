/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import React from 'react';

import blog_data from '@/data/blog-data';

import ArticleSidebar from './article-sidebar';

const blog_items = blog_data.filter((blog: any) => blog.blog_list);

const ListArea = () => {
  return (
    <section className='section-gap-equal'>
      <div className='container'>
        <div className='row row--30'>
          <div className='col-lg-8'>
            {blog_items.map((blog: any) => {
              const { id, img, title, date, desc, comment } = blog;
              return (
                <div
                  key={id}
                  className='edu-blog blog-style-list'
                  data-sal-delay='150'
                  data-sal='slide-up'
                  data-sal-duration='800'
                >
                  <div className='inner'>
                    <div className='thumbnail'>
                      <Link href={`/blog-details/${id}`}>
                        <img src={img} alt='Blog Images' />
                      </Link>
                    </div>
                    <div className='content'>
                      <h5 className='title'>
                        <Link href={`/blog-details/${id}`}>{title}...</Link>
                      </h5>
                      <ul className='blog-meta'>
                        <li>
                          <i className='icon-27'></i>
                          {date}
                        </li>
                        <li>
                          <i className='icon-28'></i>Com {comment}
                        </li>
                      </ul>
                      <p>{desc}</p>
                      <div className='read-more-btn'>
                        <Link
                          className='edu-btn btn-border btn-medium'
                          href={`/blog-details/${id}`}
                        >
                          Learn More <i className='icon-4'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <ul className='edu-pagination top-space-30 justify-content-start'>
              {/* pagination start */}
              {/* <PaginationTwo /> */}
              PAGINATION or Infinite scroll button
              {/* pagination end */}
            </ul>
          </div>

          <div className='col-lg-4'>
            {/* sidebar start */}
            <ArticleSidebar />
            {/* sidebar end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListArea;
