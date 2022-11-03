import {useEffect, useState} from 'react'
import KutyafajtakRender from "./KutyafajtakRender";

function Kutyafajtak({kutyafajta}) {

    const[kutyafajtak,setKutyafajtak]=useState([])
    const[refresh,setRefresh]=useState(false)


    const update=()=>{
      setRefresh(prev=>!prev)
    }

    useEffect(()=>{
        fetch('http://localhost:8000/api/rendelo/kutyafajtak')
        .then(res=>res.json())
        .then(kutyafajtak=>setKutyafajtak(kutyafajtak))
        .catch(err=>console.log(err))
    },[refresh])




  return (
    <div>
        <h1>Kutyafajták</h1>
        {
          kutyafajtak.map((kutyafajta,index)=>(<KutyafajtakRender kutyafajta={kutyafajta} update={update}/>))
        }

    </div>
  )
}

export default Kutyafajtak