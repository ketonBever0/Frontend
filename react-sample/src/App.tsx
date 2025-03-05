import './App.css'
import NavBar from './ui/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import RandomUsers from './pages/RandomUsers';
import ToDo from './pages/ToDo';

function App() {


  return (
    <div className='bg-gray-800'>
      {/* A BrowserRouter oldalbetöltés nélkül cseréli le az aktív oldalt (főkomponens) és az útvonalat */}
      <Router>

        {/* A navigációs sáv azért kerül Routeren belül, de a Routes-on kívül, mert ez mindig látszódik */}
        <NavBar />

        {/* Itt beállítom TailWind-el az oldal minimum magasságát a képernyő magasságára és középre igazítom az oldal tartalmát */}
        <div className='min-h-screen flex justify-center items-center'>
          <div className='bg-blue-950 p-20 rounded-3xl text-gray-400'>


            {/* A Routes blokkba kerülnek a route-ok, nem tartalmazhat Route-tól eltérő elemet */}
            <Routes>

              {/* A legelső ("*") route nem definiált útvonal megadásakor jön be */}
              <Route path='*' element={<Main />} />
              <Route path='/' element={<Main />} />
              <Route path='/random-users' element={<RandomUsers />} />
              <Route path='/todo' element={<ToDo />} />

            </Routes>
          </div>
        </div>

      </Router>
    </div>
  )
}

export default App
