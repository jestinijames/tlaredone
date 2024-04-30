import Wrapper from '@/components/layout/wrapper';
import SEO from '@/components/seo';
import WhatWeTeachList from '@/components/what-we-teach';

export default function WhatWeTeach() {
  return (
    <>
      <Wrapper>
        <SEO pageTitle='Create Article' />
        <WhatWeTeachList />
      </Wrapper>
    </>
  );
}
