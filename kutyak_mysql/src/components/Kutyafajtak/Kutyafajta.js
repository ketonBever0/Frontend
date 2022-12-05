import ConfirmBox from "react-dialog-confirm";
import '../../../node_modules/react-dialog-confirm/build/index.css';
import {useContext,useState} from 'react';
import KutyafajtaContext from '../context/KutyfajtaContext';

function Kutyafajta({kutyafajta,kapcsol}) {
    const {torles}=useContext(KutyafajtaContext);
    const{id,nev,eredetinev}=kutyafajta;
    const [isOpen,setIsOpen]=useState(false);
    const handleClose=()=>{setIsOpen(!isOpen)};
    const handleConfirm=()=>{torles(id);handleClose()}
    const handleCancel=()=>{handleClose()}


  return (
    <div className="card w-96 bg-primary text-primary-content m-2">
    <div className="card-body">
    <h2 className="card-title">{nev}</h2>
    <p>{eredetinev}</p>
    <div className="card-actions justify-end">
      <button className="btn" onClick={kapcsol}>Módosítás</button>
      <button className="btn" onClick={()=>handleClose()}>Törlés</button>
    </div>
  </div>
  <ConfirmBox // Note : in this example all props are required
    options={{
    icon:"https://img.icons8.com/clouds/100/000000/vector.png",
    text:'Biztosan törli?',
    confirm:'Igen',
    cancel:'Nem',
    btn:true
    }}
    isOpen={isOpen}
    onClose={handleClose}
    onConfirm={handleConfirm}
    onCancel={handleCancel}
    />
</div>
  )
}

export default Kutyafajta
