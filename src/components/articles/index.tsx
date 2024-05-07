import React from 'react';

import ListArea from '@/components/articles/list-area';
import Breadcrumb from '@/components/breadcrumb';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

const index = () => {
  return (
    <div className='sticky-header'>
      <div id='main-wrapper' className='main-wrapper'>
        <Header />
        <Breadcrumb title='Articles Home' current_page='Articles' />
        <ListArea />

        <Footer dark_bg={true} />
      </div>
    </div>
  );
};

export default index;
