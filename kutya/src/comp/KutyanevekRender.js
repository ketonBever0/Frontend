import {useState} from 'react'
import KutyanevekList from './KutyanevekList'
import KutyanevekForm from './KutyanevekForm'


function KutyanevekRender({kutyanev,update}) {

    const[showForm,setShowForm]=useState(false);
    const form=()=>{
        setShowForm(prev=>!prev);
    }    


  return (
    <div>
        {
            !showForm? <KutyanevekList kutyanev={kutyanev} update={update} form={form}/>
            :
            <div>
                <KutyanevekList kutyanev={kutyanev} update={update} form={form}/>
                <KutyanevekForm kutyanev={kutyanev} update={update} form={form}/>
            </div>
        }
    </div>
  )
}

export default KutyanevekRender