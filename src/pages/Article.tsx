import React from 'react'

import { Link, useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import ArticleMeta from '@/components/Article/ArticleMeta'
import Comment from '@/components/Comment'
import { useGetArticle } from '@/hooks/useGetArticle'
import { userState } from '@/states/userState'

const Article = () => {
  const { slug } = useParams()
  const [currentUser] = useRecoilState(userState)
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

        {currentUser ? (
          <Comment />
        ) : (
          <div className="col-xs-12 col-md-8 pffset-md-2">
            <p style={{ display: 'inherit' }}>
              <Link to="/login">Sign in</Link>&nbsp;or&nbsp;<Link to="/register">sign up</Link> to
              add comments on this article.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Article
