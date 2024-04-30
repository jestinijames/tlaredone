/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Wrapper from '@/components/layout/wrapper';
import BreadcrumbTwo from '@/components/ui/breadcrumb-two';

import SEO from '../components/seo';

const ErrorPage = () => {
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
              <h2 className='title'>404 - Page Not Found</h2>
              <h4 className='subtitle'>
                The page you are looking for does not exist.
              </h4>
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
};

export default ErrorPage;
