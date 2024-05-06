/* eslint-disable @next/next/no-img-element */
'use client'; // Error components must be Client Components

import Link from 'next/link';
import * as React from 'react';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Wrapper from '@/components/layout/wrapper';
import SEO from '@/components/seo';
import BreadcrumbTwo from '@/components/ui/breadcrumb-two';

// import TextButton from '@/components/buttons/TextButton';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <Wrapper>
      <SEO pageTitle='404 Page' />
      <Header />
      <BreadcrumbTwo title='Error-404' subtitle='Error-404' />

      <section className='section-gap-equal error-page-area'>
        <div className='container'>
          <div className='edu-error'>
            <div className='thumbnail'>
              <img src='/images/others/404.png' alt='404 Error' />
              <ul className='shape-group'>
                <li className='shape-1 scene'>
                  <img src='/images/about/shape-25.png' alt='Shape' />
                </li>
                <li className='shape-2 scene'>
                  <img src='/images/about/shape-15.png' alt='Shape' />
                </li>
                <li className='shape-3 scene'>
                  <img src='/images/about/shape-13.png' alt='Shape' />
                </li>
                <li className='shape-4 scene'>
                  <img src='/images/counterup/shape-02.png' alt='Shape' />
                </li>
              </ul>
            </div>
            <div className='content'>
              <h2 className='title'>Something went wrong</h2>
              <h4 className='subtitle'>Oops!! Something went wrong.</h4>
              <Link className='edu-btn' href='/'>
                <i className='icon-west'></i>Back to Homepage
              </Link>
            </div>
          </div>
        </div>
        <ul className='shape-group'>
          <li className='shape-1'>
            <img src='/images/others/map-shape-2.png' alt='Shape' />
          </li>
        </ul>
      </section>
      <Footer dark_bg={true} />
    </Wrapper>
  );
}
