import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './ui/NavBar'
import Main from './pages/Main'
import { CardProvider } from './context/CardContext'


function App() {

  return (
    <div className='min-h-screen'>

      <CardProvider>

        <Router>
          <NavBar />
          <Routes>
            <Route path='*' element={<Main />} />
            <Route path='/' element={<Main />} />
          </Routes>
        </Router>

      </CardProvider>
    </div>
  )
}

export default App
