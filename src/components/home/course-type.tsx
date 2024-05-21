/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const CourseType = ({ data, classes }: { data: any; classes?: any }) => {
  return (
    <div className={`edu-course course-style-3 ${classes ? classes : ''}`}>
      <div className='inner'>
        <div className='thumbnail'>
          <Link href={`/courses/course-details/${data.slug}`}>
            <Image
              height={250}
              width={370}
              src={`/images/course/course-04/${data.img}`}
              alt={data.title}
            />
          </Link>
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
          <p
            style={{
              height: '20rem',
              maxHeight: '20rem',
            }}
          >
            {data.short_desc}
          </p>

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
