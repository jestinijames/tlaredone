import React from 'react';

import Breadcrumb from '@/components/breadcrumb';
import CreateArticleArea from '@/components/create-article/create-article-area';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

const parent_page = {
  title: 'Articles Home',
  url: '/articles',
};

const index = () => {
  return (
    <div className='sticky-header'>
      <div id='main-wrapper' className='main-wrapper'>
        <Header />
        <Breadcrumb
          title='Create Article'
          current_page='Create'
          parent_page={parent_page}
        />
        <CreateArticleArea />

        <Footer dark_bg={true} />
      </div>
    </div>
  );
};

export default index;
