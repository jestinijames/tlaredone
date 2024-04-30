/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface SingleTeachingProps {
  show?: boolean;
  id: string;
  title: string;
  desc: any;
}

const SingleTeaching = ({
  show = false,
  id,
  title,
  desc,
}: SingleTeachingProps) => {
  return (
    <div className='accordion-item'>
      <h5 className='accordion-header'>
        <button
          className={`accordion-button ${show ? '' : 'collapsed'}`}
          type='button'
          data-bs-toggle='collapse'
          data-bs-target={`#question-${id}`}
          aria-expanded={show ? 'true' : 'false'}
        >
          {title}
        </button>
      </h5>
      <div
        id={`question-${id}`}
        className={`accordion-collapse collapse ${show ? 'show' : ''}`}
        data-bs-parent='#faq-accordion'
      >
        <div className='accordion-body'>
          <>{desc}</>
        </div>
      </div>
    </div>
  );
};

export default SingleTeaching;
