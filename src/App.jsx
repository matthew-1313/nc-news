import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/navbar'
import { Users } from './components/users'
import { Articles } from './components/articles'
import { Topics } from './components/topics'
import { Home } from './components/home'
import './App.css'
import './index.css'

function App() {


  return (
    <>
      <h1>NEWS!</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/articles" element={<Articles/>} />
        <Route path="/topics" element={<Topics/>} />
      </Routes>
    </>
  )
}

export default App
