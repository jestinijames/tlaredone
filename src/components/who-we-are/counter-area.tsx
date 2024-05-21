import Image from 'next/image';
import React from 'react';

import Counter from '@/components/common/counter';

const counter_data = [
  {
    color: 'primary-color',
    count: 2,
    icon: '48',
    text: '+',
    title: 'Programs',
  },
  {
    color: 'secondary-color',
    count: 15,
    icon: '47',
    text: '+',
    title: 'Courses',
  },
  {
    color: 'extra08-color',
    count: 50,
    icon: '49',
    text: '+',
    title: 'Sessions',
  },
  {
    color: 'extra05-color',
    count: 15,
    icon: '50',
    text: '+',
    title: 'Faculty',
  },
];

const CounterArea = () => {
  return (
    <div className='counterup-area-9'>
      <div className='container edublink-animated-shape'>
        <div className='row g-5'>
          {counter_data.map((c, i) => {
            const { color, count, text, title, icon } = c;
            return (
              <div
                key={i}
                className='col-lg-3 col-sm-6'
                data-sal-delay='150'
                data-sal='slide-up'
                data-sal-duration='800'
              >
                <div className='edu-counterup counterup-style-4'>
                  <div className={`icon ${color}`}>
                    <i className={`icon-${icon}`}></i>
                  </div>
                  <h2 className='counter-item count-number'>
                    <span className='odometer'>
                      <Counter number={count.toString()} text={text} />
                    </span>
                  </h2>
                  <h6 className='title'>{title}</h6>
                </div>
              </div>
            );
          })}
        </div>

        <ul className='shape-group'>
          <li
            className='shape-1 scene'
            data-sal-delay='500'
            data-sal='fade'
            data-sal-duration='200'
          >
            <Image
              height={140}
              width={123}
              src='/images/others/shape-27.png'
              alt='Shape'
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CounterArea;
