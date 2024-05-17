import React from 'react';

import Breadcrumb from '@/components/breadcrumb';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

import ListArea from './list-area';

const index = ({ slug }: { slug: string }) => {
  return (
    <div className='sticky-header'>
      <div id='main-wrapper' className='main-wrapper'>
        <Header />
        <Breadcrumb title='Articles Home' current_page='Articles' />
        <ListArea slug={slug} />

        <Footer dark_bg={true} />
      </div>
    </div>
  );
};

export default index;
