import React, { useState } from 'react'

import { useRecoilState } from 'recoil'

import ArticlePreview from '@/components/Article/ArticlePreview'
import { useGetArticles } from '@/hooks/useGetArticles'
import { useGetTags } from '@/hooks/useGetTag'
import { userState } from '@/states/userState'

const Home = () => {
  const [currentUser] = useRecoilState(userState)
  const [activeFeed, setActiveFeed] = useState<string>(currentUser ? 'Your' : 'Global')
  const { data: tags } = useGetTags()
  const {
    data: globalFeedArticles,
    isLoading: globalFeedArticlesLoading,
    isFetching: globalFeedArticlesFetching,
  } = useGetArticles({})
  const {
    data: yourFeedArticles,
    isLoading: yourFeedArticlesLoading,
    isFetching: yourFeedArticlesFetching,
  } = useGetArticles({ favorited: currentUser?.username })

  const {
    data: tagArticles,
    isLoading: tagArticlesLoading,
    isFetching: tagArticlesFetching,
  } = useGetArticles({
    tag: activeFeed !== 'Your' && activeFeed !== 'Global' ? activeFeed : '',
  })

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
                {activeFeed !== 'Your' && activeFeed !== 'Global' && (
                  <li className="nav-item">
                    <div
                      className={`nav-link ${
                        activeFeed !== 'Global' && activeFeed !== 'Your' && 'active'
                      }`}
                      onClick={() => {
                        setActiveFeed('Global')
                      }}
                    >
                      <i className="ion-pound"></i> {activeFeed}
                    </div>
                  </li>
                )}
              </ul>
            </div>
            {activeFeed === 'Your' && (
              <ArticlePreview
                articles={yourFeedArticles?.articles}
                loading={yourFeedArticlesLoading || yourFeedArticlesFetching}
              />
            )}
            {activeFeed === 'Global' && (
              <ArticlePreview
                articles={globalFeedArticles?.articles}
                loading={globalFeedArticlesLoading || globalFeedArticlesFetching}
              />
            )}
            {activeFeed !== 'Your' && activeFeed !== 'Global' && (
              <ArticlePreview
                articles={tagArticles?.articles}
                loading={tagArticlesLoading || tagArticlesFetching}
              />
            )}
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
              {tags &&
                tags.tags.map((tag) => (
                  <a
                    href=""
                    key={tag}
                    className="tag-pill tag-default"
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveFeed(tag)
                    }}
                  >
                    {tag}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
