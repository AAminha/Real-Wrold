import React from 'react'

import { Link, useLocation } from 'react-router-dom'

const LogoutNavbar = () => {
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
              className={`nav-link ${location.pathname === '/login' && 'active'}`}
              to="/login"
            >
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === '/register' && 'active'}`}
              to="/register"
            >
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default LogoutNavbar
