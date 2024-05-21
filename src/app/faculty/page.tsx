import { Metadata } from 'next';

import FacultyList from '@/components/faculty';
import Wrapper from '@/components/layout/wrapper';

export const metadata: Metadata = {
  title: 'Faculty Page',
  description: 'Get to know our Board/Faculty.',
};

export default function Faculty() {
  return (
    <>
      <Wrapper>
        <FacultyList />
      </Wrapper>
    </>
  );
}
