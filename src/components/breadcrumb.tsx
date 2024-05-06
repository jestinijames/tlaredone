import Link from 'next/link';
import React from 'react';

const Breadcrumb = ({
  title,
  current_page,
  parent_page,
}: {
  title?: string;
  current_page: string;
  parent_page?: { title: string; url: string };
}) => {
  return (
    <div className='edu-breadcrumb-area breadcrumb-style-2 bg-image bg-image--19'>
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
            {parent_page && (
              <>
                <li className='breadcrumb-item'>
                  <Link href={parent_page.url}>{parent_page.title}</Link>
                </li>
                <li className='separator'>
                  <i className='icon-angle-right'></i>
                </li>
              </>
            )}
            <li className='breadcrumb-item active' aria-current='page'>
              {current_page}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
