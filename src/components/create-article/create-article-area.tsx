/* eslint-disable @typescript-eslint/no-explicit-any */

import ArticleForm from '@/components/create-article/article-form';
import TagForm from '@/components/create-article/tag-form';

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

// async function getTags() {
//   return await api.tag.getTags();
// }

export default function CreateArticleArea() {
  // let allTags: {
  //   id: string;
  //   name: string;
  //   description: string;
  //   slug: string;
  // }[] = [];

  // allTags = use(getTags());

  return (
    <section className='checkout-page-area section-gap-equal'>
      <div className='container'>
        <TagForm />
        <ArticleForm />
      </div>
    </section>
  );
}
