import {useContext,useRef} from 'react';
import KutyafajtaContext from '../context/KutyfajtaContext';
import {useNavigate} from 'react-router-dom';

function KutyafajtaForm({kutyafajta}) {
    
    const navigate=useNavigate();

    const {adatKuldes}=useContext(KutyafajtaContext);

    let cim="Új fajta felvitele";
    let defaultNev="";
    let defaultEredetinev="";
    let method='POST';

    
    if(kutyafajta){
        
        defaultNev=kutyafajta.nev;
        defaultEredetinev=kutyafajta.eredetinev;
        method='PATCH';
        cim="Fajta nevének módosítása";
    }

    const fajtaNev=useRef();
    const fajtaEredetinev=useRef();
    

    const onSubmit=(e)=>{
        e.preventDefault();
        let sendData={};
        if(method==='POST'){
            sendData={
                nev:fajtaNev.current?.value || fajtaNev.current,
                eredetinev:fajtaEredetinev.current?.value || fajtaEredetinev.current
            }
            console.log(fajtaNev.current);
            console.log(fajtaEredetinev.current.value);
        } else {
            sendData={
                id:kutyafajta.id,
                nev:fajtaNev.current?.value || fajtaNev.current,
                eredetinev:fajtaEredetinev.current?.value || fajtaEredetinev.current
            }
            console.log(fajtaNev.current);
            console.log(fajtaEredetinev.current.value);
        }
        console.log(sendData);
        adatKuldes(sendData,method);
        navigate('/kutyafajtak');
    }

  return (
    <div>
        <h2>{cim}</h2>
        <form onSubmit={onSubmit}>
        <input type="text" ref={fajtaNev} placeholder="Fajta neve" defaultValue={defaultNev} onChange={(e)=>fajtaNev.current=e.target.value} className="input input-bordered w-full max-w-xs" />
        <input type="text" ref={fajtaEredetinev} placeholder="Fajta eredeti neve" defaultValue={defaultEredetinev} onChange={(e)=>fajtaEredetinev.current=e.target.value} className="input input-bordered w-full max-w-xs" />
        <button type="submit" className="btn btn-primary">Küldés!</button>

        </form>
    </div>
  )
}

export default KutyafajtaForm