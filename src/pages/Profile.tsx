import React, { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'

import ArticlePreview from '@/components/Article/ArticlePreview'
import ProfileButton from '@/components/Profile/ProfileButton'
import { useGetArticles } from '@/hooks/useGetArticles'
import { useGetProfile } from '@/hooks/useGetProfile'

// TODO: 페이지네이션 구현 (최대 개수 5개)
// const SIZE = 5

const Profile = () => {
  const { username: usernameParams } = useParams()
  const username = (usernameParams as string).replace('@', '')
  const [mode, setMode] = useState<string>('my')
  const { data: profileData, refetch: getProfileRefetch } = useGetProfile(username)
  const {
    data: myArticlesData,
    refetch: getMyArticlesRefetch,
    isLoading: myArticlesLoading,
    isFetching: myArticlesFetching,
  } = useGetArticles({
    author: username,
  })
  const {
    data: favoritedArticlesData,
    refetch: getFavoritedArticlesRefetch,
    isLoading: favoritedArticlesLoading,
    isFetching: favoritedArticlesFetching,
  } = useGetArticles({
    favorited: username,
  })

  useEffect(() => {
    setMode('my')
    getProfileRefetch()
  }, [username])

  useEffect(() => {
    if (mode === 'my') getMyArticlesRefetch()
    else getFavoritedArticlesRefetch()
  }, [mode])

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
                        onClick={() => setMode('my')}
                      >
                        My Articles
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={`nav-link ${mode === 'favorites' && 'active'}`}
                        to={`/@${profileData.username}/favorites`}
                        onClick={() => setMode('favorites')}
                      >
                        Favorited Articles
                      </Link>
                    </li>
                  </ul>
                </div>
                {mode === 'my' ? (
                  <ArticlePreview
                    articles={myArticlesData?.articles}
                    loading={myArticlesLoading || myArticlesFetching}
                    getArticleRefetch={getMyArticlesRefetch}
                  />
                ) : (
                  <ArticlePreview
                    articles={favoritedArticlesData?.articles}
                    loading={favoritedArticlesLoading || favoritedArticlesFetching}
                    getArticleRefetch={getFavoritedArticlesRefetch}
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
