import Wrapper from '@/components/layout/wrapper';
import PodcastsList from '@/components/podcasts';
import SEO from '@/components/seo';

export default function Podcasts() {
  return (
    <>
      <Wrapper>
        <SEO pageTitle='Podcasts' />
        <PodcastsList />
      </Wrapper>
    </>
  );
}
