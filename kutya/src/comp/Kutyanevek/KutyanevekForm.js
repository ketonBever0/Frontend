import {useState} from 'react'


function KutyanevekForm({kutyanev,update}) {

    let formObj={};
    let method="POST";
    let id="";


    if(kutyanev!=="undefined" && kutyanev!=null) {
        formObj={
            kutyanev:kutyanev.kutyanev
        }
        method="PATCH";
        id=kutyanev.Id;
    }else{
        formObj={
            kutyanev:""
        }
    }

    const[formData,setFormData]=useState(formObj);

    const writeData=(e)=>{
        setFormData((prev)=>({...prev,[e.target.id]:e.target.value}));
    }


    const sendData=async (data)=>{
        
        const response=await fetch(`http://localhost:8000/api/rendelo/kutyanevek/${id}`,{
            method:`${method}`,
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(data)
        })

        const result=await response.text();
        console.log(result);
        update();
    }

    const kutyanevSubmit=(e)=>{
        e.preventDefault();
        sendData(formData);
        if(method==="POST"){
            setFormData({
                kutyanev:""
            });
        }
        

    }




  return (
    <div>
        <form id="kutyanevForm" onSubmit={kutyanevSubmit}>
            <label htmlFor="kutyanev" className="form-label">Kutya neve</label>
            <input required type="text" className="form-control" value={formData.kutyanev} onChange={writeData} id="kutyanev"/>
            {/* <label htmlFor="Id" className="form-label">Kutya azonosító száma</label>
            <input type="text" className="form-control" value={formData.Id} onChange={writeData} id="Id"/> */}
            
            <button type="submit" className="btn btn-primary">KÉSZ</button>
        </form>
    </div>
  )
}

export default KutyanevekForm