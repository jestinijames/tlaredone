import React from 'react';

import faculty_data from '@/data/faculty';

import FacultyItem from '@/components/faculty/faculty-item';

const FacultyArea = () => {
  return (
    <div className='edu-team-area team-area-1 gap-tb-text'>
      <div className='container'>
        <div
          className='section-title section-center'
          data-sal-delay='150'
          data-sal='slide-up'
          data-sal-duration='800'
        >
          <span className='pre-title'>Faculty</span>
          <h2 className='title'>Course Faculty</h2>
          <span className='shape-line'>
            <i className='icon-19'></i>
          </span>
        </div>
        <div className='row g-5'>
          {faculty_data.map((faculty) => (
            <div
              key={faculty.id}
              className='col-lg-3 col-sm-6 col-12 mb--10'
              data-sal-delay='150'
              data-sal='slide-up'
              data-sal-duration='800'
            >
              <FacultyItem faculty={faculty} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyArea;
