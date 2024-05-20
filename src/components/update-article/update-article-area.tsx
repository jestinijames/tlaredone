import EditArticleForm from './edit-article-form';

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

export default function UpdateArticleArea({ slug }: { slug: string }) {
  return (
    <section className='checkout-page-area section-gap-equal'>
      <div className='container'>
        <EditArticleForm slug={slug} />
      </div>
    </section>
  );
}
