import React from 'react'

import { Link } from 'react-router-dom'

import { ArticleData } from '@/types/articles'

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
              {/* TODO: 날짜 형식 변경 */}
              <span className="date">{article.createdAt}</span>
            </div>
            {/* TODO: 좋아요 버튼 기능 구현 */}
            <button className="btn btn-outline-primary btn-sm pull-xs-right">
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
