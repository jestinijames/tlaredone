/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CourseInstructors = ({ instructor }: { instructor: any }) => {
  return (
    <div className='edu-team-grid team-style-1'>
      <div className='inner'>
        <div className='thumbnail-wrap'>
          <div className='thumbnail'>
            <Link href={`/faculty/member/${instructor.slug}`}>
              <Image
                height={320}
                width={270}
                src={`/images/faculty/${instructor.img}`}
                alt='team images'
              />
            </Link>
          </div>
          <ul className='team-share-info'>
            <li>
              <Link href='#'>
                <i className='icon-share-alt'></i>
              </Link>
            </li>
            {instructor.social_links.map((social: any, i: number) => (
              <li key={i}>
                <Link
                  href={social.link}
                  target={social.target ? social.target : ''}
                >
                  <i className={social.icon}></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='content'>
          <h5 className='title'>
            <Link href={`/team-details/${instructor.id}`}>
              {instructor.name}
            </Link>
          </h5>
          <span className='designation'>{instructor.title}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructors;
