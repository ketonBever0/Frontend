import Kutyafajta from "./Kutyafajta"
import KutyafajtaForm from "./KutyafajtaForm";
import {useState} from 'react';

function KutyafajtaRender({kutyafajta}) {
    const[showForm,setShowForm]=useState(false);

    const kapcsol=()=>{
        setShowForm(prev=>!prev);
    }

  return (
    <div>
        {
            !showForm ? <Kutyafajta kutyafajta={kutyafajta} kapcsol={kapcsol} />
            : 
            <div>
                <Kutyafajta kutyafajta={kutyafajta} kapcsol={kapcsol} />
                <KutyafajtaForm  kutyafajta={kutyafajta}/>
            </div>
        }
    </div>
  )
}

export default KutyafajtaRender