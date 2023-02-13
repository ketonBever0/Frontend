import Main from "./components/Main";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Letter from "./components/Letter";
import Name from "./components/Name";
import Ingredient from "./components/Ingredient";
import { NameProvider } from "./components/context/NameContext";

import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";

function App() {
 

  return (
    <div>
      <NameProvider>
      <Header cim={"Koktél kereső"} />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/name" element={<Name />} />
          <Route path="/ingredient" element={<Ingredient />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Router>
      </NameProvider>
      
      
    </div>
  )
}

export default App
