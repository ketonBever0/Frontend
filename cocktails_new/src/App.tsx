import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './ui/NavBar'
import Home from './pages/Home'


function App() {


  return (

    <div className="bg-neutral min-h-screen mx-auto px-4">

      <Router>
        <NavBar />
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/' element={<Home />} />

        </Routes>
      </Router>


    </div>

  )
}

export default App
