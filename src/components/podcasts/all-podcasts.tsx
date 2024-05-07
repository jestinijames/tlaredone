'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useCallback, useEffect, useState } from 'react';
import { Bounce, toast } from 'react-toastify';

import PodcastItem from '@/components/podcasts/podcast-item';
import Loader from '@/components/ui/loader';

import { fetchData } from '@/utils/fetch-api';

const AllPodcasts = () => {
  // Fetching youtube videos
  const [videos, setVideos] = useState<any>([]);

  const [nextPageToken, setNextPageToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const fetchVideos = useCallback(async () => {
    setIsLoading(true);
    try {
      const podcastId = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID;
      const resultsPerPage = process.env.NEXT_PUBLIC_YOUTUBE_RESULTS_PER_PAGE
        ? process.env.NEXT_PUBLIC_YOUTUBE_RESULTS_PER_PAGE
        : '6';
      const response = await fetchData(
        podcastId,
        parseInt(resultsPerPage),
        nextPageToken,
        ''
      );

      setVideos([...videos, ...response.items]);
      setNextPageToken(response.nextPageToken || ''); // Set empty string if no nextPageToken
    } catch (error) {
      toast.error(`Error fetching videos: ${error}`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        transition: Bounce,
      });
    } finally {
      setIsLoading(false);
    }
  }, [nextPageToken, videos]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleLoadMore = () => {
    fetchVideos();
  };

  if (isLoading || videos.length === 0) return <Loader />;

  return (
    <>
      {videos &&
        videos.map((item: any, i: number) => {
          return (
            <div key={i} className='col-lg-4 col-md-6'>
              <div className='edu-event event-style-1'>
                <PodcastItem item={item} />
              </div>
            </div>
          );
        })}
      {nextPageToken && !isLoading && (
        <div
          onClick={handleLoadMore}
          className='load-more-btn'
          // data-sal-delay='100'
          // data-sal='slide-up'
          // data-sal-duration='1200'
        >
          <a className='edu-btn' style={{ cursor: 'pointer' }}>
            Load More <i className='icon-56'></i>
          </a>
        </div>
      )}
    </>
  );
};

export default AllPodcasts;
