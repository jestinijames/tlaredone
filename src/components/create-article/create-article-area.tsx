/* eslint-disable @typescript-eslint/no-explicit-any */

import { use } from 'react';

import ArticleForm from '@/components/create-article/article-form';
import TagForm from '@/components/create-article/tag-form';

import { getServerAuthSession } from '@/server/auth';
import { api } from '@/trpc/server';

export const ErrorMessage = ({ errorMessage }: { errorMessage?: string }) => {
  return (
    <div
      style={{
        width: '100%',
        wordBreak: 'break-word',
        fontSize: '0.875rem',
        color: '#DC2626',
      }}
    >
      <p>{errorMessage}</p>
    </div>
  );
};

async function getSessionUser() {
  const session = await getServerAuthSession();
  return session?.user;
}

async function getTags() {
  return await api.tag.getTags();
}

export default function CreateArticleArea() {
  let allTags: {
    id: string;
    name: string;
    description: string;
    slug: string;
  }[] = [];
  const user = use(getSessionUser());
  if (user) {
    allTags = use(getTags());
  }

  return (
    <section className='checkout-page-area section-gap-equal'>
      <div className='container'>
        <TagForm />
        <ArticleForm tags={allTags} />
      </div>
    </section>
  );
}
