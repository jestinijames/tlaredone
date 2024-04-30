import Wrapper from '@/components/layout/wrapper';
import FacultyDetail from '@/components/member';
import SEO from '@/components/seo';

export default function FacultyMember({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <Wrapper>
        <SEO pageTitle='Faculty Member' />
        <FacultyDetail slug={params.slug} />
      </Wrapper>
    </>
  );
}
