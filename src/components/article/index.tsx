import Breadcrumb from '@/components/breadcrumb';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

import { deslugify } from '@/utils/deslugify';

import ArticleDetailsArea from './article-details-area';

const parent_page = {
  title: 'Articles Home',
  url: '/articles',
};

interface Article {
  title: string;
  content: string;
  author?: string;
  slug: string;
  date: string;
  description?: string;
  featuredImage?: string;
  tags?: string[];
}

const index = ({ article, slug }: { article: Article; slug: string }) => {
  return (
    <div className='sticky-header'>
      <div id='main-wrapper' className='main-wrapper'>
        <Header />
        <Breadcrumb
          title={deslugify(slug)}
          current_page={deslugify(slug)}
          parent_page={parent_page}
        />
        <ArticleDetailsArea
          article={{
            ...article,
            description: article.description || '',
            author: article.author || 'Unknown',
            tags: article.tags || [], // Provide default empty array
          }}
        />
        <Footer dark_bg={true} />
      </div>
    </div>
  );
};

export default index;
