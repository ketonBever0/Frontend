import Header from "./components/Header";
import KutyanevLista from './components/KutyanevLista';
import Fooldal from './components/Fooldal';
import Navbar from './components/Navbar';
import KutyanevForm from './components/KutyanevForm';
import KutyafajtaForm from "./components/Kutyafajtak/KutyafajtaForm";
import { KutyafajtaProvider } from "./components/context/KutyfajtaContext";
import { KutyaProvider } from "./components/context/KutyaContext";
import KutyafajtaLista from "./components/Kutyafajtak/KutyafajtaLista";
import KutyaLista from "./components/Kutyak/KutyaLista";
import KutyaForm from "./components/Kutyak/KutyaForm";

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="text-3xl font-bold">
      <KutyaProvider>
        <KutyafajtaProvider>
          <Header />
          <Router basename="/rendelo">
            <Navbar />
            <Routes>
              <Route path='/' element={<Fooldal />} />
              <Route path='/kutyanevek' element={<KutyanevLista />} />
              <Route path='/ujkutyanev' element={<KutyanevForm />} />
              <Route path='/kutyafajtak' element={<KutyafajtaLista />} />
              <Route path='/ujkutyafajta' element={<KutyafajtaForm />} />
              <Route path='/kutyak' element={<KutyaLista />} />
              <Route path='/ujkutya' element={<KutyaForm />} />


            </Routes>

          </Router>
        </KutyafajtaProvider>
      </KutyaProvider>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
