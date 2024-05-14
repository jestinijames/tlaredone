/* eslint-disable @typescript-eslint/no-explicit-any */

import ArticleForm from '@/components/create-article/article.form';
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

export default async function CreateArticleArea() {
  const allTags = await api.tag.getTags();

  const session = await getServerAuthSession();

  // if (!session?.user) {
  //   return (
  //     <section className='checkout-page-area section-gap-equal'>
  //       <div className='container'>
  //         <div className='row row--25'>
  //           <div>
  //             <div className='checkout-billing'>
  //               <h3 className='title'>You are not allowed here!!</h3>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section className='checkout-page-area section-gap-equal'>
      <div className='container'>
        <TagForm />
        {session && session?.user && allTags && <ArticleForm tags={allTags} />}
      </div>
    </section>
  );
}
