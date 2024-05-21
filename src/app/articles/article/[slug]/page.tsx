import { Metadata } from 'next';

import ArticlePage from '@/components/article';
import Wrapper from '@/components/layout/wrapper';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Browse through our latest Articles.',
};

export default function ArticleDetail({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <Wrapper>
        <ArticlePage slug={params.slug} />
      </Wrapper>
    </>
  );
}
