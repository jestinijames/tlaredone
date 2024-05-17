/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import ArticleItems from './article-items';
import ArticleSidebar from './article-sidebar';

const ListArea = ({ slug }: { slug: string }) => {
  return (
    <section className='section-gap-equal'>
      <div className='container'>
        <div className='row row--30'>
          <ArticleItems tagId={slug} />

          <div className='col-lg-4'>
            {/* sidebar start */}
            <ArticleSidebar tagId={slug} />
            {/* sidebar end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListArea;
