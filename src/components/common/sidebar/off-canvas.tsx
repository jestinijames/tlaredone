import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import menu_data from '@/constant/menu-data';

interface OffCanvasPopupProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OffCanvas = ({ isOpen, setIsOpen }: OffCanvasPopupProps) => {
  const [navTitle, setNavTitle] = useState('');

  const openMobileMenu = (menu: React.SetStateAction<string>) => {
    if (navTitle === menu) {
      setNavTitle('');
    } else {
      setNavTitle(menu);
    }
  };
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
                    src='/images/logo/logo-dark.png'
                    alt='logo'
                    height={50}
                    width={158}
                  />
                  <Image
                    className='logo-dark'
                    src='/images/logo/logo-white.png'
                    alt='logo'
                    height={50}
                    width={158}
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
            </ul>
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
