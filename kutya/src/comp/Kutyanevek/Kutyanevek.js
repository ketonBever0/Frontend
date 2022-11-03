import {useEffect, useState} from 'react'
import KutyanevekForm from './KutyanevekForm'
import KutyanevekRender from './KutyanevekRender'

function Kutyanevek({kutyanev}) {


    const[kutyanevek,setKutyanevek]=useState([])
    const[refresh,setRefresh]=useState(false)

    const update=()=>{
        setRefresh(prev=>!prev)
    }

    const[/* showForm, */setShowForm]=useState(false)

    const form=()=>{
        setShowForm(prev=>!prev);
    }    


    useEffect(()=>{
        fetch('http://localhost:8000/api/rendelo/kutyanevek')
        .then(res=>res.json())
        .then(kutyaknevek=>setKutyanevek(kutyaknevek))
        .catch(err=>console.log(err))
    },[refresh])




  return (
    <div>
        <h1>Kutyanevek listája</h1>
        {
            kutyanevek.map((kutyanev,index)=>(<KutyanevekRender kutyanev={kutyanev} update={update}/>))
        }
        
        <h3>Kutyanév hozzáadása</h3>
        <KutyanevekForm kutyanev={kutyanev} update={update} form={form}/>
    </div>
  )
}

export default Kutyanevek