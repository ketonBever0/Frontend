// import React from 'react'
import {useState} from 'react';

function AutoForm({update}) {


    const[formData,setFormData]=useState({
        marka:"",
        tipus:"",
        rendszam:"",
        gyartasiev:0
    })


    // lehessen változtatni

    let formObj={};
    let method="POST";
    let id="";

    
    if(auto!=="undefined" && auto!=null){
        formObj={
            id:auto.id,
            marka:auto.marka,
            tipus:auto.tipus,
            rendszam:auto.rendszam,
            kor:auto.kor
            }
        method="PATCH";    
        id=auto.id;
        } else {
            formObj={
                marka:"",
                tipus:"",
                rendszam:"",
                kor:0
            }
        }




    const writeData=(e)=>{
        setFormData((prevState)=>({...prevState,[e.target.id]:e.target.value}))
    }

    const sendData=async (data)=>{
        const response=await fetch(`http://localhost:8000/autok/${auto.id}`,{
            method:`${method}`,
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })

        const eredmeny=await response.text();
        alert(eredmeny);
        update();
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        sendData(formData)
        
        if(method==="POST"){
            setFormData({
                marka:"",
                tipus:"",
                rendszam:"",
                gyartasiev:0
            })
        }
    }
    


  return (
    <div>
        <div className="mb-3">
            <h2>Új autó felvétele</h2>
            <form onSubmit={onSubmit}>
                <label className="form-label">Marka</label>
                <input type="text" value={formData.marka} onChange={writeData} id="marka" className="form-control" placeholder="Márka"/>

                <label className="form-label">Típus</label>
                <input type="text" value={formData.tipus} onChange={writeData} id="tipus" className="form-control" placeholder="Típus"/>

                <label className="form-label">Rendszám</label>
                <input type="text" value={formData.rendszam} onChange={writeData} id="rendszam" className="form-control" placeholder="Rendszám"/>

                <label className="form-label">Gyártás éve</label>
                <input type="text" value={formData.gyartasiev} onChange={writeData} id="gyartasiev" className="form-control" placeholder="Gyártás éve"/>

                <button type="submit" className="btn btn-primary">Küldés</button>
            </form>
        </div>
    </div>
  )
}

export default AutoForm;