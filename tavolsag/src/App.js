// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, NavLink as Routes } from 'react-router-dom'
import Header from './comp/Header';
import Navbar from './comp/Navbar';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Main from './comp/Main';


function App() {
  return (
    <div>

      <Header />
      <Main/>
      <Router>
        <Navbar />
        <Routes>


        </Routes>
      </Router>


    </div>
  );
}

export default App;
