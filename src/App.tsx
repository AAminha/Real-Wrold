import React, { useEffect } from 'react'

import { Route, Routes } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { userAPI } from './API/user'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Article from './pages/Article'
import Create from './pages/Create'
import Edit from './pages/Edit'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Settings from './pages/Settings'
import { PrivateRouteLogin, PrivateRouteLogout } from './service/PrivateRoute'
import api from './service/TokenService'
import { userState } from './states/userState'

const App = () => {
  const [, setCurrentUser] = useRecoilState(userState)

  const getUserData = () => {
    userAPI.get().then((data) => {
      const userData = data.user
      setCurrentUser({
        username: userData.username,
        bio: userData.bio,
        image: userData.image,
        email: userData.email,
      })
      api.set(userData.token)
    })
  }

  useEffect(() => {
    if (api.get() !== undefined) {
      getUserData()
    }
  }, [])

  return (
    <main>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={
            <PrivateRouteLogin>
              <Login />
            </PrivateRouteLogin>
          }
        />
        <Route
          path="/register"
          element={
            <PrivateRouteLogin>
              <Register />
            </PrivateRouteLogin>
          }
        />
        <Route
          path="/editor"
          element={
            <PrivateRouteLogout>
              <Create />
            </PrivateRouteLogout>
          }
        />
        <Route
          path="/editor/:slug"
          element={<Edit />}
        />
        <Route
          path="/settings"
          element={
            <PrivateRouteLogout>
              <Settings />
            </PrivateRouteLogout>
          }
        />
        <Route
          path="/:username/*"
          element={<Profile />}
        />
        <Route
          path="/article/:slug"
          element={<Article />}
        />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
