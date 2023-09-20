import React, { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'

import ArticlePreview from '@/components/Article/ArticlePreview'
import ProfileButton from '@/components/Profile/ProfileButton'
import { SUB_LIMIT } from '@/constants'
import { useGetArticles } from '@/hooks/useGetArticles'
import { useGetProfile } from '@/hooks/useGetProfile'

const Profile = () => {
  const { username: usernameParams } = useParams()
  const username = (usernameParams as string).replace('@', '')
  const [mode, setMode] = useState<string>('my')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data: profileData, refetch: getProfileRefetch } = useGetProfile(username)
  const {
    data: myArticlesData,
    refetch: getMyArticlesRefetch,
    isLoading: myArticlesLoading,
    isFetching: myArticlesFetching,
  } = useGetArticles({
    author: username,
    limit: SUB_LIMIT,
    page: currentPage,
  })
  const {
    data: favoritedArticlesData,
    refetch: getFavoritedArticlesRefetch,
    isLoading: favoritedArticlesLoading,
    isFetching: favoritedArticlesFetching,
  } = useGetArticles({
    favorited: username,
    limit: SUB_LIMIT,
    page: currentPage,
  })

  useEffect(() => {
    setMode('my')
    getProfileRefetch()
  }, [username])

  useEffect(() => {
    if (mode === 'my') getMyArticlesRefetch()
    else getFavoritedArticlesRefetch()
    setCurrentPage(1)
  }, [currentPage])

  return (
    <div>
      {profileData && (
        <div className="profile-page">
          <div className="user-info">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-10 offset-md-1">
                  <img
                    src={profileData.image}
                    className="user-img"
                  />
                  <h4>{profileData.username}</h4>
                  <p>{profileData.bio}</p>
                  <ProfileButton
                    username={profileData.username}
                    following={profileData.following}
                    getProfileRefetch={getProfileRefetch}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">
                <div className="articles-toggle">
                  <ul className="nav nav-pills outline-active">
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${mode === 'my' && 'active'}`}
                        to={`/@${profileData.username}`}
                        onClick={() => {
                          setMode('my')
                          setCurrentPage(1)
                        }}
                      >
                        My Articles
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${mode === 'favorites' && 'active'}`}
                        to={`/@${profileData.username}/favorites`}
                        onClick={() => {
                          setMode('favorites')
                          setCurrentPage(1)
                        }}
                      >
                        Favorited Articles
                      </Link>
                    </li>
                  </ul>
                </div>
                {mode === 'my' && (
                  <ArticlePreview
                    articles={myArticlesData?.articles}
                    loading={myArticlesLoading || myArticlesFetching}
                    totalPage={
                      myArticlesData ? Math.ceil(myArticlesData.articlesCount / SUB_LIMIT) : 0
                    }
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                )}
                {mode === 'favorites' && (
                  <ArticlePreview
                    articles={favoritedArticlesData?.articles}
                    loading={favoritedArticlesLoading || favoritedArticlesFetching}
                    totalPage={
                      favoritedArticlesData
                        ? Math.ceil(favoritedArticlesData.articlesCount / SUB_LIMIT)
                        : 0
                    }
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
