/* eslint-disable unused-imports/no-unused-vars */
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import React from 'react';

import menu_data from '@/constant/menu-data';

const MainMenu = () => {
  // Checking login credentials
  const { data: sessionData, status } = useSession();

  return (
    <ul className='mainmenu'>
      {menu_data.map((menu, i) => (
        <li key={i} className='has-droupdown'>
          <a href='#'>{menu.title}</a>
          {!menu.mega_menu && (
            <ul className='submenu'>
              {menu.submenus.map((nav, i) => (
                <li key={i}>
                  <Link href={`${nav.link}`}>
                    {nav.title}
                    {nav?.hot && <span className='badge-1'>Admin</span>}
                    {nav?.new && <span className='badge'>Admin</span>}
                  </Link>
                </li>
              ))}
              {status === 'authenticated' && (
                <li>
                  <Link href='/create-article'>
                    Create Article<span className='badge-1'>Admin</span>
                  </Link>
                </li>
              )}
            </ul>
          )}
          {/* {menu.mega_menu && (
            <ul className='mega-menu'>
              {menu.submenus.map((nav, i) => (
                <li key={i}>
                  <h6 className='menu-title'>{nav.title}</h6>
                  <ul className='submenu mega-sub-menu-01'>
                    {nav.mega_submenu.map((m, i) => (
                      <li key={i}>
                        <Link href={`${m.link}`}>{m.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )} */}
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
