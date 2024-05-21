import { Metadata } from 'next';

import Wrapper from '@/components/layout/wrapper';
import WhoWeAreSection from '@/components/who-we-are';

export const metadata: Metadata = {
  title: 'Who We Are',
  description: 'Get to know Who We Are.',
};

export default function WhoWeAre() {
  return (
    <>
      <Wrapper>
        <WhoWeAreSection />
      </Wrapper>
    </>
  );
}
