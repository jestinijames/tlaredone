import { Metadata } from 'next';

import Wrapper from '@/components/layout/wrapper';
import FacultyDetail from '@/components/member';

export const metadata: Metadata = {
  title: 'Faculty Details Page',
  description: 'Get to know our Board/Faculty Member.',
};

export default function FacultyMember({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <Wrapper>
        <FacultyDetail slug={params.slug} />
      </Wrapper>
    </>
  );
}
