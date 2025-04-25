import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ArticlePage from '@/components/article';
import { Article } from '@/components/articles/article-items';
import Wrapper from '@/components/layout/wrapper';

import { getArticleBySlug } from '@/content/content';

type Props = {
  params: {
    slug: string;
  };
};

// Optional: Set metadata based on article content
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug) as unknown as Article;
  return {
    title: article?.title || 'Article',
  };
}

export default async function ArticleDetail({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticleBySlug(params.slug);
  if (!article) return notFound();

  // Resolve the content if it's a Promise
  const resolvedArticle = {
    ...article,
    content: await Promise.resolve(article.content),
  };

  return (
    <>
      <Wrapper>
        <ArticlePage article={resolvedArticle} slug={params.slug} />
      </Wrapper>
    </>
  );
}
