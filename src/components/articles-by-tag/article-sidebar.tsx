'use client';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from 'next/link';
import React from 'react';

import LatestArticles from '@/components/common/latest-articles';

import { api } from '@/trpc/react';

const ArticleSidebar = ({ tagId }: { tagId: string }) => {
  const { data: tags } = api.tag.getTags.useQuery();

  return (
    <div className='edu-blog-sidebar'>
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

      <LatestArticles />

      <div className='edu-blog-widget widget-tags'>
        <div className='inner'>
          <h4 className='widget-title'>Tags</h4>
          <div className='content'>
            <div className='tag-list'>
              {tags &&
                tags.map((tag: any) => {
                  if (tagId === tag.id) {
                    return (
                      <Link
                        style={{
                          background: '#1ab69d',
                          color: '#fff',
                          cursor: 'default',
                        }}
                        onClick={(e) => e.preventDefault()}
                        key={tag.id}
                        href='#'
                      >
                        {tag.name}
                      </Link>
                    );
                  }

                  return (
                    <Link key={tag.id} href={`/articles/tag/${tag.id}`}>
                      {tag.name}
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSidebar;
