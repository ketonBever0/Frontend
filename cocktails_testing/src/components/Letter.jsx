import {useState} from "react";
import Cocktail from "./Cocktail";

function Letter() {
  const [cocktails,setCocktails]=useState([]);
  const [letter,setLetter]=useState("");

  const keres=()=>{

  if(letter!==""){

    fetch(`https:/www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
    .then(res=>res.json())
    .then(cocktails=>setCocktails(cocktails.drinks))
    .catch(err=>console.log(err));
  }

  }




  return (
    <div className="bg-sky-100">
      <h1 className="text-3xl py-5 font-bold bg-sky-200 text-center">Keresés kezdőbetű szerint</h1>
      <div className="flex  items-center  justify-center">
      <div className="flex-column py-5">
      <input type="text" maxLength={1} placeholder="Kezdőbetű" value={letter} onChange={(e)=>setLetter(e.target.value)} className="input input-bordered input-primary w-full max-w-xs" />
      <button onClick={()=>keres()} className="btn btn-primary">Keresés</button>
      </div> 
      </div>
      <div>
        { cocktails && cocktails.length>0 ? 
        <div>
        <p className="text-2xl text-center font-bold py-2">{cocktails.length} találat</p>
        <div className="grid justify-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {
          
          cocktails.map((cocktail,i)=>(<Cocktail cocktail={cocktail} />))
          
        }
        </div>
        </div>
         :""
        
        }        
      </div>
    </div>
  )
}

export default Letter