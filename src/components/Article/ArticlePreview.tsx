import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { ArticleData } from '@/types/articles'

import Pagination from '../Pagination'

import ArticleMeta from './ArticleMeta'

const ArticlePreview = ({
  articles,
  loading,
  totalPage,
  currentPage,
  setCurrentPage,
}: {
  articles: ArticleData[] | undefined
  loading: boolean
  totalPage: number
  currentPage: number
  setCurrentPage: (page: number) => void
}) => {
  if (loading)
    return (
      <div className="article-preview">
        <div>Loading articles...</div>
      </div>
    )

  if (articles && articles.length > 0)
    return (
      <div>
        {articles &&
          articles.map((article: ArticleData) => (
            <div
              className="article-preview"
              key={article.slug}
            >
              <ArticleMeta
                article={article}
                previewMode={true}
              />
              <Link
                to={`/article/${article.slug}`}
                className="preview-link"
              >
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  {article.tagList.map((tag) => (
                    <li
                      className="tag-default tag-pill tag-outline"
                      key={tag}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Link>
            </div>
          ))}
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    )
  else if (articles && articles.length === 0)
    return (
      <div className="article-preview">
        <div>No articles are here... yet.</div>
      </div>
    )
  else return null
}

export default ArticlePreview
