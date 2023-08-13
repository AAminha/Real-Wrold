import React from 'react'

import { Link } from 'react-router-dom'

import { ArticleData } from '@/types/articles'
import { DateFormat } from '@/utils/DateFormat'

import ArticleButton from './ArticleButton'
import FavoriteButton from './FavoriteButton'

const ArticleMeta = ({ article, previewMode }: { article: ArticleData; previewMode: boolean }) => {
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
      {previewMode ? <FavoriteButton article={article} /> : <ArticleButton article={article} />}
    </div>
  )
}

export default ArticleMeta
