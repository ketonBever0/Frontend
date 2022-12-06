import { TelepulesProvider } from "./context/TelepulesContext";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Main from "./comp/Main";
import Telepules from "./comp/Telepules";
import { MegyeProvider } from "./context/MegyeContext";
import Megye from "./comp/Megye";
import MegyeTelepules from "./comp/MegyeTelepules";



function App() {
  return (
    <div className="bg-gray-900">

      <TelepulesProvider>
        <MegyeProvider>

          <Router>
            <Routes>
              <Route path="*" element={<Navigate to={'/'} />} />
              <Route path="/" element={<Main />} />
              <Route path="/telepules" element={<Telepules />} />
              <Route path="/megyek" element={<Megye />} />
              <Route path="/megyetelepules" element={<MegyeTelepules />} />
            </Routes>
          </Router>





        </MegyeProvider>
      </TelepulesProvider>

    </div>
  );
}

export default App;
