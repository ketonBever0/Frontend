import './App.css';
import Main from './comp/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './comp/NavBar';
import ByIngredientName from './comp/search/ByIngredientName/ByIngredientName';
import ByStartLetter from './comp/search/ByStartLetter/ByStartLetter';



function App() {
  return (
    <div className="bg-neutral min-h-screen mx-auto px-4" data-theme="synthwave">
      <div className="text-4xl font-bold mb-20">Koktél kereső</div>
      <Router basename='/'>
        <NavBar />
        <Routes>
          <Route path='*' element={<Main />} />
          <Route path='/' element={<Main />} />
          <Route path='/byingredient' element={<ByIngredientName />} />
          <Route path='/bystartletter' element={<ByStartLetter />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
