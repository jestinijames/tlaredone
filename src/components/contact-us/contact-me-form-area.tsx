import Image from 'next/image';
import React from 'react';

import ContactMeForm from './contact-me-form';

const ContactMeFormArea = () => {
  return (
    <section className='edu-section-gap contact-form-area'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='contact-form'>
              <div className='section-title section-center'>
                <h3 className='title'>Just drop us a message</h3>
              </div>
              <ContactMeForm />
            </div>
          </div>
        </div>
      </div>
      <ul className='shape-group'>
        <li className='shape-1 scene'>
          <Image
            height={39}
            width={101}
            src='/images/about/shape-15.png'
            alt='shape'
          />
        </li>
        <li className='shape-2 scene'>
          <Image
            height={106}
            width={106}
            src='/images/cta/shape-04.png'
            alt='shape'
          />
        </li>
        <li className='shape-3 scene'>
          <span></span>
        </li>
        <li className='shape-4 scene'>
          <Image
            height={186}
            width={186}
            src='/images/about/shape-13.png'
            alt='shape'
          />
        </li>
      </ul>
    </section>
  );
};

export default ContactMeFormArea;
