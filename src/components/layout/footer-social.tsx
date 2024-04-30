const social_share = [
  {
    link: 'https://www.facebook.com/TandLA',
    target: '_blank',
    icon: 'icon-facebook',
    color: 'color-fb',
  },
  {
    link: 'https://twitter.com/revanth03',
    target: '_blank',
    icon: 'icon-twitter',
    color: 'color-twitter',
  },
  {
    link: 'https://www.youtube.com/channel/UCGD1UGIHGOCszcYeQaRqreQ',
    target: '_blank',
    icon: 'icon-youtube',
    color: 'color-yt',
  },
  {
    link: 'https://www.instagram.com/truthandlifepod/',
    target: '_blank',
    icon: 'icon-instagram',
    color: 'color-ig',
  },
];

import React from 'react';

const FooterSocial = () => {
  return (
    <>
      {social_share.map((social, i) => (
        <li key={i}>
          <a
            href={social.link}
            target={social.target ? social.target : ''}
            className={`${social.color}`}
          >
            <i className={social.icon}></i>
          </a>
        </li>
      ))}
    </>
  );
};

export default FooterSocial;
