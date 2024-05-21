import React from 'react';

import Breadcrumb from '@/components/breadcrumb';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

import { deslugify } from '@/utils/deslugify';

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
