import { Metadata } from 'next';

import ArticlesList from '@/components/articles-by-tag';
import Wrapper from '@/components/layout/wrapper';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Browse through our latest Articles.',
};

export default function ArticlesByTag({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <Wrapper>
        <ArticlesList slug={params.slug} />
      </Wrapper>
    </>
  );
}
