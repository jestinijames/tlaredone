'use client';
import { notFound } from 'next/navigation';
import React from 'react';

import course_data from '@/data/course-data';

import Breadcrumb from '@/components/breadcrumb';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

import CourseDetail from './course-detail';

const parent_page = {
  title: 'Courses Home',
  url: '/courses',
};

const index = ({ slug }: { slug: string }) => {
  const course = findCourseBySlug(slug);

  return (
    <div className='sticky-header'>
      <div id='main-wrapper' className='main-wrapper'>
        <Header />
        <Breadcrumb
          title={course?.title}
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
  const courseDetail = course_data.find((course) => course.slug === slug);
  if (courseDetail) {
    return courseDetail;
  } else {
    notFound();
  }
}
