import { Metadata } from 'next';

import Wrapper from '@/components/layout/wrapper';
import PodcastsList from '@/components/podcasts';

export const metadata: Metadata = {
  title: 'Podcasts',
  description: 'Listen to our many podcasts.',
};

export default function Podcasts() {
  return (
    <>
      <Wrapper>
        <PodcastsList />
      </Wrapper>
    </>
  );
}
