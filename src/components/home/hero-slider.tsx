'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const slider_data = [
  {
    id: 1,
    src: '/images/bg/bg-image-17.webp',
    subtitle: 'WELCOME TO',
    title: 'Truth And Life Academy',
    sm_text:
      'The mission of Truth and Life Academy is to glorify the Lord Jesus Christ by training Christians for the proclamation of His Word and the building up of His church.',
    btn_text: 'Find courses',
  },
  {
    id: 2,
    src: '/images/bg/bg-image-28.webp',
    subtitle: 'WELCOME TO',
    title: 'Truth And Life Academy',
    sm_text:
      'The mission of Truth and Life Academy is to glorify the Lord Jesus Christ by training Christians for the proclamation of His Word and the building up of His church.',
    btn_text: 'Find courses',
  },
  {
    id: 3,
    src: '/images/bg/bg-image-26.webp',
    subtitle: 'WELCOME TO',
    title: 'Truth And Life Academy',
    sm_text:
      'The mission of Truth and Life Academy is to glorify the Lord Jesus Christ by training Christians for the proclamation of His Word and the building up of His church.',
    btn_text: 'Find courses',
  },
];

const HeroSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  return (
    <>
      <div className='hero-banner hero-style-9'>
        <div className='slider'>
          <div className='container'>
            <Swiper
              spaceBetween={0}
              speed={1000}
              autoplay={{
                delay: 5000,
              }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              navigation={{
                nextEl: '.slide-next',
                prevEl: '.slide-prev',
              }}
              className='swiper health-slider-content'
            >
              {slider_data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className='inner'>
                    <span className='pre-title color-primary'>
                      {item.title}
                    </span>
                    <h1 className='title'>{item.title}</h1>
                    <p>{item.sm_text} </p>
                    <div className='banner-btn'>
                      <a href='/courses' className='edu-btn'>
                        Find courses <i className='icon-4'></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <!-- end slider-content --> */}
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={1}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className='swiper health-slider-main'
            >
              {slider_data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div
                    className='slide-image'
                    style={{ backgroundImage: `url(${item.src})` }}
                  ></div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <!-- end slider-main --> */}
            <ul className='shape-group'>
              <li className='shape-1'>
                <span></span>
              </li>
              <li className='shape-2'>
                <Image
                  className='rotateit'
                  src='/assets/images/about/shape-25.png'
                  alt='Shape'
                  width={180} // Adjust width as needed
                  height={180} // Adjust height as needed
                />
              </li>
            </ul>
          </div>
        </div>
        <ul className='shape-group'>
          <li
            className='shape-3 scene'
            data-sal-delay='1000'
            data-sal='fade'
            data-sal-duration='1000'
          >
            <Image
              data-depth='2'
              src='/assets/images/others/health-shape-33.png'
              alt='Shape'
              width={180} // Adjust width as needed
              height={180} // Adjust height as needed
            />
          </li>
          <li
            className='shape-4 scene'
            data-sal-delay='1000'
            data-sal='fade'
            data-sal-duration='1000'
          >
            <Image
              data-depth='2'
              src='/assets/images/others/health-shape-34.png'
              alt='Shape'
              width={180} // Adjust width as needed
              height={180} // Adjust height as needed
            />
          </li>
          <li className='shape-5'>
            <Image
              src='/assets/images/counterup/shape-02.png'
              alt='image'
              width={180} // Adjust width as needed
              height={180} // Adjust height as needed
            />
          </li>
          <li
            className='shape-6 scene'
            data-sal-delay='1000'
            data-sal='fade'
            data-sal-duration='1000'
          >
            <Image
              data-depth='-2'
              src='/assets/images/about/shape-13.png'
              alt='Shape'
              width={180} // Adjust width as needed
              height={180} // Adjust height as needed
            />
          </li>
        </ul>
        <div className='hero-slider-bg-controls'>
          <div className='swiper-slide-controls slide-prev'>
            <i className='icon-west'></i>
          </div>
          <div className='swiper-slide-controls slide-next'>
            <i className='icon-east'></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
