/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import React from 'react';

const FacultyItem = ({ faculty }: { faculty: any }) => {
  return (
    <div className='edu-team-grid team-style-1'>
      <div className='inner'>
        <div className='thumbnail-wrap'>
          <div className='thumbnail'>
            <Link href={`/faculty/member/${faculty.slug}`}>
              <img
                src={`/images/team/team-01/${faculty.img}`}
                alt='faculty image'
              />
            </Link>
          </div>
          <ul className='team-share-info'>
            <li>
              <a href='#'>
                <i className='icon-share-alt'></i>
              </a>
            </li>
            {faculty.social_links.map((social: any, i: number) => (
              <li key={i}>
                <a
                  href={social.link}
                  target={social.target ? social.target : ''}
                >
                  <i className={social.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='content'>
          <h5 className='title'>
            <Link href={`/team-details/${faculty.id}`}>{faculty.name}</Link>
          </h5>
          <span className='designation'>{faculty.title}</span>
        </div>
      </div>
    </div>
  );
};

export default FacultyItem;
