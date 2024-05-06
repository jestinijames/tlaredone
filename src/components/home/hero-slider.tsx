'use client';

/* eslint-disable @next/next/no-img-element */
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

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
  return (
    <div className='hero-banner hero-style-3 bg-image'>
      {/* <Swiper
        navigation
        pagination={{ type: 'fraction' }}
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => console.log(swiper)}
        className='h-96 w-full rounded-lg'
      > */}
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        // lazy={true}
        pagination={false}
        grabCursor={true}
        draggable={true}
        modules={[Autoplay, EffectFade, Navigation]}
        effect='fade'
        className='swiper university-activator'
        speed={1000}
        autoplay={{
          delay: 5500,
        }}
        navigation={{
          nextEl: '.slide-next',
          prevEl: '.slide-prev',
        }}
        // lazy={{
        //   loadPrevNext: false,
        //   loadPrevNextAmount: 1,
        // }}
      >
        {slider_data.map((item) => {
          const { id, sm_text, src, subtitle, title } = item;
          return (
            <SwiperSlide key={id}>
              <img
                data-transform-origin='center center'
                src={src}
                className='swiper-lazy'
                alt='image'
              />
              <div className='thumbnail-bg-content'>
                <div className='container edublink-animated-shape'>
                  <div className='row'>
                    <div className='col-7'>
                      <div className='banner-content'>
                        <span
                          className='subtitle'
                          data-sal='slide-up'
                          data-sal-duration='1000'
                        >
                          {subtitle}
                        </span>
                        <h1
                          className='title'
                          data-sal-delay='100'
                          data-sal='slide-up'
                          data-sal-duration='1000'
                        >
                          {title}
                        </h1>
                        <p
                          data-sal-delay='200'
                          data-sal='slide-up'
                          data-sal-duration='1000'
                        >
                          {sm_text}
                        </p>
                        <div
                          className='banner-btn'
                          data-sal-delay='400'
                          data-sal='slide-up'
                          data-sal-duration='1000'
                        >
                          {/* <Link
                            className='edu-btn btn-secondary'
                            href='/course-style-1'
                          >
                            {btn_text} <i className='icon-4'></i>
                          </Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div className='hero-slider-bg-controls'>
          <div className='swiper-slide-controls slide-prev'>
            <i className='icon-west'></i>
          </div>
          <div className='swiper-slide-controls slide-next'>
            <i className='icon-east'></i>
          </div>
        </div>
      </Swiper>

      <ul className='shape-group'>
        <li
          className='shape-1 scene'
          data-sal-delay='1000'
          data-sal='fade'
          data-sal-duration='1000'
        >
          <img src='/images/others/shape-10.png' alt='Shape' />
        </li>
        <li
          className='shape-2 scene'
          data-sal-delay='1000'
          data-sal='fade'
          data-sal-duration='1000'
        >
          <img src='/images/others/shape-11.png' alt='Shape' />
        </li>
        <li className='shape-3'>
          <img src='/images/others/shape-25.png' alt='Shape' />
        </li>
      </ul>
    </div>
  );
};

export default HeroSlider;
