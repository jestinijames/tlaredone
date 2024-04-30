/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import courses_data from '@/data/courses-data';

import CourseSidebar from '@/components/courses/course-sidebar';
import CourseSortingArea from '@/components/courses/course-sorting-area';

import CourseItems from './course-items';

// course_items
const course_items = courses_data.filter(
  (arr, index, self) => index === self.findIndex((i) => i.img === arr.img)
);

const CourseArea = () => {
  const [showing, setShowing] = useState(0);
  const { categories, instructors, levels, languages, price } = useSelector(
    (state: any) => state.filter
  );

  const items = course_items
    ?.filter((item1) =>
      categories?.length !== 0
        ? categories?.some((item2: any) => item1.category == item2)
        : item1
    )
    .filter((item1) =>
      instructors?.length !== 0
        ? instructors?.some((item2: any) => item1.instructor == item2)
        : item1
    )
    .filter((item1) =>
      levels?.length !== 0
        ? levels?.some((item2: any) => item1.level == item2)
        : item1
    )
    .filter((item1) =>
      languages?.length !== 0
        ? languages?.some((item2: any) => item1.language == item2)
        : item1
    )
    .filter((item) => Number(item.course_price) <= price);

  return (
    <div className='edu-course-area course-area-1 section-gap-equal'>
      <div className='container'>
        <div className='row g-5'>
          <div className='col-lg-3 order-lg-2'>
            <CourseSidebar course_items={course_items} />
          </div>

          <div className='col-lg-9 col-pr--35 order-lg-1'>
            {/* sorting area start */}
            <CourseSortingArea
              // course_items={course_items}
              course_list={true}
              num={showing}
              // setCourses={setCourses}
              // courses={courses}
              items={items}
            />
            {/* sorting area end */}

            <CourseItems
              itemsPerPage={6}
              items={items}
              setShowing={setShowing}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseArea;
