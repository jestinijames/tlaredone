'use client';
import React from 'react';

import { home_page_courses } from '@/data/home_data';

import Breadcrumb from '@/components/breadcrumb';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

import CourseDetail from './course-detail';

const parent_page = {
  title: 'Courses Home',
  url: '/courses',
};

const index = ({ slug }: { slug: string }) => {
  console.log(slug);
  const course = findCourseBySlug(slug);

  return (
    <div className='sticky-header'>
      <div id='main-wrapper' className='main-wrapper'>
        <Header />
        <Breadcrumb
          title='Course Details'
          current_page='Course Details'
          parent_page={parent_page}
        />
        <CourseDetail course={course} />
        <Footer dark_bg={true} />
      </div>
    </div>
  );
};

export default index;

function findCourseBySlug(slug: string) {
  const courseDetail = home_page_courses.find((course) => course.slug === slug);
  if (courseDetail) {
    return courseDetail;
  } else {
    // notFound();
  }
}
