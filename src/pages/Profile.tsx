import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import ArticlePreview from '@/components/ArticlePreview'
import { userState } from '@/states/userState'

const Profile = () => {
  const [currentUser] = useRecoilState(userState)
  const [mode, setMode] = useState<string>('my')

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img
                src={currentUser?.image}
                className="user-img"
              />
              <h4>{currentUser?.username}</h4>
              <p>{currentUser?.bio}</p>
              <button className="btn btn-sm btn-outline-secondary action-btn">
                <i className="ion-plus-round"></i>
                &nbsp; Follow Eric Simons
              </button>
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
                    to={`/@${currentUser?.username}`}
                    onClick={() => setMode('my')}
                  >
                    My Articles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${mode === 'favorites' && 'active'}`}
                    to={`/@${currentUser?.username}/favorites`}
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
