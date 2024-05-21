import { Metadata } from 'next';

import CreateArticleForm from '@/components/create-article';
import Wrapper from '@/components/layout/wrapper';

export const metadata: Metadata = {
  title: 'Create Article',
  description: 'Create an article here.',
};

export default function CreateArticle() {
  return (
    <>
      <Wrapper>
        <CreateArticleForm />
      </Wrapper>
    </>
  );
}
