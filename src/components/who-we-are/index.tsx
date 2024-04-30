'use client';

import React from 'react';

import Breadcrumb from '@/components/breadcrumb';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

import WhoWeAreArea from './who-we-are-area';

const index = () => {
  return (
    <div className='sticky-header'>
      <div id='main-wrapper' className='main-wrapper'>
        <Header />
        <Breadcrumb title='Who We Are' current_page='Who We Are' />
        <WhoWeAreArea />
        <Footer dark_bg={true} />
      </div>
    </div>
  );
};

export default index;
