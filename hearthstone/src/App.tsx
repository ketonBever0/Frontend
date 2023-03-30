import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './ui/NavBar'
import Main from './pages/Main'
import { CardProvider } from './context/CardContext'
import ByClass from './pages/search/byClass/ByClass'


function App() {

  return (
    <div className='min-h-screen bg-neutral' data-theme="hsTheme">

      <CardProvider>

        <Router>
          <NavBar />
          <Routes>
            <Route path='*' element={<Main />} />
            <Route path='/' element={<Main />} />
            <Route path='/byclass' element={<ByClass />} />
          </Routes>
        </Router>

      </CardProvider>
    </div>
  )
}

export default App
