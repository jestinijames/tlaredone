import ArticlesList from '@/components/articles';
import Wrapper from '@/components/layout/wrapper';
import SEO from '@/components/seo';

export default function Articles() {
  return (
    <>
      <Wrapper>
        <SEO pageTitle='Articles' />
        <ArticlesList />
      </Wrapper>
    </>
  );
}
