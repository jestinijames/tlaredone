import CourseDetail from '@/components/course-details';
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
        <CourseDetail slug={params.slug} />
      </Wrapper>
    </>
  );
}
