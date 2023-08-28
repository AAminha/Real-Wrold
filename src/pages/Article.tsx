import React from 'react'

import { useParams } from 'react-router-dom'

import ArticleMeta from '@/components/Article/ArticleMeta'
import Comment from '@/components/Comment'
import { useGetArticle } from '@/hooks/useGetArticle'

const Article = () => {
  const { slug } = useParams()
  const { data: selectedArticle, refetch: getArticleRefetch } = useGetArticle(slug ? slug : '')
  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{selectedArticle?.article.title}</h1>

          {selectedArticle && (
            <ArticleMeta
              article={selectedArticle.article}
              articleRefetch={getArticleRefetch}
              previewMode={false}
            />
          )}
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            {/* TODO: 마크다운 형식으로 변환할 수 있는 방법 찾기 */}
            <p>{selectedArticle?.article.body}</p>
          </div>
        </div>
        <ul className="tag-list">
          {selectedArticle?.article.tagList.map((tag) => (
            <li
              key={tag}
              className="tag-default tag-pill tag-outline ng-binding ng-scope"
            >
              {tag}
            </li>
          ))}
        </ul>

        <hr />

        <div className="article-actions">
          {selectedArticle && (
            <ArticleMeta
              article={selectedArticle?.article}
              articleRefetch={getArticleRefetch}
              previewMode={false}
            />
          )}
        </div>

        <Comment />
      </div>
    </div>
  )
}

export default Article
