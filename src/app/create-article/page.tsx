import CreateArticleForm from '@/components/create-article';
import Wrapper from '@/components/layout/wrapper';
import SEO from '@/components/seo';

export default function CreateArticle() {
  return (
    <>
      <Wrapper>
        <SEO pageTitle='Create Article' />
        <CreateArticleForm />
      </Wrapper>
    </>
  );
}
