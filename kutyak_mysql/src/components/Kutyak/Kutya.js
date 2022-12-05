import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import KutyaContext from '../context/KutyaContext';
import ConfirmBox from "react-dialog-confirm";





function Kutya({ kutya }) {

  const navigate = useNavigate();

  const { torles } = useContext(KutyaContext);

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => { setIsOpen(!isOpen) };
  const handleConfirm = () => { torles(kutya.id); handleClose() }
  const handleCancel = () => { handleClose() }


  const modositas = (kutya) => {
    navigate('/ujkutya', { state: { kutya } });
  }



  return (
    <div className="card w-96 bg-sky-200 text-black my-2">
      <div className="card-body items-center text-center">
        <h2>{kutya.kutyanev}</h2>
        <p className="card-title">Fajta:{kutya.nev}</p>
        <p className="card-title">Életkor:{kutya.eletkor}</p>
        <p className="card-title">Utolsó ellenőrzés:{kutya.utolsoell}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => modositas(kutya)}>Módosítás</button>
          <button className="btn btn-primary" onClick={() => handleClose()}>Törlés</button>
        </div>
      </div>

      <ConfirmBox // Note : in this example all props are required
        options={{
          icon: "https://img.icons8.com/clouds/100/000000/vector.png",
          text: 'Biztosan törli?',
          confirm: 'Igen',
          cancel: 'Nem',
          btn: true
        }}
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />

    </div>
  )
}

export default Kutya;