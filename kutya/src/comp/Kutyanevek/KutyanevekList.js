

function KutyanevekList({kutyanev,update,form}) {


    const kutyanevDelete=async (id)=>{
        if(window.confirm("Biztosan törli?")){
            const response=await fetch(`http://localhost:8000/api/rendelo/kutyanevek/${id}`,{
            method:'DELETE'
        })

        const eredmeny=await response.text();
        console.log(eredmeny);
        update();
        }
    }



  return (
    <div id="kutyanevCard" className="card mb-3" style={{maxWidth:"540px"}}>
        <div className="row g-0">
        
            <div className="col-md-8">
                <div className="card-body">
                    <h4><i onClick={()=>kutyanevDelete(kutyanev.Id)} className="bi bi-trash iconButton"></i>&nbsp;<i onClick={()=>form()} className="bi bi-pen iconButton"></i></h4>
                    <p className="card-title" key={kutyanev.kutyanev}>Név: <b>{kutyanev.kutyanev}</b></p>
                    <p className="card-text" key={kutyanev.Id}>ID: {kutyanev.Id}</p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default KutyanevekList