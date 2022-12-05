import { useState, useEffect, useContext } from "react";
import KutyafajtaContext from '../context/KutyfajtaContext';
import KutyaContext from "../context/KutyaContext";
import { useNavigate, useLocation } from 'react-router-dom';

function KutyaForm() {
  const navigate = useNavigate();
  const { adatKuldes } = useContext(KutyaContext);
  let cim = "Új rendelési adat felvitele";
  let method = "POST";

  let formObj={};

  const { state } = useLocation();
  

  if (state!==null) {
    const { kutya } = state;
    cim = "Rendelési adat módosítása";
    method = 'PATCH';
    formObj = {
      id: kutya.id,
      nevid: kutya.nevid,
      fajtaid: kutya.fajtaid,
      eletkor: kutya.eletkor,
      utolsoell: kutya.utolsoell
    }
  }




const { kutyafajtak } = useContext(KutyafajtaContext);
const [kutyanevek, setKutyanevek] = useState([]);
const [formData, setFormData] = useState(formObj);

const writeData = (e) => {
  setFormData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
}

const onSubmit = (e) => {
  e.preventDefault();
  adatKuldes(formData, method);
  navigate('/kutyak');
}

useEffect(() => {
  fetch('http://localhost:8000/api/rendelo/kutyanevek')
    .then(res => res.json())
    .then(adat => setKutyanevek(adat));
}, []);


return (
  <div className="flex justify-center items-center">
    <div className="flex-column">
      <h2>{cim}</h2>
      <form onSubmit={onSubmit}>
        <div className="form-control w-full max-w-xs my-2">
          <label className="label">
            <span className="label-text">A kutya életkora</span>
          </label>
          <input
            type="text" required value={formData.eletkor} onChange={writeData}
            className="input input-bordered w-full max-w-xs"
            id="eletkor"
          />
        </div>
        <div className="form-control w-full max-w-xs my-2">
          <label className="label">
            <span className="label-text">Utolsó ellenőrzés dátuma</span>
          </label>
          <input
            type="text" required value={formData.utolsoell} onChange={writeData}
            className="input input-bordered w-full max-w-xs"
            id="utolsoell"
          />
        </div>
        <div className="form-control w-full max-w-xs my-2">
          <label className="label">
            <span className="label-text">Válasszon kutyanevet</span>
          </label>
          <select className="select select-bordered" value={formData.nevid} onChange={writeData} id="nevid">
            {
              kutyanevek.map((kutyanev) => (<option key={kutyanev.id} value={kutyanev.id}>{kutyanev.kutyanev}</option>))
            }
          </select>
        </div>
        <div className="form-control w-full max-w-xs my-2">
          <label className="label">
            <span className="label-text">Válasszon kutyafajtát!</span>
          </label>
          <select className="select select-bordered" value={formData.fajtaid} onChange={writeData} id="fajtaid">
            {
              kutyafajtak.map((kutyafajta) => (<option key={kutyafajta.id} value={kutyafajta.id}>{kutyafajta.nev}</option>))
            }
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Küldés</button>
      </form>
    </div>
  </div>
);
}

export default KutyaForm;
