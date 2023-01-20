import React, { useState, useEffect } from 'react';
import ByIngredientNameResults from './ByIngredientNameResults';


function ByIngredientName() {

    const [Coctails, setCoctails] = useState([]);
    const [CoctailsResults, setCoctailsResults] = useState([]);
    const [FormData, setFormData] = useState('');
    const [SearchValue, setSearchValue] = useState('');
    const [Refresh, setRefresh] = useState(false);
    const [SearchValue, setSearchValue] = useState('');
    const [SearchResults, setSearchResults] = useState({});


    const update = () => {
        setRefresh((prev) => !prev);
    }



    const Search = (e) => {


        e.preventDefault();
        // console.log(Coctails);
        setSearchValue(FormData);



    }


    useEffect(() => {


        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${FormData}`)
            .then(res => res.json())
            .then(data => setCoctails(data.ingredients))
            .catch(err => console.log(err));


    }, [SearchValue])

    // console.log(Coctails);


    return (
        <div>
            <div className="text-2xl mb-8">Egy összetevő szerint</div>
            <form onSubmit={Search}>
                <input id='searchValue' type="text" onChange={(e) => { setFormData(e.target.value) }} value={FormData} placeholder="Összetevő neve" className="input input-bordered input-primary w-full max-w-xs mb-20" />
                <button className="btn btn-secondary ml-5" type="submit">Keresés</button>
            </form>


            {
                Coctails !== [] ?
                    Coctails.map((ingredients, index) => (<ByIngredientNameResults key={index} ingredients={ingredients} />))
                    :
                    <div></div>


            }

        </div>
    )
}

export default ByIngredientName