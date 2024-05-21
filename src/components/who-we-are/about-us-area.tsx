import Image from 'next/image';
import React from 'react';

interface MissionItem {
  color: string;
  icon: string;
  title: string;
  text: string;
}

// MissionItem
function MissionItem({ color, icon, title, text }: MissionItem) {
  return (
    <div
      className='single-item'
      data-sal-delay='150'
      data-sal='slide-up'
      data-sal-duration='800'
    >
      <div className={`icon color-extra${color}`}>
        <i className={`icon-${icon}`}></i>
      </div>
      <div className='content'>
        <h4 className='title'>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

const AboutUsArea = () => {
  return (
    <div className='edu-section-gap edu-about-area about-style-8'>
      <div className='container'>
        <div className='row g-5'>
          <div className='col-lg-6'>
            <div className='about-content'>
              <div
                className='section-title section-left'
                data-sal-delay='150'
                data-sal='slide-up'
                data-sal-duration='800'
              >
                <span className='pre-title'>About Us</span>
                <h2 className='title'>
                  Who We <span className='color-secondary'>Are</span>
                </h2>
                <span className='shape-line'>
                  <i className='icon-19'></i>
                </span>
                <p>
                  Truth and Life Academy is a Christian theological institute
                  which exists to offer non-formal theological training to
                  believers in the Lord Jesus Christ to build the church for his
                  glory. Our trainings take place in a non-formal setting with
                  godly men in a discipleship relationship. The emphasis is on
                  assimilation of biblical principles, concepts, truths and
                  personal spiritual growth. The curriculum is specifically
                  designed to impart Bible training that will adequately and
                  effectively equip Christians with necessary knowledge, right
                  attitude and practical skills for the work of local church
                  ministry.
                </p>
              </div>
              <div className='about-mission'>
                <MissionItem
                  color='02'
                  icon='51'
                  title='Our Mission'
                  text='To impart Bible training that will adequately and
                  effectively equip Christians with necessary knowledge, right
                  attitude and practical skills for the work of local church
                  ministry'
                />
                <MissionItem
                  color='06'
                  icon='52'
                  title='Our Vision'
                  text='To offer non-formal theological training to
                  believers in the Lord Jesus Christ to build the church for his
                  glory.The emphasis is on
                  assimilation of biblical principles, concepts, truths and
                  personal spiritual growth.'
                />
              </div>
            </div>
          </div>

          <div className='col-lg-6'>
            <div className='about-image-gallery'>
              <div className='row g-5' id='masonry-gallery'>
                <div className='col-6 masonry-item'>
                  <div
                    className='thumbnail thumbnail-1 mb--30'
                    data-sal-delay='50'
                    data-sal='slide-down'
                    data-sal-duration='1000'
                  >
                    <Image
                      height={320}
                      width={255}
                      src='/images/about/about-13.webp'
                      alt='About Images'
                    />
                  </div>

                  <div
                    className='thumbnail thumbnail-4'
                    data-sal-delay='50'
                    data-sal='slide-up'
                    data-sal-duration='1000'
                  >
                    <Image
                      height={180}
                      width={255}
                      src='/images/about/about-15.webp'
                      alt='About Images'
                    />
                  </div>
                </div>
                <div className='col-6 masonry-item'>
                  <div
                    className='thumbnail thumbnail-2 mb--30'
                    data-sal-delay='50'
                    data-sal='slide-down'
                    data-sal-duration='1000'
                  >
                    <Image
                      height={200}
                      width={255}
                      src='/images/about/about-14.webp'
                      alt='About Images'
                    />
                  </div>
                  <div
                    className='thumbnail thumbnail-3'
                    data-sal-delay='50'
                    data-sal='slide-up'
                    data-sal-duration='1000'
                  >
                    <Image
                      height={255}
                      width={255}
                      src='/images/about/about-16.webp'
                      alt='About Images'
                    />
                  </div>
                </div>
              </div>
              <ul className='shape-group'>
                <li
                  className='shape-1 scene'
                  data-sal-delay='500'
                  data-sal='fade'
                  data-sal-duration='200'
                >
                  <Image
                    height={193}
                    width={210}
                    src='/images/about/shape-33.png'
                    alt='Shape Images'
                  />
                </li>
                <li
                  className='shape-2 scene'
                  data-sal-delay='500'
                  data-sal='fade'
                  data-sal-duration='200'
                >
                  <Image
                    height={186}
                    width={186}
                    src='/images/about/shape-25.png'
                    alt='Shape Images'
                  />
                </li>
                <li
                  className='shape-3 scene'
                  data-sal-delay='500'
                  data-sal='fade'
                  data-sal-duration='200'
                >
                  <Image
                    height={186}
                    width={186}
                    src='/images/about/shape-13.png'
                    alt='Shape Images'
                  />
                </li>
                <li
                  className='shape-4 scene'
                  data-sal-delay='500'
                  data-sal='fade'
                  data-sal-duration='200'
                >
                  <span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsArea;
