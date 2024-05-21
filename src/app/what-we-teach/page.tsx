import { Metadata } from 'next';

import Wrapper from '@/components/layout/wrapper';
import WhatWeTeachSection from '@/components/what-we-teach';

export const metadata: Metadata = {
  title: 'What We Teach',
  description: 'Get to know What We Teach.',
};

export default function WhatWeTeach() {
  return (
    <>
      <Wrapper>
        <WhatWeTeachSection />
      </Wrapper>
    </>
  );
}
