import FacultyList from '@/components/faculty';
import Wrapper from '@/components/layout/wrapper';
import SEO from '@/components/seo';

export default function Faculty() {
  return (
    <>
      <Wrapper>
        <SEO pageTitle='Faculty' />
        <FacultyList />
      </Wrapper>
    </>
  );
}
