import Wrapper from '@/components/layout/wrapper';
import SEO from '@/components/seo';
import WhoWeAreSection from '@/components/who-we-are';

export default function WhoWeAre() {
  return (
    <>
      <Wrapper>
        <SEO pageTitle='Who We Are' />
        <WhoWeAreSection />
      </Wrapper>
    </>
  );
}
