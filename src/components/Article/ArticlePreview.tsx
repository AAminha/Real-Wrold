import React from 'react'

import { Link } from 'react-router-dom'

import { ArticleData } from '@/types/articles'

// import ArticleMeta from './ArticleMeta'

const ArticlePreview = ({
  articles,
  loading,
}: {
  articles: ArticleData[] | undefined
  loading: boolean
}) => {
  if (loading)
    return (
      <div className="article-preview">
        <div>Loading articles...</div>
      </div>
    )

  // TODO : 게시글이 없을 경우 'No articles are here... yet.'문구 보이도록
  return (
    <div>
      {articles?.map((article: ArticleData) => (
        <div
          className="article-preview"
          key={article.slug}
        >
          {/* <ArticleMeta
            article={article}
            previewMode={true}
          /> */}
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
    </div>
  )
}

export default ArticlePreview
