'use client';

import Breadcrumb from '@/components/breadcrumb';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

import Editor from './editor';

const index = () => {
  return (
    <div className='sticky-header'>
      <div id='main-wrapper' className='main-wrapper'>
        <Header />
        <Breadcrumb title='Articles Home' current_page='Create Articles' />
        <Editor />
        <Footer dark_bg={true} />
      </div>
    </div>
  );
};

export default index;
