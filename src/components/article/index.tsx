import React from 'react';

import Breadcrumb from '@/components/breadcrumb';
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
          title='Article'
          current_page='Article'
          parent_page={parent_page}
        />

        <Footer dark_bg={true} />
      </div>
    </div>
  );
};

export default index;
