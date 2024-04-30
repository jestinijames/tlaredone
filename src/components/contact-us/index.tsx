'use client';

import React from 'react';

import Breadcrumb from '@/components/breadcrumb';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

import ContactMeArea from './contact-me-area';
import ContactMeFormArea from './contact-me-form-area';

// import WhatWeTeachArea from './what-we-teach-area';

const index = () => {
  return (
    <div className='sticky-header'>
      <div id='main-wrapper' className='main-wrapper'>
        <Header />
        <Breadcrumb title='Contact Us' current_page='Contact Us' />
        <ContactMeArea />
        <ContactMeFormArea />
        {/* <WhatWeTeachArea /> */}
        <Footer dark_bg={true} />
      </div>
    </div>
  );
};

export default index;
