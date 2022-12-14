import { TelepulesProvider } from "./context/TelepulesContext";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Main from "./comp/Main";
import Telepules from "./comp/Telepules";
import { MegyeProvider } from "./context/MegyeContext";
import Megye from "./comp/Megye";
import MegyeTelepules from "./comp/MegyeTelepules";
import TelepulesAdat from "./comp/TelepulesAdat";
import { TipusProvider } from "./context/TipusContex";
import Tipus from "./comp/Tipus";
import TipusTelepules from "./comp/TipusTelepules";



function App() {
  return (
    <div className="bg-gray-900">

      <TelepulesProvider>
        <MegyeProvider>
          <TipusProvider>

            <Router>
              <Routes>
                <Route path="*" element={<Navigate to={'/'} />} />
                <Route path="/" element={<Main />} />
                <Route path="/telepules" element={<Telepules />} />
                <Route path="/megyek" element={<Megye />} />

                <Route path="/megyetelepules" element={<MegyeTelepules />} />
                <Route path="/telepulesadatok" element={<TelepulesAdat />} />


                <Route path="/tipusok" element={<Tipus />} />
                <Route path="/jogallastelepules" element={<TipusTelepules />} />

              </Routes>
            </Router>




          </TipusProvider>
        </MegyeProvider>
      </TelepulesProvider>

    </div>
  );
}

export default App;
