import { Metadata } from 'next';

import ArticlesList from '@/components/articles';
import Wrapper from '@/components/layout/wrapper';

import { getAllArticles } from '@/content/content';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Browse through our latest Articles.',
};

export default async function Articles() {
  // Mark the component as async to properly handle data fetching
  const articles = await getAllArticles();

  return (
    <>
      <Wrapper>
        <ArticlesList articles={articles} />
      </Wrapper>
    </>
  );
}
