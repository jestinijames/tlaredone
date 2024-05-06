/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

const MemberArea = ({ member }: { member: any }) => {
  return (
    <div className='edu-team-details-area section-gap-equal'>
      <div className='container'>
        <div className='row row--40'>
          <div className='col-lg-4'>
            <div className='team-details-thumb'>
              <div className='thumbnail'>
                <Image
                  height={370}
                  width={370}
                  src={`/images/faculty/detail/${member.detail}`}
                  alt='team images'
                />
              </div>

              <ul className='social-share'>
                <li>
                  <a href='#'>
                    <i className='icon-share-alt'></i>
                  </a>
                </li>
                {member?.social_links?.map((social: any, i: number) => (
                  <li key={i}>
                    <a
                      href={social.link}
                      target={social.target ? social.target : ''}
                    >
                      <i className={social.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='col-lg-8'>
            <div className='team-details-content'>
              <div className='main-info'>
                <span className='subtitle'>Instructor</span>
                <h3 className='title'>{member?.name}</h3>
                <span className='designation'>{member?.title}</span>
                {/* <ul className='team-meta'>
                  <li>
                    <i className='icon-25'></i>20 Students
                  </li>
                  <li>
                    <div className='rating'>
                      <i className='icon-23'></i>
                      <i className='icon-23'></i>
                      <i className='icon-23'></i>
                      <i className='icon-23'></i>
                      <i className='icon-23'></i>
                    </div>
                    <span className='rating-count'>(720 Rating)</span>
                  </li>
                </ul> */}
              </div>

              <div className='bio-describe'>
                <h4 className='title'>About Me</h4>
                <p>{member.sm_text}</p>
              </div>

              {/* <div className='contact-info'>
                <h4 className='title'>Contact Me</h4>
                <ul>
                  <li>
                    <span>Address:</span>North Helenavile, FV77 8WS
                  </li>
                  <li>
                    <span>Email:</span>
                    <a
                      href='mailto:edublink@example.com'
                      target='_blank'
                      rel='noreferrer'
                    >
                      edublink@example.com
                    </a>
                  </li>
                  <li>
                    <span>Phone:</span>
                    <a href='tel:+37(417)683-4409'>+37 (417) 683-4409</a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div
          className='section-title section-center'
          data-sal-delay='150'
          data-sal='slide-up'
          data-sal-duration='800'
        >
          <div className='bio-describe'>
            <h4 className='title'>Subjects</h4>
          </div>
          {/* <h2 className="title">{title}</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                    <p>{text}</p> */}
        </div>
        <div className='row g-5'>
          {member.subjects.map((item: any, i: number) => (
            <div key={i} className='col-lg-4 col-md-6'>
              <div className={`categorie-grid categorie-style-2 ${item.color}`}>
                <div className='content'>
                  <div>
                    <h5 className='title'>{item.title}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberArea;
