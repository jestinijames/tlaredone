/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import ArticleItems from '@/components/articles/article-items';

interface ListAreaProps {
  articles: any[]; // Replace 'any[]' with the appropriate type for articles
}

const ListArea: React.FC<ListAreaProps> = ({ articles }) => {
  return (
    <section className='section-gap-equal'>
      <div className='container'>
        <div className='row row--30'>
          <ArticleItems articles={articles} />
        </div>
      </div>
    </section>
  );
};

export default ListArea;
