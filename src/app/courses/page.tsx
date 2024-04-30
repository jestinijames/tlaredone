import CoursesList from '@/components/courses';
import Wrapper from '@/components/layout/wrapper';
import SEO from '@/components/seo';

export default function Courses() {
  return (
    <>
      <Wrapper>
        <SEO pageTitle='Courses' />
        <CoursesList />
      </Wrapper>
    </>
  );
}
