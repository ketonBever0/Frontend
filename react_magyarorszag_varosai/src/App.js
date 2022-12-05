import { TelepulesProvider } from "./context/TelepulesContext";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Main from "./comp/Main";
import Telepules from "./comp/Telepules";



function App() {
  return (
    <div className="bg-gray-900">
      
      <TelepulesProvider>

        <Router>
          <Routes>
            <Route path="*" element={<Navigate to={'/'}/>}/>
            <Route path="/" element={<Main/>}/>
            <Route path="/telepules" element={<Telepules/>}/>
          </Routes>
        </Router>






      </TelepulesProvider>

    </div>
  );
}

export default App;
