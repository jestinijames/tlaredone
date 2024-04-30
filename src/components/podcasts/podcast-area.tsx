import React from 'react';

import AllPodcasts from './all-podcasts';

const PodcastArea = () => {
  return (
    <div className='edu-event-area event-area-1 section-gap-equal'>
      <div className='container'>
        <div data-sal-delay='150' data-sal='slide-up' data-sal-duration='800'>
          <div className='row g-5'>
            <AllPodcasts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastArea;
