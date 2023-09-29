import React from 'react'

import { QueryObserverResult } from 'react-query'
import { Link } from 'react-router-dom'

import { ArticleData, GetArticleResponse } from '@/types/articles'
import { DateFormat } from '@/utils/DateFormat'

import ArticleButton from './ArticleButton'
import FavoriteButton from './FavoriteButton'

const ArticleMeta = ({
  article,
  articleRefetch,
  previewMode,
}: {
  article: ArticleData
  articleRefetch?: () => Promise<QueryObserverResult<GetArticleResponse, unknown>>
  previewMode: boolean
}) => {
  return (
    <div className="article-meta">
      <Link to={`/@${article.author.username}`}>
        <img src={article.author.image} />
      </Link>
      <div className="info">
        <Link
          to={`/@${article.author.username}`}
          className="author"
        >
          {article.author.username}
        </Link>
        <span className="date">{DateFormat(article.createdAt)}</span>
      </div>
      {previewMode ? (
        <FavoriteButton article={article} />
      ) : (
        <ArticleButton
          article={article}
          articleRefetch={articleRefetch!}
        />
      )}
    </div>
  )
}

export default ArticleMeta
