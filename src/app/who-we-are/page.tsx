import Wrapper from '@/components/layout/wrapper';
import SEO from '@/components/seo';
import WhoWeAreList from '@/components/who-we-are';

export default function WhoWeAre() {
  return (
    <>
      <Wrapper>
        <SEO pageTitle='Create Article' />
        <WhoWeAreList />
      </Wrapper>
    </>
  );
}
