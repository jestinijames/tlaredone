import Wrapper from '@/components/layout/wrapper';
import SEO from '@/components/seo';
import WhatWeTeachSection from '@/components/what-we-teach';

export default function WhatWeTeach() {
  return (
    <>
      <Wrapper>
        <SEO pageTitle='What We Teach' />
        <WhatWeTeachSection />
      </Wrapper>
    </>
  );
}
