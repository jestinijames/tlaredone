import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface OffCanvasPopupProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OffCanvas = ({ isOpen, setIsOpen }: OffCanvasPopupProps) => {
  // const [navTitle, setNavTitle] = useState('');

  // const openMobileMenu = (menu: React.SetStateAction<string>) => {
  //   if (navTitle === menu) {
  //     setNavTitle('');
  //   } else {
  //     setNavTitle(menu);
  //   }
  // };
  return (
    <>
      <div className={`popup-mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className='inner'>
          <div className='header-top'>
            <div className='logo'>
              <Link href='/'>
                <span>
                  <Image
                    className='logo-light'
                    src='/images/logo/logo-dark-3.png'
                    alt='logo'
                    height={72}
                    width={236}
                  />
                  <Image
                    className='logo-dark'
                    src='/images/logo/logo-light-3.png'
                    alt='logo'
                    height={72}
                    width={236}
                  />
                </span>
              </Link>
            </div>

            <div className='close-menu' onClick={() => setIsOpen(false)}>
              <button className='close-button'>
                <i className='icon-73'></i>
              </button>
            </div>
          </div>

          <div className='mm-menu'>
            <ul>
              <li>
                <Link href='/who-we-are'>Who We Are</Link>
              </li>
              <li>
                <Link href='/what-we-teach'>What We Teach</Link>
              </li>
              <li>
                <Link href='/faculty'>Faculty</Link>
              </li>
              <li>
                <Link href='/courses'>Courses</Link>
              </li>
              <li>
                <Link href='/courses'>Articles</Link>
              </li>
              <li>
                <Link href='/podcasts'>Podcasts</Link>
              </li>
              <li>
                <Link href='/login'>Login</Link>
              </li>
              <li>
                <Link href='/create-article'>Create Article</Link>
              </li>
              <li>
                <Link
                  className='edu-btn btn-secondary'
                  style={{
                    textAlign: 'center',
                    padding: '0',
                  }}
                  href='/contact-us'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* DONT DELETE */}
            {/* <ul>
              {menu_data.map((menu, i) => (
                <li
                  key={i}
                  className={
                    !menu.submenus
                      ? ''
                      : navTitle === menu?.title
                      ? 'has-droupdown active'
                      : 'has-droupdown'
                  }
                >
                  {menu.submenus && (
                    <button onClick={() => openMobileMenu(menu.title)}>
                      {menu.title}{' '}
                    </button>
                  )}

                  {!menu.mobile_pages_menu && (
                    <ul
                      className={
                        navTitle === menu?.title
                          ? 'sub-menu active'
                          : 'sub-menu'
                      }
                    >
                      {menu?.submenus?.map((sub, i) => (
                        <li key={i}>
                          <Link href={`${sub.link}`}>{sub.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {menu.mobile_pages_menu && (
                    <ul
                      className={
                        navTitle === menu?.title
                          ? 'sub-menu active'
                          : 'sub-menu'
                      }
                    >
                      {menu?.mobile_pages_menu?.map((sub, i) => (
                        <li key={i}>
                          <Link href={`${sub.link}`}>{sub.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {!menu.submenus && <Link href={menu.link}>{menu.title}</Link>}
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>

      {/* overlay start */}
      <div
        onClick={() => setIsOpen(false)}
        className={`body-overlay ${isOpen ? 'apply' : ''}`}
      ></div>
      {/* overlay end */}
    </>
  );
};

export default OffCanvas;
