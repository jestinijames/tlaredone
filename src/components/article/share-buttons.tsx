'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6';

const ShareButtons = ({ title }: { title: string }) => {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(currentUrl);

  return (
    <div className='blog-share'>
      <h6 className='title'>Share on:</h6>
      <ul className='social-share icon-transparent flex gap-3'>
        <li>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook size={20} />
          </Link>
        </li>
        <li>
          <Link
            href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaXTwitter size={20} />
          </Link>
        </li>
        <li>
          <Link
            href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaWhatsapp size={20} />
          </Link>
        </li>
        <li>
          <Link
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size={20} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ShareButtons;
