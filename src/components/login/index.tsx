'use client';
import Breadcrumb from '@/components/breadcrumb';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import SignInArea from '@/components/login/sign-in-area';

const index = () => {
  return (
    <div className='sticky-header'>
      <div id='main-wrapper' className='main-wrapper'>
        <Header />
        <Breadcrumb title='Home' current_page='Login' />
        <SignInArea />
        <Footer dark_bg={true} />
      </div>
    </div>
  );
};

export default index;
