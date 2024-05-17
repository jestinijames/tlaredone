import React from 'react';

import Breadcrumb from '@/components/breadcrumb';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

import ArticleDetailsArea from './article-details-area';

const parent_page = {
  title: 'Articles Home',
  url: '/articles',
};

const index = ({ slug }: { slug: string }) => {
  return (
    <div className='sticky-header'>
      <div id='main-wrapper' className='main-wrapper'>
        <Header />
        <Breadcrumb
          title={deslugify(slug)}
          current_page={deslugify(slug)}
          parent_page={parent_page}
        />
        <ArticleDetailsArea slug={slug} />

        <Footer dark_bg={true} />
      </div>
    </div>
  );
};

export default index;

function deslugify(slug: string) {
  // Replace hyphens with spaces
  const words = slug.split('-');

  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  // Join the words back into a single string
  return words.join(' ');
}
