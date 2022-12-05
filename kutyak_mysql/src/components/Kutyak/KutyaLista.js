import KutyaContext from "../context/KutyaContext";
import {useContext} from "react";
import Kutya from "./Kutya";
import {useNavigate} from 'react-router-dom';

function KutyaLista() {
    const navigate=useNavigate();

    const ujkutya=()=>{
        navigate('/ujkutya');
    }

    const {kutyak}=useContext(KutyaContext);
  return (
    <div className='flex justify-center items-center'>
         
        <div className='flex-column'>
        <button onClick={ujkutya} className="btn btn-primary">Új rendelési adat felvitele</button>   
       
        {
            kutyak.map((kutya,index)=>(<Kutya key={kutya.id} kutya={kutya} />))
        }
    </div>
    </div>
  )
}

export default KutyaLista