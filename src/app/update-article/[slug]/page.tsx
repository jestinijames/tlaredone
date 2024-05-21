import { Metadata } from 'next';

import Wrapper from '@/components/layout/wrapper';
import UpdateArticleForm from '@/components/update-article';

export const metadata: Metadata = {
  title: 'Update Article',
  description: 'Update your articles here.',
};

export default function CreateArticle({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <Wrapper>
        <UpdateArticleForm slug={params.slug} />
      </Wrapper>
    </>
  );
}
