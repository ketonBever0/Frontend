import {useState} from 'react';

function KutyanevForm({inputKutyanev,update}) {
    let method='POST';
    let cim="Új kutyanév felvitele";
    const[kutyanev,setKutyanev]=useState("");
    let defaultValue="";

    if(inputKutyanev!=="undefined" && inputKutyanev!=null){
        //setKutyanev(inputKutyanev.kutyanev);
        method='PATCH';
        cim="Kutyanév módosítása";
        defaultValue=inputKutyanev.kutyanev;
    }



    const adatKuldes=async (adat)=>{
        const response=await fetch('http://localhost:8000/api/rendelo/kutyanevek',{
            method:method,
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(adat)
        });

        const valasz=await response.text();
        
        alert(valasz);

    }
    const onSubmit=(e)=>{
        e.preventDefault();
        if(method==='PATCH'){
            adatKuldes({"id":inputKutyanev.id,"kutyanev":kutyanev});
            update();
        } else {
            adatKuldes({kutyanev});
        }
    }

  return (
    <div>
        <h2>{cim}</h2>
        <form onSubmit={onSubmit}>
        <input type="text" placeholder="Kutyanév" defaultValue={defaultValue} onChange={(e)=>setKutyanev(e.target.value)} className="input input-bordered w-full max-w-xs" />
        <button type="submit" className="btn btn-primary">Küldés!</button>

        </form>
    </div>
  )
}

export default KutyanevForm;