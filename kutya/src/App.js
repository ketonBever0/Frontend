// import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import './App.css';

import Main from './comp/Main';
import NavBar from './comp/NavBar'

import RendelesiAdatok from './comp/RendelesiAdatok'
import Kutyafajtak from './comp/Kutyafajtak';
import Kutyanevek from './comp/Kutyanevek';
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
