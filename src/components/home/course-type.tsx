/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
const CourseType = ({ data, classes }: { data: any; classes?: any }) => {
  return (
    <div className={`edu-course course-style-3 ${classes ? classes : ''}`}>
      <div className='inner'>
        <div className='thumbnail'>
          <Link href={`/courses/course-details/${data.slug}`}>
            <img
              src={`/images/course/course-04/${data.img}`}
              alt='Course Meta'
            />
          </Link>
          {/* <div className='time-top'>
            <span className='duration'>
              <i className='icon-61'></i>
              {data.course_outline}
            </span>
          </div> */}
        </div>

        <div className='content'>
          {data.filter_category.map((item: any, index: number) => (
            <span
              key={index}
              className='course-level'
              style={{
                marginLeft: index > 0 ? '1rem' : undefined,
              }}
            >
              {item}
            </span>
          ))}

          <h5 className='title'>
            <Link href={`/course-details/${data.id}`}>{data.title}</Link>
          </h5>
          <p>{data.short_desc}</p>
          {/* <div className='course-rating'>
            <div className='rating'>
              <i className='icon-23'></i>
              <i className='icon-23'></i>
              <i className='icon-23'></i>
              <i className='icon-23'></i>
              <i className='icon-23'></i>
            </div>
            <span className='rating-count'>
              ({data.rating} /{data.rating_count} Rating)
            </span>
          </div> */}
          <div className='read-more-btn'>
            <Link
              className='edu-btn btn-small btn-secondary'
              style={{ cursor: 'pointer' }}
              href={`/courses/course-details/${data.slug}`}
            >
              Learn More
              <i className='icon-4'></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseType;
