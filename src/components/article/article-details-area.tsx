'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from 'next/image';
import Link from 'next/link';

import ShareButtons from '@/components/article/share-buttons';
import { Article } from '@/components/articles/article-items';

const ArticleDetailsArea = ({ article }: { article: Article }) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className='blog-details-area section-gap-equal'>
      <div className='container'>
        <div className='row row--30'>
          <div className='col-lg-12'>
            <div className='blog-details-content'>
              <div className='entry-content'>
                <span className='category'>Article</span>
                <h3 className='title'>{article.title}</h3>

                {article.featuredImage && (
                  <div className='thumbnail'>
                    <Image
                      height={750}
                      width={420}
                      src={article.featuredImage}
                      alt={article.title}
                      className='w-100 h-auto'
                    />
                  </div>
                )}

                <div
                  className='mt-4'
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>

              <div className='blog-share-area'>
                <div className='row align-items-center'>
                  <div className='col-md-7'>
                    {article.tags && article.tags.length > 0 && (
                      <div className='blog-tags'>
                        <h6 className='title'>Tags:</h6>
                        <div className='tag-list flex flex-wrap gap-2'>
                          {article.tags.map((tag) => (
                            <button
                              onClick={(e) => e.preventDefault()}
                              key={tag}
                              className='bg-gray-100 px-3 py-1 rounded text-sm hover:bg-primary hover:text-white transition'
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className='col-md-5'>
                    <ShareButtons title={article.title} />
                  </div>
                </div>
              </div>
            </div>

            <div className='blog-author'>
              <div className='thumbnail'>
                <Image
                  width={100}
                  height={100}
                  src='/images/faculty/detail/revanth.jpg'
                  alt='Revanth T'
                />
              </div>
              <div className='author-content'>
                <h5 className='title'>Revanth T</h5>

                <ul className='social-share icon-transparent'>
                  <li>
                    <Link href='https://www.facebook.com/TandLA'>
                      <i className='icon-facebook'></i>
                    </Link>
                  </li>
                  <li>
                    <Link href='https://twitter.com/revanth03'>
                      <i className='icon-twitter'></i>
                    </Link>
                  </li>
                  <li>
                    <Link href='https://www.instagram.com/truthandlifepod/'>
                      <i className='icon-instagram'></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='blog-pagination'>
              <div className='row g-5'>
                <div className='col-lg-6'>
                  <div className='blog-pagination-list prev-post'>
                    <Link href='/articles'>
                      <i className='icon-west'></i>
                      <span>Back to articles home</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-4">
            <ArticleSidebar />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailsArea;
