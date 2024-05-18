/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';
import React, { useState } from 'react';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { TbPhonePlus } from 'react-icons/tb';

import useSticky from '@/hooks/use-sticky';

import SearchPopup from '@/components/common/popup-modal/search-popup';
import MainMenu from '@/components/layout/main-menu';

import OffCanvas from '../../components/common/sidebar/off-canvas';

interface HeaderProps {
  style_3?: boolean;
  no_topBar?: boolean;
}

const Header = ({ style_3, no_topBar = false }: HeaderProps) => {
  const { sticky } = useSticky();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const { data, status } = useSession();

  const router = useRouter();

  return (
    <>
      <header
        className={`edu-header header-style-${style_3 ? '3' : '2'} ${
          no_topBar ? 'no-topbar' : ''
        }`}
      >
        {!no_topBar && (
          <div className='header-top-bar'>
            <div className='container'>
              <div className='header-top'>
                <div className='header-top-left'>
                  <ul className='header-info'>
                    <li>
                      {/* <Link href='/contact-us'> */}
                      <i className='icon-phone'></i>Want a call? Drop us a
                      message
                      {/* </Link> */}
                    </li>
                    <li>
                      <Link
                        href='mailto:info@truthandlifeacademy.org'
                        rel='noreferrer'
                        target='_blank'
                      >
                        <i className='icon-envelope'></i>Email:
                        info@truthandlifeacademy.org
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className='header-top-right'>
                  <ul className='header-info'>
                    {status === 'unauthenticated' && (
                      <li>
                        <Link
                          onClick={(e: any) => {
                            e.preventDefault();
                            signIn('google');
                          }}
                          href='#'
                        >
                          Login
                        </Link>
                      </li>
                    )}
                    {status === 'authenticated' && (
                      <>
                        <li>
                          <Link
                            onClick={async (e) => {
                              e.preventDefault();
                              await signOut({ redirect: false });
                              router.push('/');
                            }}
                            href='#'
                          >
                            Logout
                          </Link>
                        </li>
                        <li>Welcome {data.user?.name}</li>
                      </>
                    )}
                    <li className='header-btn'>
                      <Link
                        href='/contact-us'
                        className={`edu-btn ${
                          style_3 ? '' : 'btn-secondary'
                        } btn-medium`}
                      >
                        Contact Us{' '}
                        <TbPhonePlus
                          style={{
                            marginBottom: '0.2rem',
                          }}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        <div id='edu-sticky-placeholder'></div>

        <div className={`header-mainmenu ${sticky ? 'edu-sticky' : ''}`}>
          <div className='container'>
            <div className='header-navbar'>
              <div className='header-brand'>
                <div className='logo'>
                  <Link href='/'>
                    <Image
                      className='logo-light'
                      src='/images/logo/logo-dark-3.png'
                      alt='TLA Logo'
                      height={72}
                      width={236}
                    />
                    <Image
                      className='logo-dark'
                      src='/images/logo/logo-light-3.png'
                      alt='TLA Logo'
                      height={72}
                      width={236}
                    />
                  </Link>
                </div>
              </div>

              <div className='header-mainnav'>
                <nav className='mainmenu-nav'>
                  <MainMenu />
                </nav>
              </div>

              <div className='header-right'>
                <ul className='header-action'>
                  <li
                    className='icon search-icon'
                    onClick={() => setIsSearchOpen(true)}
                  >
                    <a style={{ cursor: 'pointer' }} className='search-trigger'>
                      <i className='icon-2'></i>
                    </a>
                  </li>
                  <li className='icon'>
                    <Link
                      className='wishlist mobile-menu-bar d-block d-xl-none'
                      href='#'
                      onClick={(e) => {
                        e.preventDefault();
                        setTheme(theme === 'light' ? 'dark' : 'light');
                      }}
                    >
                      {theme === 'light' ? (
                        <BsFillMoonStarsFill
                          style={{
                            marginBottom: '1rem',
                          }}
                          className='icon-22'
                        />
                      ) : (
                        <BsSunFill
                          style={{
                            marginBottom: '1rem',
                          }}
                          className='icon-22'
                        />
                      )}
                    </Link>
                  </li>

                  <li className='mobile-menu-bar d-block d-xl-none'>
                    <button
                      className='hamberger-button'
                      onClick={() => setIsOpen(true)}
                    >
                      <i className='icon-54'></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Start Search Popup  --> */}
        <SearchPopup
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
        {/* <!-- End Search Popup  --> */}
      </header>

      {/* sidebar start */}
      <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* sidebar end */}
    </>
  );
};

export default Header;
