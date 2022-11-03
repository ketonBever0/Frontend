import { useState } from "react";



function KutyafajtakRender({kutyafajta}) {
  return (
    <div id="kutyanevCard" className="card mb-3" style={{maxWidth:"540px"}}>
        <div className="row g-0">
        
            <div className="col-md-8">
                <div className="card-body">
                    <p className="card-title" key={kutyafajta.nev}>Név: <b>{kutyafajta.nev}</b></p>
                    <p className="card-text" key={kutyafajta.eredetinev}>Eredeti neve: {kutyafajta.eredetinev}</p>
                    {/* <p className="card-text" key={kutyafajta.Id}>ID: {kutyafajta.Id}</p> */}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default KutyafajtakRender