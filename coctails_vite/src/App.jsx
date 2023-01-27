// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Main from "./comp/Main"
import NavBar from "./comp/NavBar"
import ByIngredientName from './comp/search/ByIngredientName/ByIngredientName'
import ByName from './comp/search/ByName/ByName'
import ByStartLetter from './comp/search/ByStartLetter/ByStartLetter'



function App() {
  return (
    <div className="bg-neutral min-h-screen mx-auto px-4" data-theme="night">
      <div className="text-4xl font-bold mb-20">Koktél kereső</div>
      <Router basename='/'>
        <NavBar />
        <Routes>
          <Route path='*' element={<Main />} />
          <Route path='/' element={<Main />} />
          <Route path='/name' element={<ByName />} />
          <Route path='/ingredient' element={<ByIngredientName />} />
          <Route path='/startletter' element={<ByStartLetter />} />
        </Routes>
      </Router>
    </div>
  )

}

export default App
