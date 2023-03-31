import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './ui/NavBar'
import Main from './pages/Main'
import { CardProvider } from './context/CardContext'
import ByClass from './pages/search/ByClass'
import BySet from './pages/search/BySet'
import ByQuality from './pages/search/ByQuality'


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
            <Route path='/byset' element={<BySet />} />
            <Route path='/byquality' element={<ByQuality />} />
          </Routes>
        </Router>

      </CardProvider>
    </div>
  )
}

export default App
