/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { use } from 'react';

import ArticleItems from '@/components/articles/article-items';

import { getServerAuthSession } from '@/server/auth';
import { api } from '@/trpc/server';

import ArticleSidebar from './article-sidebar';

async function getSessionUser() {
  const session = await getServerAuthSession();
  return session?.user;
}

async function getTags() {
  return await api.tag.getTags();
}

const ListArea = () => {
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
    <section className='section-gap-equal'>
      <div className='container'>
        <div className='row row--30'>
          <ArticleItems />

          <div className='col-lg-4'>
            {/* sidebar start */}
            <ArticleSidebar tags={allTags} />
            {/* sidebar end */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListArea;
