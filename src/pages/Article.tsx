import React from 'react'

import ArticleMeta from '@/components/ArticleMeta'
import Comment from '@/components/Comment'

const Article = () => {
  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>How to build webapps that scale</h1>

          <ArticleMeta />
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>
              Web development technologies have evolved at an incredible clip over the past few
              years.
            </p>
            <h2 id="introducing-ionic">Introducing RealWorld.</h2>
            <p>Its a great solution for learning how other frameworks work.</p>
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <ArticleMeta />
        </div>

        <Comment />
      </div>
    </div>
  )
}

export default Article
