/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Breadcrumb from '@/components/breadcrumb';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Wrapper from '@/components/layout/wrapper';

export const metadata: Metadata = {
  title: 'Error Page',
  description: '404.',
};

const ErrorPage = () => {
  return (
    <Wrapper>
      <Header />
      <Breadcrumb title='Error-404' current_page='Error-404' />
      <section className='section-gap-equal error-page-area'>
        <div className='container'>
          <div className='edu-error'>
            <div className='thumbnail'>
              <Image
                height={286}
                width={598}
                src='/images/others/404.png'
                alt='404 Error'
              />
              <ul className='shape-group'>
                <li className='shape-1 scene'>
                  <Image
                    height={186}
                    width={186}
                    src='/images/about/shape-25.png'
                    alt='Shape'
                  />
                </li>
                <li className='shape-2 scene'>
                  <Image
                    height={39}
                    width={101}
                    src='/images/about/shape-15.png'
                    alt='Shape'
                  />
                </li>
                <li className='shape-3 scene'>
                  <Image
                    height={186}
                    width={186}
                    src='/images/about/shape-13.png'
                    alt='Shape'
                  />
                </li>
                <li className='shape-4 scene'>
                  <Image
                    height={175}
                    width={159}
                    src='/images/counterup/shape-02.png'
                    alt='Shape'
                  />
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
            <Image
              height={220}
              width={660}
              src='/images/others/map-shape-2.png'
              alt='Shape'
            />
          </li>
        </ul>
      </section>
      <Footer dark_bg={true} />
    </Wrapper>
  );
};

export default ErrorPage;
