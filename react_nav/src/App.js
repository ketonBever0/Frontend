import './App.css';
import Main from './comp/Main';
import Autolista from './comp/Autolista';
import AutoForm from './comp/AutoForm';


import Navbar from './comp/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          {/* <Route path='/autolista' element={<Autolista/>}/>
          <Route path='/autoform' element={<AutoForm/>}/> */}

        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
