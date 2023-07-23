import React from 'react'

import { useMutation } from 'react-query'
import { Link } from 'react-router-dom'

import { articleAPI } from '@/API/articles'
import { ArticleData } from '@/types/articles'
import { DateFormat } from '@/utils/DateFormat'

import ArticleMeta from './ArticleMeta'

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
          <ArticleMeta article={article} />
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
