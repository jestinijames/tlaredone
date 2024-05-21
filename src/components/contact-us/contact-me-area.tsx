import Image from 'next/image';
import React from 'react';

import { SocialShare } from '@/components/social-share';

import { siteConfig } from '@/constant/config';

const ContactMeArea = () => {
  return (
    <section className='section-gap-equal contact-me-area'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-9'>
            <div className='contact-me'>
              <div className='inner'>
                <div className='thumbnail'>
                  <div className='thumb'>
                    <Image
                      height={390}
                      width={390}
                      src='/images/others/contact-me.webp'
                      alt='Contact Me'
                    />
                  </div>
                  <ul className='shape-group'>
                    <li className='shape-1 scene'>
                      <Image
                        height={186}
                        width={186}
                        src='/images/about/shape-13.png'
                        alt='Shape'
                      />
                    </li>
                    <li className='shape-2 scene'>
                      <Image
                        height={175}
                        width={159}
                        src='/images/counterup/shape-02.png'
                        alt='Shape'
                      />
                    </li>
                    <li className='shape-3'>
                      <Image
                        height={191}
                        width={123}
                        src='/images/about/shape-07.png'
                        alt='Shape'
                      />
                    </li>
                  </ul>
                </div>

                <div className='contact-us-info'>
                  <h3 className='heading-title'>
                    We will try to Answer all Your Questions
                  </h3>
                  <ul className='address-list'>
                    <li>
                      <h5 className='title'>Email</h5>
                      <p>
                        <a href={`mailto:${siteConfig.email}`}>
                          {siteConfig.email}
                        </a>
                      </p>
                    </li>
                  </ul>
                  <ul className='social-share'>
                    <li>
                      <a href='#'>
                        <i className='icon-share-alt'></i>
                      </a>
                    </li>
                    <SocialShare />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMeArea;
