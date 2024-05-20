import React from 'react';

import Breadcrumb from '@/components/breadcrumb';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

import UpdateArticleArea from './update-article-area';

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
          title='Create Article'
          current_page='Create'
          parent_page={parent_page}
        />
        <UpdateArticleArea slug={slug} />

        <Footer dark_bg={true} />
      </div>
    </div>
  );
};

export default index;
