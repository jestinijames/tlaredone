import { Metadata } from 'next';

import CourseDetail from '@/components/course-details';
import Wrapper from '@/components/layout/wrapper';

export const metadata: Metadata = {
  title: 'Course Details',
  description: 'Take a look at the Course Details.',
};

export default function CourseDetails({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <Wrapper>
        <CourseDetail slug={params.slug} />
      </Wrapper>
    </>
  );
}
