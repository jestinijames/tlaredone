import Link from 'next/link';
import { FaBible } from 'react-icons/fa';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { FaBrain } from 'react-icons/fa';
import { GiStarFormation } from 'react-icons/gi';
import { RiLightbulbFlashLine } from 'react-icons/ri';

const contents = {
  category_data: [
    {
      icon: <FaBible height={40} width={45} />,
      title: 'Biblical Exposition',
      text: 'Demonstrate proficiency in correctly interpreting, applying, and effectively communicating the teachings of Scriptures in diverse contexts.',
      courses: 7,
      color: 'color-primary-style',
      delay: '100',
    },
    {
      icon: <RiLightbulbFlashLine height={40} width={45} />,
      title: 'Theological Integration',
      text: 'Demonstrate adept understanding and application of Christian doctrines in various aspects of life and ministry endeavors.',
      courses: 4,
      color: 'color-secondary-style',
      delay: '200',
    },

    {
      icon: <FaHandHoldingHeart height={40} width={45} />,
      title: 'Ministry Preparation',
      text: 'Demonstrate the knowledge, skills, habits and Christian disposition necessary for ministry and leadership in the church and the world.',
      courses: 5,
      color: 'color-extra05-style',
      delay: '400',
    },
    {
      icon: <FaBrain height={40} width={45} />,
      title: 'Critical Thinking And Communication',
      text: 'Demonstrate the ability to think critically, argue persuasively, and communicate clearly to those around them.',
      courses: 5,
      color: 'color-extra06-style',
      delay: '400',
    },
    {
      icon: <GiStarFormation height={40} width={45} />,
      title: 'Spiritual Formation',
      text: 'Demonstrate the knowledge and skills necessary to pursue an authentically Christian way of life, manifested by trust in God, exemplified in habits and attitudes that display obedience to Christ’s commands, and love of God and neighbor.',
      courses: 8,
      color: 'color-extra08-style',
      delay: '300',
    },
  ],
};

const CategoryArea = () => {
  return (
    <div className='edu-categorie-area categorie-area-1 edu-section-gap'>
      <div className='container'>
        <div
          className='section-title section-center'
          data-sal-delay='150'
          data-sal='slide-up'
          data-sal-duration='800'
        >
          {/* <span className='pre-title pre-textsecondary'>Categories</span> */}
          <h2 className='title'>
            Our Core <span className='color-primary'>Competencies</span>
          </h2>
          <span className='shape-line'>
            <i className='icon-19'></i>
          </span>
          {/* <p>Consectetur adipiscing elit sed do eiusmod tempor.</p> */}
        </div>

        <div className='row g-5'>
          {contents.category_data.map((category, i) => (
            <div
              key={i}
              className='col-lg-3 col-sm-6'
              data-sal-delay={category.delay}
              data-sal='slide-up'
              data-sal-duration='800'
            >
              <div
                style={{
                  height: '50rem',
                  maxHeight: '50rem',
                }}
                className={`categorie-grid categorie-style-1 ${category.color} edublink-svg-animate`}
              >
                <div className='icon'>{category.icon}</div>
                <div className='content'>
                  <Link href='/course-style-1'>
                    <h5 className='title'>{category.title}</h5>
                  </Link>
                  <p>{category.text}</p>
                  {/* <div className='course-remain'>
                    {category.courses} Courses
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryArea;
