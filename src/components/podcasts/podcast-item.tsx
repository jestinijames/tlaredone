/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import useModal from '@/hooks/use-modal';

import VideoModal from '@/components/common/popup-modal/video-modal';

const PodcastItem = ({ item }: any) => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  const [podcastId, setPodcastId] = useState('');

  function formatDate(dateString: string | number | Date) {
    const date = new Date(dateString as string); // Assert dateString as string
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

  function formatDescription(str: string, numWords: number) {
    // Split the string into words
    const words = str.split(' ');

    // If the number of words is less than or equal to numWords, return the original string
    if (words.length <= numWords) {
      return str;
    }

    // Otherwise, join the first numWords words together and add an ellipsis
    return words.slice(0, numWords).join(' ') + '...';
  }

  const {
    thumbnails: {
      maxres: { url },
    },
    publishedAt,
    title,
    description,
    resourceId: { videoId },
  } = item.snippet;
  return (
    <>
      <div className='inner'>
        <div className='thumbnail'>
          <a
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setPodcastId(videoId);
              setIsVideoOpen(true);
            }}
          >
            <span>
              <Image height={208} width={370} src={url} alt={title} />
            </span>
          </a>
          <div className='event-time'>
            <span>
              <i className='icon-33'></i>
              {formatDate(publishedAt)}
            </span>
          </div>
        </div>
        <div
          style={{
            height: '30rem',
            maxHeight: '30rem',
          }}
          className='content'
        >
          <div className='event-date'>
            <span className='day'>{title.substring(0, 3)}</span>
            {/* <span className='month'>{item.snippet.publishedAt?.split(' ')[0]}</span> */}
          </div>
          <h5 className='title'>
            <span>{title.substring(3)}</span>
          </h5>
          <p>{formatDescription(description, 30)}</p>
          {/* <ul className='event-meta'>
          <li>
            <i className='icon-40'></i>
            {event_meta}
          </li>
        </ul> */}
          <div className='read-more-btn'>
            <Link
              href='#'
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setPodcastId(videoId);
                setIsVideoOpen(true);
              }}
              className='edu-btn btn-secondary btn-small'
              style={{ cursor: 'pointer' }}
            >
              Watch Now
              <i className='icon-4'></i>
            </Link>
          </div>
        </div>
      </div>
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={podcastId}
      />
    </>
  );
};

export default PodcastItem;
