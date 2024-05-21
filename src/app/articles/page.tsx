import { Metadata } from 'next';

import ArticlesList from '@/components/articles';
import Wrapper from '@/components/layout/wrapper';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Browse through our latest Articles.',
};

export default function Articles() {
  return (
    <>
      <Wrapper>
        <ArticlesList />
      </Wrapper>
    </>
  );
}
