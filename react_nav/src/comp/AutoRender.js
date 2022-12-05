// import React from 'react'

import { useState } from "react";
import AutoForm from "./AutoForm";
import Autok from "./Autok";

function AutoRender({auto,update}) {

    const[showForm,setShowForm]=useState(false);

    const form=()=>{
        setShowForm(prev=>!prev);
    }



  return (
    <div>
        
        

        {
            !showForm? <Autok auto={auto} update={update} form={form}/>
            :
            <div>
                <Autok auto={auto} update={update} form={form}/>
                <AutoForm auto={auto} update={update} form={form}/>
            </div>
        }

    </div>
  )
}

export default AutoRender;