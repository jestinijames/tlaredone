import Breadcrumb from '@/components/breadcrumb';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import PodcastArea from '@/components/podcasts/podcast-area';

const index = () => {
  return (
    <div className='sticky-header'>
      <div id='main-wrapper' className='main-wrapper'>
        <Header />
        <Breadcrumb title='Podcasts Home' current_page='Podcasts' />
        <PodcastArea />
        <Footer dark_bg={true} />
      </div>
    </div>
  );
};

export default index;
