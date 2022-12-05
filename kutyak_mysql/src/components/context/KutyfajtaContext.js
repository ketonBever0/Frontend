import {useState,useEffect,createContext} from 'react';

const KutyafajtaContext=createContext();

export const KutyafajtaProvider=({children})=>{
    
    const[kutyafajtak,setKutyafajtak]=useState([]);
    const[refresh,setRefresh]=useState(false);
    const update=()=>{
        setRefresh(prev=>!prev);
    }

    useEffect(()=>{
        fetch('http://localhost:8000/api/rendelo/kutyafajtak')
        .then(res=>res.json())
        .then(adat=>setKutyafajtak(adat))
        .catch(err=>console.log(err));
    },[refresh]);

    const adatKuldes=async (adat,method)=>{
        const response=await fetch('http://localhost:8000/api/rendelo/kutyafajtak',{
            method:method,
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(adat)
        });

        const valasz=await response.text();
        update();
        alert(valasz);

    }

    const torles=async (id)=>{
        const response=await fetch('http://localhost:8000/api/rendelo/kutyafajtak',{
          method:'DELETE',
          headers:{'Content-type':'application/json'},
          body:JSON.stringify({id})
        });
  
        const valasz=await response.text();
        update();
        alert(valasz);
  
    }


    return <KutyafajtaContext.Provider value={{kutyafajtak,update,adatKuldes,torles}}>{children}</KutyafajtaContext.Provider>

}

export default KutyafajtaContext;