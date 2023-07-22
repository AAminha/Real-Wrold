import React, { useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import ArticlePreview from '@/components/ArticlePreview'
import ProfileButton from '@/components/Profile/ProfileButton'
import { useGetProfile } from '@/hooks/useGetProfile'
import { userState } from '@/states/userState'

const Profile = () => {
  const { username: usernameParams } = useParams()
  const username = (usernameParams as string).replace('@', '')
  const [mode, setMode] = useState<string>('my')
  const { data: profileData, refetch: getProfileRefetch } = useGetProfile(username)

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img
                src={profileData?.image}
                className="user-img"
              />
              <h4>{profileData?.username}</h4>
              <p>{profileData?.bio}</p>
              <ProfileButton
                username={profileData?.username}
                following={profileData?.following}
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
                    to={`/@${profileData?.username}`}
                    onClick={() => setMode('my')}
                  >
                    My Articles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${mode === 'favorites' && 'active'}`}
                    to={`/@${profileData?.username}/favorites`}
                    onClick={() => setMode('favorites')}
                  >
                    Favorited Articles
                  </Link>
                </li>
              </ul>
            </div>
            <ArticlePreview />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
