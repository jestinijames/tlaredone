/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AdBanner = ({ home_4 }: { home_4?: any }) => {
  return (
    <div
      className={`${
        home_4 ? 'online-academy-cta-wrapper' : 'university-cta-wrapper'
      } edu-cta-banner-area bg-image`}
    >
      <div className='container'>
        <div className='edu-cta-banner'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div
                className='section-title section-center'
                data-sal-delay='150'
                data-sal='slide-up'
                data-sal-duration='800'
              >
                <h2 className='title'>
                  Get Your Quality Skills{' '}
                  <span className='color-primary'>Certificate</span> Through
                  Truth And Life Academy
                </h2>
                <Link className='edu-btn btn-secondary' href='/contact-us'>
                  Get started now <i className='icon-4'></i>
                </Link>
              </div>
            </div>
          </div>
          <ul className='shape-group'>
            <li className='shape-01 scene'>
              <Image
                height={120}
                width={120}
                src='/images/cta/shape-10.png'
                alt='shape'
              />
            </li>
            <li className='shape-02 scene'>
              <Image
                height={39}
                width={101}
                src='/images/cta/shape-09.png'
                alt='shape'
              />
            </li>
            <li className='shape-03 scene'>
              <Image
                height={174}
                width={158}
                src='/images/cta/shape-08.png'
                alt='shape'
              />
            </li>
            <li className='shape-04 scene'>
              <Image
                height={186}
                width={186}
                src='/images/about/shape-13.png'
                alt='shape'
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
