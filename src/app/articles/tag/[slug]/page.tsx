import ArticlesList from '@/components/articles-by-tag';
import Wrapper from '@/components/layout/wrapper';
import SEO from '@/components/seo';

export default function ArticlesByTag({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <Wrapper>
        <SEO pageTitle='Article' />
        <ArticlesList slug={params.slug} />
      </Wrapper>
    </>
  );
}
