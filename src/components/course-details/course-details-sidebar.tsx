/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

const CourseDetailsSidebar = ({
  course,
  details_2 = false,
}: {
  course: any;
  details_2: boolean;
}) => {
  const {
    img,
    certificate,
    videoId,
    course_price,
    instructor,
    duration,
    student,
    language,
  } = course || {};
  //   const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <div
        className={`course-sidebar-3 ${
          details_2 ? '' : 'sidebar-top-position'
        }`}
      >
        <div className='edu-course-widget widget-course-summery'>
          <div className='inner'>
            <div className='thumbnail'>
              <img src={`/images/course/course-01/${img}`} alt='Course Thumb' />
              <div
                // onClick={() => setIsVideoOpen(true)}
                style={{ cursor: 'pointer' }}
                className='play-btn video-popup-activation'
              >
                {/* <i className='icon-18'></i> */}
              </div>
            </div>
            <div className='content'>
              <h4 className='widget-title'>Course Includes:</h4>
              <ul className='course-item'>
                <li>
                  <span className='label'>
                    <i className='icon-62'></i>Instructors:
                  </span>
                  <span className='value'>{instructor}</span>
                </li>

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

              {/* <div className='read-more-btn'>
                <a href='#' className='edu-btn'>
                  Start Now <i className='icon-4'></i>
                </a>
              </div> */}

              <div className='share-area'>
                <h4 className='title'>Share On:</h4>
                <ul className='social-share'>
                  <li>
                    <a href='#'>
                      <i className='icon-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='icon-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='icon-linkedin2'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='icon-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetailsSidebar;
