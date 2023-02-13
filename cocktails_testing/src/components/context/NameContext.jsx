import {useState,createContext} from 'react';

const NameContext=createContext();

export const NameProvider=({children})=>{

    const [cocktails,setCocktails]=useState([]);
    const [cocktailName,setCocktailname]=useState("");
    const [search,setSearch]=useState(false);


    const kereses=()=>{
      
        if(cocktailName!=""){
        
        fetch(`https:/www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
        .then(res=>res.json())
        .then(cocktails=>{setCocktails(cocktails.drinks);setSearch(true)})
        .then(err=>console.log(err));
        }
    }
    //www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita



    return <NameContext.Provider value={{
        cocktails,
        cocktailName,
        setCocktailname,
        kereses,
        search,
        setSearch
    }}>{children}</NameContext.Provider>

}

export default NameContext;