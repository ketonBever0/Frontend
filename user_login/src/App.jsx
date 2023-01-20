import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './comp/Header'
import Login from './comp/Login'
import Main from './comp/Main'
import Menu from './comp/Menu'
import Register from './comp/Register'

function App() {


  return (
    <div className='container ml-10'>
      <h1 className='text-3xl font-bold'>User login Frontend</h1>
      <Header headerText={"Fejléc"} />
      <Router>
        <Menu />
        <Routes>
          <Route path='*' element={<Main />} />
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
