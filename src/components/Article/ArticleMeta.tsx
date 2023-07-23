import React from 'react'

import { Link } from 'react-router-dom'

import { ArticleData } from '@/types/articles'
import { DateFormat } from '@/utils/DateFormat'

const ArticleMeta = ({ article }: { article: ArticleData }) => {
  return (
    <div className="article-meta">
      <Link to={`/@${article.author.username}`}>
        <img src="http://i.imgur.com/Qr71crq.jpg" />
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
      {/* TODO: 좋아요 버튼 기능 구현 */}
      <button
        className={`btn btn-sm pull-xs-right ${
          article.favorited ? 'btn-primary' : 'btn-outline-primary'
        }`}
        onClick={() =>
          article.favorited ? deleteFavoriteMutate(article.slug) : postFavoriteMutate(article.slug)
        }
      >
        <i className="ion-heart"></i>&nbsp;{article.favoritesCount}
      </button>
      {/* TODO: 팔로우 버튼 기능 구현 */}
      <button className="btn btn-sm btn-outline-secondary">
        <i className="ion-plus-round"></i>
        &nbsp; Follow Eric Simons
      </button>
      &nbsp;
      <button className="btn btn-sm btn-outline-primary">
        <i className="ion-heart"></i>
        &nbsp; Favorite Article <span className="counter">(29)</span>
      </button>
    </div>
  )
}

export default ArticleMeta
