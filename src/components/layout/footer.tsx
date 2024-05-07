import Image from 'next/image';
import Link from 'next/link';

import FooterSocial from '@/components/layout/footer-social';

import { siteConfig } from '@/constant/config';

const footer_contents = {
  logoLight: '/images/logo/logo-dark.png',
  logoDark: '/images/logo/logo-white.png',
  desc: 'The mission of Truth and Life Academy is to glorify the Lord Jesus Christ by training Christians for the proclamation of His Word and the building up of His church.',
  add: '70-80 Upper St Norwich NR2',
  call: '+01 123 5641 231',
  email: 'info@truthandlifeacademy.org',
  widgets: [
    {
      col: '3',
      class: 'explore-widget',
      widget_title: 'Explore',
      footer_links: [
        { link: 'who-we-are', title: 'Who We Are' },
        { link: 'what-we-teach', title: 'What We Teach' },
        { link: 'faculty', title: 'The Board' },
        { link: 'podcasts', title: 'Podcasts' },
        { link: 'courses', title: 'Courses' },
        { link: 'articles', title: 'Articles' },
      ],
    },
    {
      col: '2',
      class: 'quick-link-widget',
      widget_title: 'Trending',
      footer_links: [
        {
          link: 'https://www.youtube.com/watch?v=EHf7gOlxhLk',
          title: 'Shepherding your Church Biblically',
        },
        {
          link: 'https://www.youtube.com/watch?v=bPwX5hlBW0k',
          title: 'Serving the Lord as a Doctor',
        },
        {
          link: 'https://www.youtube.com/watch?v=s5bTd_t9w3U',
          title: 'Historicity of Jesus` resurrection',
        },
        {
          link: 'https://www.youtube.com/watch?v=5h5q266JbsE',
          title: 'Christian schools in a pluralistic society',
        },
      ],
    },
  ],
};

const { logoDark, logoLight, desc, email, widgets } = footer_contents;

interface FooterProps {
  style_2?: string;
  dark_bg?: boolean;
  home_4?: string;
}

const Footer = ({ style_2, dark_bg, home_4 }: FooterProps) => {
  return (
    <footer
      className={`edu-footer ${
        style_2
          ? style_2
          : dark_bg
          ? 'footer-dark bg-image footer-style-3'
          : 'footer-lighten bg-image footer-style-1'
      }`}
    >
      <div className={`footer-top ${style_2 ? 'footer-top-2' : ''}`}>
        <div className='container'>
          <div className='row g-5'>
            <div className='col-lg-3 col-md-6'>
              <div className='edu-footer-widget'>
                <div className='logo'>
                  <Link href='/'>
                    {!dark_bg && (
                      <>
                        {!style_2 && (
                          <Image
                            className='logo-light'
                            src={logoLight}
                            alt='TLA Logo'
                            height={72}
                            width={236}
                          />
                        )}
                        <Image
                          className='logo-dark'
                          src={logoDark}
                          alt='TLA Logo'
                          height={72}
                          width={236}
                        />
                      </>
                    )}
                  </Link>

                  <Link href='/'>
                    {dark_bg && (
                      <Image
                        className='logo-light'
                        src={
                          home_4
                            ? '/images/logo/logo-white.png'
                            : '/images/logo/logo-light-3.png'
                        }
                        alt='TLA Logo'
                        height={72}
                        width={236}
                      />
                    )}
                  </Link>
                </div>

                <p className='description'>{desc}</p>
                <div className='widget-information'>
                  <ul className='information-list'>
                    {/* <li>
                      <span>Add:</span>
                      {add}
                    </li>
                    <li>
                      <span>Call:</span>
                      <a href='tel:+011235641231'>{call}</a>
                    </li> */}
                    <li>
                      <span>Email:</span>
                      <a
                        href='mailto:info@truthandlifeacademy.org'
                        rel='noreferrer'
                        target='_blank'
                      >
                        {email}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {widgets.map((w, i) => (
              <div key={i} className={`col-lg-${w.col} col-sm-6`}>
                <div className={`edu-footer-widget ${w.class}`}>
                  <h4 className='widget-title'>{w.widget_title}</h4>
                  <div className='inner'>
                    <ul className='footer-link link-hover'>
                      {w.footer_links.map((l, i) => (
                        <li key={i}>
                          <Link href={`/${l.link}`}>{l.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            <div className='col-lg-4 col-md-6'>
              <div className='edu-footer-widget'>
                <h4 className='widget-title'>Contacts</h4>
                <div className='inner'>
                  <p className='description'>
                    Enter your email address to register to our newsletter
                    subscription
                  </p>
                  <div className='input-group footer-subscription-form'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Your email'
                    />
                    <button
                      className={`edu-btn ${
                        dark_bg && !home_4 ? 'btn-secondary' : ''
                      } btn-medium`}
                      type='button'
                    >
                      Subscribe <i className='icon-4'></i>
                    </button>
                  </div>
                  <ul className='social-share icon-transparent'>
                    <FooterSocial />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='copyright-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='inner text-center'>
                <p>
                  © {new Date().getFullYear()} {siteConfig.title},{' '}
                  <Link
                    target='_blank'
                    rel='noopener noreferrer'
                    href={siteConfig.url}
                  >
                    All Rights Reserved
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
