import ConfirmBox from "react-dialog-confirm";
import '../../node_modules/react-dialog-confirm/build/index.css';
import {useState} from 'react';

function Kutyanev({ kutyanev, setShowForm, update }) {
  const torles = async (id) => {
    const response = await fetch(
      "http://localhost:8000/api/rendelo/kutyanevek",
      {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ id }),
      }
    );

    const valasz = await response.text();
    update();
    alert(valasz);
  };

  const [isOpen,setIsOpen]=useState(false);
  const handleClose=()=>{setIsOpen(!isOpen)};
  const handleConfirm=()=>{torles(kutyanev.id);handleClose()}
  const handleCancel=()=>{handleClose()}

  return (
    <div className="card w-96 bg-primary text-primary-content m-2">
      <div className="card-body">
        <h2 className="card-title">{kutyanev.kutyanev}</h2>
        <p></p>
        <div className="card-actions justify-end">
          <button className="btn" onClick={() => setShowForm((prev) => !prev)}>
            Módosítás
          </button>
          <button className="btn" onClick={()=>handleClose()}>
         
            Törlés
          </button>

         
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
  );
}

export default Kutyanev;
