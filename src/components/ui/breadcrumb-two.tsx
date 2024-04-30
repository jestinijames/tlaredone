/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const BreadcrumbTwo = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className='edu-breadcrumb-area'>
      <div className='container'>
        <div className='breadcrumb-inner'>
          <div className='page-title'>
            <h1 className='title'>{title}</h1>
          </div>
          <ul className='edu-breadcrumb'>
            <li className='breadcrumb-item'>
              <Link href='/'>Home</Link>
            </li>
            <li className='separator'>
              <i className='icon-angle-right'></i>
            </li>
            <li className='breadcrumb-item'>
              <span>Pages</span>
            </li>
            <li className='separator'>
              <i className='icon-angle-right'></i>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              {subtitle}
            </li>
          </ul>
        </div>
      </div>
      <ul className='shape-group'>
        <li className='shape-1'>
          <span></span>
        </li>
        <li className='shape-2 scene'>
          <img src='/images/about/shape-13.png' alt='shape' />
        </li>
        <li className='shape-3 scene'>
          <img src='/images/about/shape-15.png' alt='shape' />
        </li>
        <li className='shape-4'>
          <span></span>
        </li>
        <li className='shape-5 scene'>
          <img src='/images/about/shape-07.png' alt='shape' />
        </li>
      </ul>
    </div>
  );
};

export default BreadcrumbTwo;
