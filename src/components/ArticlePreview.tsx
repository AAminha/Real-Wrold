import React from 'react'

import { useMutation } from 'react-query'
import { Link } from 'react-router-dom'

import { articleAPI } from '@/API/articles'
import { ArticleData } from '@/types/articles'
import { DateFormat } from '@/utils/DateFormat'

const ArticlePreview = ({
  articles,
  loading,
  getArticleRefetch,
}: {
  articles: ArticleData[] | undefined
  loading: boolean
  getArticleRefetch: () => void
}) => {
  const { mutate: postFavoriteMutate } = useMutation(articleAPI.favorite, {
    onSuccess: () => {
      getArticleRefetch()
    },
  })
  const { mutate: deleteFavoriteMutate } = useMutation(articleAPI.unfavorite, {
    onSuccess: () => {
      getArticleRefetch()
    },
  })
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
            {/* TODO: 좋아요 버튼 기능 구현 */}
            <button
              className={`btn btn-sm pull-xs-right ${
                article.favorited ? 'btn-primary' : 'btn-outline-primary'
              }`}
              onClick={() =>
                article.favorited
                  ? deleteFavoriteMutate(article.slug)
                  : postFavoriteMutate(article.slug)
              }
            >
              <i className="ion-heart"></i>&nbsp;{article.favoritesCount}
            </button>
          </div>
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
