import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ArticleProvider } from './context/ArticleContext'
import ArticleContainer from './components/ArticleContainer'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ArticlePage from './components/ArticlePage'

function App() {


  return (
    <div>
      <ArticleProvider>

        <Header />
        <Router>
          <Routes>
            <Route path='/' element={<ArticleContainer />} />
            <Route path='/article/:slug' element={<ArticlePage />} />
          </Routes>
        </Router>



      </ArticleProvider>
    </div>
  )
}

export default App
