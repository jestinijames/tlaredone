import ArticlePage from '@/components/article';
import Wrapper from '@/components/layout/wrapper';
import SEO from '@/components/seo';

export default function ArticleDetail({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <Wrapper>
        <SEO pageTitle='Article' />
        <ArticlePage slug={params.slug} />
      </Wrapper>
    </>
  );
}
