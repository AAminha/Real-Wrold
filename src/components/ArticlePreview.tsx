import React from 'react'

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

  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href="">
          <img src="http://i.imgur.com/N4VcUeJ.jpg" />
        </a>
        <div className="info">
          <a
            href=""
            className="author"
          >
            Albert Pai
          </a>
          <span className="date">January 20th</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> 32
        </button>
      </div>
      <a
        href=""
        className="preview-link"
      >
        <h1>The song you wont ever stop singing. No matter how hard you try.</h1>
        <p>This is the description for the post.</p>
        <span>Read more...</span>
        <ul className="tag-list">
          <li className="tag-default tag-pill tag-outline">Music</li>
          <li className="tag-default tag-pill tag-outline">Song</li>
        </ul>
      </a>
    </div>
  )
}

export default ArticlePreview
