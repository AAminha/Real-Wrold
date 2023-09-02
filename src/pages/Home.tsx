import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import ArticlePreview from '@/components/Article/ArticlePreview'
import { userState } from '@/states/userState'

const Home = () => {
  const [currentUser] = useRecoilState(userState)
  const [activeFeed, setActiveFeed] = useState<'Global' | 'Your'>(currentUser ? 'Your' : 'Global')
  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                {currentUser && (
                  <li className="nav-item">
                    <div
                      className={`nav-link ${activeFeed === 'Your' && 'active'}`}
                      onClick={() => {
                        setActiveFeed('Your')
                      }}
                    >
                      Your Feed
                    </div>
                  </li>
                )}
                <li className="nav-item">
                  <div
                    className={`nav-link ${activeFeed === 'Global' && 'active'}`}
                    onClick={() => {
                      setActiveFeed('Global')
                    }}
                  >
                    Global Feed
                  </div>
                </li>
              </ul>
            </div>
            <ArticlePreview
              articles={[]}
              loading={true}
            />
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className="tag-list">
                <a
                  href=""
                  className="tag-pill tag-default"
                >
                  programming
                </a>
                <a
                  href=""
                  className="tag-pill tag-default"
                >
                  javascript
                </a>
                <a
                  href=""
                  className="tag-pill tag-default"
                >
                  emberjs
                </a>
                <a
                  href=""
                  className="tag-pill tag-default"
                >
                  angularjs
                </a>
                <a
                  href=""
                  className="tag-pill tag-default"
                >
                  react
                </a>
                <a
                  href=""
                  className="tag-pill tag-default"
                >
                  mean
                </a>
                <a
                  href=""
                  className="tag-pill tag-default"
                >
                  node
                </a>
                <a
                  href=""
                  className="tag-pill tag-default"
                >
                  rails
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
