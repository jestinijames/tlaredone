import { Metadata } from 'next';

import CoursesList from '@/components/courses';
import Wrapper from '@/components/layout/wrapper';

export const metadata: Metadata = {
  title: 'Course Catalogue',
  description: 'Take a look at our Course Catalogue.',
};

export default function Courses() {
  return (
    <>
      <Wrapper>
        <CoursesList />
      </Wrapper>
    </>
  );
}
