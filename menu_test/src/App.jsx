// import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Main from './components/Main'
import NavBar from './components/NavBar'

function App() {



  return (
    <div className='bg-neutral-50 min-h-screen'>

      <Router>
        <NavBar />
        <Routes>
          <Route path='*' element={<Main />} />
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />

        </Routes>
      </Router>


    </div>
  )
}

export default App
