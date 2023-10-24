import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { NavBar } from './components/navbar'
import { Users } from './components/users'
import { Articles } from './components/articles'
import { Topics } from './components/topics'
import { Home } from './components/home'
import { getArticles } from '../api'
import { SinlgleArticle } from './components/singleArticle'
import { SingleTopic } from './components/singleTopic'
import './App.css'
import './index.css'

function App() {

  return (
    <>
      <Link to="/"><h1 id="heading">NEWS!</h1></Link>
      <NavBar />
      <br/>
      <Routes>
        <Route
        path="/"
        element={<Home/>} />

        <Route
        path="/users"
        element={<Users/>} />

        <Route
        path="/articles"
        element={<Articles />} />

        <Route
        path="/articles/:article_id"
        element={<SinlgleArticle />} />

        <Route
        path="/topics"
        element={<Topics/>} />

        <Route
        path="/topics/:topic"
        element={<SingleTopic/>} />
      </Routes>
    </>
  )
}

export default App
