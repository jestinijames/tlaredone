import React from 'react';
import { GiTeacher } from 'react-icons/gi';
import { LiaCertificateSolid } from 'react-icons/lia';
import { PiStudentFill } from 'react-icons/pi';

const categories = [
  {
    icon: <PiStudentFill />,
    title: 'Tailor-made Courses   ',
    text: 'Customized educational programs designed for individualized learning and growth.',
    color: 'color-primary-style',
  },
  {
    icon: <GiTeacher />,
    title: 'Skilled Lecturers',
    text: 'Expert instructors fostering learning through knowledge, experience, and dedication.',
    color: 'color-secondary-style',
  },
  {
    icon: <LiaCertificateSolid />,
    title: 'Certificate Programs',
    text: 'Certificate Programs led by expert mentors, equipping you for success.',
    color: 'color-extra02-style',
  },
];

const Features = () => {
  return (
    <div className='features-area-3 bg-lighten04'>
      <div className='container'>
        <div className='features-grid-wrap'>
          {categories.map((c, i) => (
            <div
              key={i}
              className={`features-box features-style-3 ${c.color} edublink-svg-animate`}
            >
              <div className='icon'>{c.icon}</div>
              <div className='content'>
                <h4 className='title'>{c.title}</h4>
                <p>{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
