import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

import AdBanner from './ad-banner';
import BlogArea from './blog-area';
import CoursesArea from './courses-area';
import Cta from './cta';
import Features from './features';
import HeroSlider from './hero-slider';
import VideoArea from './video-area';

const index = () => {
  return (
    <div className='sticky-header'>
      <div id='main-wrapper' className='main-wrapper'>
        <Header />
        <HeroSlider />
        <Features />
        <CoursesArea />
        <VideoArea />
        <Cta />
        <BlogArea />
        <AdBanner />
        <Footer dark_bg={true} />
      </div>
    </div>
  );
};

export default index;
