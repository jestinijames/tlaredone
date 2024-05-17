/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import ArticleItems from '@/components/articles/article-items';

const ListArea = () => {
  return (
    <section className='section-gap-equal'>
      <div className='container'>
        <div className='row row--30'>
          <ArticleItems />
        </div>
      </div>
    </section>
  );
};

export default ListArea;
