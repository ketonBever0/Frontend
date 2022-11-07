// import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';

import './App.css';

import Main from './comp/Main';
import NavBar from './comp/NavBar'

import RendelesiAdatok from './comp/RendelesiAdatok';
import Kutyafajtak from './comp/Kutyafajtak/Kutyafajtak';
import Kutyanevek from './comp/Kutyanevek/Kutyanevek';
import Nevjegy from './comp/Nevjegy';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/rendelesiadatok" element={<RendelesiAdatok/>}/>
          <Route path="/kutyanevek" element={<Kutyanevek/>}/>
          <Route path="/kutyafajtak" element={<Kutyafajtak/>}/>
          <Route path="/nevjegy" element={<Nevjegy/>}/>
          <Route path="*" element={<Navigate to='/'/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
