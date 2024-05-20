import Wrapper from '@/components/layout/wrapper';
import SEO from '@/components/seo';
import UpdateArticleForm from '@/components/update-article';

export default function CreateArticle({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <Wrapper>
        <SEO pageTitle='Update Article' />
        <UpdateArticleForm slug={params.slug} />
      </Wrapper>
    </>
  );
}
