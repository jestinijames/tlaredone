'use client';

import React from 'react';

import Breadcrumb from '@/components/breadcrumb';
import CourseArea from '@/components/courses/course-area';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

const index = () => {
  return (
    <div className='sticky-header'>
      <div id='main-wrapper' className='main-wrapper'>
        <Header />
        <Breadcrumb title='Courses' current_page='Courses' />
        <CourseArea />
        <Footer dark_bg={true} />
      </div>
    </div>
  );
};

export default index;
