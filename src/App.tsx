import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header/Header'
import Article from './pages/Article'
import Auth from './pages/Auth'
import Create from './pages/Create'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

const App = () => {
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
      <Footer />
    </main>
  )
}

export default App
