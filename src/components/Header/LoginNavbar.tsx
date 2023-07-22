import React from 'react'

import { Link, useLocation } from 'react-router-dom'

import { UserData } from '@/types/user'

const LoginNavbar = ({ currentUser }: { currentUser: UserData }) => {
  const location = useLocation()

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
              className={`nav-link ${location.pathname === '/' && 'active'}`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === '/editor' && 'active'}`}
              to="/editor"
            >
              {' '}
              <i className="ion-compose"></i>&nbsp;New Article{' '}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === '/settings' && 'active'}`}
              to="/settings"
            >
              {' '}
              <i className="ion-gear-a"></i>&nbsp;Settings{' '}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname.includes('/profile') && 'active'}`}
              to={`/profile/@${currentUser?.username}`}
            >
              <img
                src={currentUser.image}
                className="user-pic"
              />
              {currentUser.username}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default LoginNavbar
