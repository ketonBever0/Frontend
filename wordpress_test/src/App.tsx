import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ArticleProvider } from './context/ArticleContext'
import ArticleContainer from './components/ArticleContainer'
import Header from './components/Header'

function App() {


  return (
    <div>
      <ArticleProvider>

        <Header />
        <ArticleContainer />


      </ArticleProvider>
    </div>
  )
}

export default App
