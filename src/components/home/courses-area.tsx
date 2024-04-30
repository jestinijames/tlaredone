/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

import { home_page_courses } from '@/data/home_data';

import CourseType from './course-type';

const CoursesArea = () => {
  const [category, setCategory] = useState('Scripture');
  const category_items = home_page_courses.filter((course) =>
    course.filter_category?.includes(category)
  );
  const [coursesItems, setCoursesItems] = useState(category_items);

  const handleCategoryItems = (c: any) => {
    setCategory(c);
    const filtering_category_courses = home_page_courses.filter((course) =>
      course.filter_category?.includes(c)
    );
    setCoursesItems(filtering_category_courses);
  };

  return (
    <div className='edu-about-area about-style-3 bg-lighten04'>
      <div className='container'>
        <div
          className='section-title section-center'
          data-sal-delay='150'
          data-sal='slide-up'
          data-sal-duration='800'
        >
          <span className='pre-title'>Popular Courses</span>
          <h2 className='title'>Academic Programs</h2>
          <span className='shape-line'>
            <i className='icon-19'></i>
          </span>
        </div>

        <div className='isotope-wrapper'>
          <div className='isotop-button'>
            <button
              onClick={() => handleCategoryItems('Scripture')}
              className={category === 'Scripture' ? 'is-checked' : ''}
            >
              <span className='filter-text'>The Holy Scripture</span>
            </button>
            <button
              onClick={() => handleCategoryItems('The Old Testament')}
              className={category === 'The Old Testament' ? 'is-checked' : ''}
            >
              <span className='filter-text'>The Old Testament</span>
            </button>
            <button
              onClick={() => handleCategoryItems('The New Testament')}
              className={category === 'The New Testament' ? 'is-checked' : ''}
            >
              <span className='filter-text'>The New Testament</span>
            </button>
          </div>

          <div
            className='row g-5'
            data-sal-delay='100'
            data-sal='slide-up'
            data-sal-duration='800'
          >
            {coursesItems.map((course, _) => {
              return (
                <div className='col-md-6 col-lg-4' key={course.id}>
                  <CourseType data={course} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ul className='shape-group'>
        <li className='shape-5'>
          <img
            className='rotateit'
            src='/images/about/shape-13.png'
            alt='Shape'
          />
        </li>
        <li className='shape-6'>
          <span></span>
        </li>
      </ul>
    </div>
  );
};

export default CoursesArea;
