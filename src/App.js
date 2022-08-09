import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Library from './components/Library'
import Login from './components/Login'
import Register from './components/Register'
import Reset from './components/Reset'

function App() {
  return (
    <div className='App'>
      <h1>My Library</h1>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/library' element={<Library />}></Route>
        <Route path='/reset' element={<Reset />}></Route>
      </Routes>
    </div>
  )
}

export default App
