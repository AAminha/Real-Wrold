import React from 'react'

import { Link } from 'react-router-dom'

import { UserInfoType } from '@/types/auth'

const LoginNavbar = ({ currentUser }: { currentUser: UserInfoType }) => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
        >
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link
              className="nav-link active"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/editor"
            >
              {' '}
              <i className="ion-compose"></i>&nbsp;New Article{' '}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/settings"
            >
              {' '}
              <i className="ion-gear-a"></i>&nbsp;Settings{' '}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to={`/profile/@${currentUser?.username}`}
            >
              <img
                src=""
                className="user-pic"
              />
              Eric Simons
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default LoginNavbar
