import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Article from './pages/Article'
import Auth from './pages/Auth'
import Create from './pages/Create'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/login"
        element={<Auth />}
      />
      <Route
        path="/register"
        element={<Auth />}
      />
      <Route
        path="/editor"
        element={<Create />}
      />
      <Route
        path="/editor/:slug"
        element={<Create />}
      />
      <Route
        path="/settings"
        element={<Settings />}
      />
      <Route
        path="/:username"
        element={<Profile />}
      />
      <Route
        path="/article/:slug"
        element={<Article />}
      />
    </Routes>
  )
}

export default App
