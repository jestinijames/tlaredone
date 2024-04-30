import CourseDetail from '@/components/course-details';
import Wrapper from '@/components/layout/wrapper';
import SEO from '@/components/seo';

export default function CourseDetails({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <Wrapper>
        <SEO pageTitle='Course Details' />
        <CourseDetail slug={params.slug} />
      </Wrapper>
    </>
  );
}
