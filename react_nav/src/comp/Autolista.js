// import React from 'react'

import AutoRender from "./AutoRender";
import {useEffect, useState} from 'react';
import AutoForm from "./AutoForm";


function Autolista() {

    const[autok,setAutok]=useState([]);
    const[refresh,setRefresh]=useState(false);

    const update=()=>{
        setRefresh(prev=>!prev);
    }

    useEffect(()=>{
        fetch('http://localhost:8000/autok')
        .then(res=>res.json())
        .then(adat=>setAutok(adat))
        .catch(err=>console.log(err));

    },[refresh]);



  return (
    <div>
        <h2>Autólista:</h2>
        {
            autok.map((auto,index)=>(<AutoRender auto={auto} update={update} />))
        }
        

        <AutoForm update={update}/>



    </div>
  )
}

export default Autolista;