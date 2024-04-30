import React from 'react';

import Breadcrumb from '@/components/breadcrumb';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

import FacultyArea from './faculty-area';

const index = () => {
  return (
    <div className='sticky-header'>
      <div id='main-wrapper' className='main-wrapper'>
        <Header />
        <Breadcrumb title='Faculty Home' current_page='Faculty' />
        <FacultyArea />
        <Footer dark_bg={true} />
      </div>
    </div>
  );
};

export default index;
