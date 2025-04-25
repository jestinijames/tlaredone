/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Image from 'next/image';
import Link from 'next/link';
// import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export interface Article {
  content: string | TrustedHTML;
  title: string;
  description: string;
  slug: string;
  featuredImage?: string;
  author: string;
  tags: string[];
}

interface ArticleItemsProps {
  articles: Article[];
}

const ArticleItems = ({ articles }: ArticleItemsProps) => {
  const [displayedArticles, setDisplayedArticles] = useState<Article[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);

  const articlesPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const filtered = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setFilteredArticles(filtered);
    setDisplayedArticles(filtered.slice(0, articlesPerPage));
    setCurrentPage(1);
    setHasMore(filtered.length > articlesPerPage);
  }, [searchTerm, articles]);

  const fetchMoreArticles = () => {
    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const newArticles = filteredArticles.slice(startIndex, endIndex);
    setDisplayedArticles((prev) => [...prev, ...newArticles]);
    setCurrentPage(nextPage);
    if (endIndex >= filteredArticles.length) {
      setHasMore(false);
    }
  };

  return (
    <>
      <div className='col-lg-8'>
        <InfiniteScroll
          dataLength={displayedArticles.length}
          next={fetchMoreArticles}
          hasMore={hasMore}
          loader={
            <div className='spinner-border' role='status'>
              <span className='sr-only'>Loading...</span>
            </div>
          }
        >
          {displayedArticles.map(
            ({ title, description, slug, featuredImage, author }) => (
              <div key={title} className='edu-blog blog-style-4 post-gallery'>
                <div className='inner'>
                  <div className='thumbnail'>
                    <Link href={`/articles/${slug}`}>
                      {featuredImage && (
                        <Image
                          height={420}
                          width={750}
                          src={featuredImage}
                          alt={title}
                        />
                      )}
                    </Link>
                  </div>
                  <div className='content'>
                    <div className='category-wrap'>
                      <div className='blog-category'>Article</div>
                    </div>
                    <h3 className='title'>
                      <Link href={`/articles/${slug}`}>{title}</Link>
                    </h3>
                    <ul className='blog-meta'>
                      <li>
                        <i className='icon-62'></i>
                        {author}
                      </li>
                    </ul>
                    <p>{description}</p>
                    <div className='read-more-btn'>
                      <Link
                        className='edu-btn btn-border btn-medium'
                        href={`/articles/${slug}`}
                      >
                        Learn More <i className='icon-4'></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </InfiniteScroll>
      </div>

      {/* Sidebar */}
      <div className='col-lg-4'>
        <div className='edu-blog-sidebar'>
          <div className='edu-blog-widget widget-search'>
            <div className='inner'>
              <h4 className='widget-title'>Search</h4>
              <div className='content'>
                <form className='blog-search'>
                  <button className='search-button'>
                    <i className='icon-2'></i>
                  </button>
                  <input
                    type='text'
                    placeholder='Search'
                    value={searchTerm}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setSearchTerm(e.target.value)
                    }
                  />
                </form>
              </div>
            </div>
          </div>

          {/* <LatestArticles /> */}

          <div className='edu-blog-widget widget-tags'>
            <div className='inner'>
              <h4 className='widget-title'>Tags</h4>
              <div className='content'>
                <div className='tag-list'>
                  {Array.from(
                    new Set(articles.flatMap((article) => article.tags))
                  ).map((tag) => (
                    <button
                      key={tag}
                      className='btn btn-outline-primary btn-sm m-1'
                      onClick={() => setSearchTerm(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleItems;
