/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

import faculty_data from '@/data/faculty';

import CourseInstructors from '@/components/course-details/course-instructors';

const CourseDetail = ({ course }: { course: any }) => {
  const { cover_img, language, certificate, instructors, short_desc, goals } =
    course || {};
  return (
    <section className='event-details-area edu-section-gap'>
      <div className='container'>
        <div className='event-details'>
          <div className='main-thumbnail'>
            <Image
              height={420}
              width={1170}
              src={`/images/course/${cover_img}`}
              alt='Event'
            />
          </div>
          <div className='row row--30'>
            <div className='col-lg-8'>
              <div className='course-details-content course-details-2'>
                <div className='course-overview'>
                  <h3>About The Course</h3>
                  <p>{short_desc}</p>

                  <div className='border-box'>
                    <h5
                      className='title'
                      data-sal-delay='150'
                      data-sal='slide-up'
                      data-sal-duration='800'
                    >
                      Goals
                    </h5>
                    <div className='row g-5'>
                      <div
                        data-sal-delay='150'
                        data-sal='slide-up'
                        data-sal-duration='800'
                      >
                        <ul>
                          {goals.map((goal: string, index: number) => (
                            <li key={index}>{goal}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4'>
              <div className='course-sidebar-3'>
                <div className='edu-course-widget widget-course-summery'>
                  <div className='inner'>
                    <div className='content'>
                      <h4 className='widget-title'>Additional Info:</h4>
                      <ul className='course-item'>
                        {instructors.map((instructor: any) => (
                          <li key={instructor.id}>
                            <span className='label'>
                              <i className='icon-62'></i>Instructor:
                            </span>
                            <span className='value'>{instructor.name}</span>
                          </li>
                        ))}

                        <li>
                          <span className='label'>
                            <i className='icon-59'></i>Language:
                          </span>
                          <span className='value'>{language}</span>
                        </li>

                        <li>
                          <span className='label'>
                            <i className='icon-64'></i>Certificate:
                          </span>
                          <span className='value'>{certificate}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='event-speaker'>
          <h3 className='heading-title'>Instructors</h3>
          <div className='row g-5'>
            {instructors.map((instructor: any) => {
              const instructorData = findFacultyByName(instructor.name);

              return (
                <div
                  key={instructor.id}
                  className='col-lg-3 col-sm-6 col-12'
                  data-sal-delay={instructor.delay}
                  data-sal='slide-up'
                  data-sal-duration='800'
                >
                  <CourseInstructors instructor={instructorData} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;

function findFacultyByName(name: string) {
  const facultyDetail = faculty_data.find((faculty) => faculty.name === name);
  if (facultyDetail) {
    return facultyDetail;
  } else {
    notFound();
  }
}
