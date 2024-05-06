/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CourseType = ({ data, classes }: { data: any; classes?: any }) => {
  return (
    <div
      className={`edu-course course-style-4 course-style-9 ${
        classes ? classes : ''
      }`}
    >
      <div className='inner'>
        <div className='thumbnail'>
          <Link href={`/courses/course-details/${data.slug}`}>
            <Image
              height={200}
              width={200}
              src={`/images/course/${data.img}`}
              alt='Course Thumb'
            />
          </Link>
          {/* <div className='time-top'>
            <span className='duration'>
              <i className='icon-61'></i>
              {data.duration}
            </span>
          </div> */}
        </div>

        <div className='content'>
          {/* <div className='course-price'>${data?.course_price}</div> */}

          <h6 className='title'>
            <Link href={`/courses/course-details/${data.slug}`}>
              {data.title}
            </Link>
          </h6>

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

          <p>{data.short_desc}</p>

          <ul className='course-meta'>
            {data.tags.map((tag: any, index: number) => (
              <li key={index}>
                <i className='icon-24'></i>
                {tag}
              </li>
            ))}
            {/* <li>
              <i className='icon-24'></i>
              {data.lesson} Lessons
            </li>
            <li>
              <i className='icon-25'></i>
              {data.student} Students
            </li> */}
          </ul>
        </div>
      </div>
      <div className='hover-content-aside'>
        <div className='content'>
          <span className='course-level'>{data.level}</span>

          <h5 className='title'>
            <Link href={`/courses/course-details/${data.slug}`}>
              {data.title}
            </Link>
          </h5>

          {/* <div className='course-rating'>
            <div className='rating'>
              <i className='icon-23'></i>
              <i className='icon-23'></i>
              <i className='icon-23'></i>
              <i className='icon-23'></i>
              <i className='icon-23'></i>
            </div>
            <span className='rating-count'>({data.rating})</span>
          </div> */}

          {/* <ul className='course-meta'>
            <li>{data.lesson} Lessons</li>
            <li>{data.duration}</li>
            <li>{data.level}</li>
          </ul> */}

          <div className='course-feature'>
            <h6 className='title'>Goals</h6>
            <ul>
              {data.goals.slice(0, 3).map((feature: any, featurekey: any) => (
                <li key={featurekey}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseType;
