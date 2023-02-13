import NameContext from "./context/NameContext"
import { useContext } from "react"
import Cocktail from "./Cocktail";


function Cocktailname() {
  const {cocktails,cocktailName,setCocktailname,kereses,search,setSearch}=useContext(NameContext);
  return (
    <div> <h3 className="text-3xl font-bold text-center">
    Keresés a koktél neve szerint
  </h3>
  <div className="flex items-center justify-center">
    <div className="flex-column my-10">
      <div className="form-control">
        <input
          type="text" value={cocktailName} onChange={(e)=>{setCocktailname(e.target.value);setSearch(false)}}
          placeholder="koktél neve" required
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </div>
    
      <div className="form-control">
        <button onClick={()=>kereses()} className="btn btn-primary m-4">Keresés</button>
      </div>
    </div>
  </div>
  <div>
    {
      (cocktails && cocktails.length>0) ?
      <>
      <p className="text-3xl font-bold text-center">{cocktails.length} db találat</p>
      <div className="grid justify-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {cocktails.map((elem,i)=>(<Cocktail key={i} cocktail={elem} />))
      }
      </div>
      </>
       : <>{ ( (cocktailName) !=="" && search) ?
            <p className="text-3xl font-bold text-center">Nincsenek {cocktailName} nevű koktélok!</p>
          :""}</>
    }
  </div>
</div>
  )
}

export default Cocktailname;