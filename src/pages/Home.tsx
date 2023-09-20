import React, { useEffect, useState } from 'react'

import { useRecoilState } from 'recoil'

import ArticlePreview from '@/components/Article/ArticlePreview'
import { MAIN_LIMIT } from '@/constants'
import { useGetArticles } from '@/hooks/useGetArticles'
import { useGetFollowArticles } from '@/hooks/useGetFollowArticles'
import { useGetTags } from '@/hooks/useGetTag'
import { userState } from '@/states/userState'

const Home = () => {
  const [currentUser] = useRecoilState(userState)
  const [activeFeed, setActiveFeed] = useState<'Global' | 'Your' | 'Tag'>(
    currentUser ? 'Your' : 'Global'
  )
  const [selectedTag, setSelectedTag] = useState<string>('')
  const { data: tags, refetch: tagsRefetch } = useGetTags()
  const [currentPage, setCurrentPage] = useState<number>(1)

  const {
    data: globalFeedArticles,
    refetch: globalFeedArticlesFetch,
    isLoading: globalFeedArticlesLoading,
    isFetching: globalFeedArticlesFetching,
  } = useGetArticles({ limit: MAIN_LIMIT, page: currentPage })
  const {
    data: yourFeedArticles,
    refetch: yourFeedArticlesFetch,
    isLoading: yourFeedArticlesLoading,
    isFetching: yourFeedArticlesFetching,
  } = useGetFollowArticles({ page: currentPage })

  const {
    data: tagArticles,
    refetch: tagFeedArticlesFetch,
    isLoading: tagArticlesLoading,
    isFetching: tagArticlesFetching,
  } = useGetArticles({
    tag: selectedTag,
    limit: MAIN_LIMIT,
    page: currentPage,
  })

  useEffect(() => {
    if (activeFeed === 'Your') yourFeedArticlesFetch()
    else if (activeFeed === 'Global') globalFeedArticlesFetch()
  }, [currentPage])

  useEffect(() => {
    tagsRefetch()
    if (selectedTag !== '') tagFeedArticlesFetch()
    setCurrentPage(1)
  }, [selectedTag])

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
                        setCurrentPage(1)
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
                      setCurrentPage(1)
                    }}
                  >
                    Global Feed
                  </div>
                </li>
                {activeFeed === 'Tag' && (
                  <li className="nav-item">
                    <div className={`nav-link ${activeFeed === 'Tag' && 'active'}`}>
                      <i className="ion-pound"></i> {selectedTag}
                    </div>
                  </li>
                )}
              </ul>
            </div>
            {activeFeed === 'Your' && (
              <ArticlePreview
                articles={yourFeedArticles?.articles}
                loading={yourFeedArticlesLoading || yourFeedArticlesFetching}
                totalPage={
                  yourFeedArticles ? Math.ceil(yourFeedArticles.articlesCount / MAIN_LIMIT) : 0
                }
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
            {activeFeed === 'Global' && (
              <ArticlePreview
                articles={globalFeedArticles?.articles}
                loading={globalFeedArticlesLoading || globalFeedArticlesFetching}
                totalPage={
                  globalFeedArticles ? Math.ceil(globalFeedArticles.articlesCount / MAIN_LIMIT) : 0
                }
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
            {activeFeed === 'Tag' && (
              <ArticlePreview
                articles={tagArticles?.articles}
                loading={tagArticlesLoading || tagArticlesFetching}
                totalPage={tagArticles ? Math.ceil(tagArticles.articlesCount / MAIN_LIMIT) : 0}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
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
                      setActiveFeed('Tag')
                      setSelectedTag(tag)
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
