import React, { useState, useEffect } from 'react';
import ByIngredientNameResults from './ByIngredientNameResults';


function ByIngredientName() {

    const [Coctails, setCoctails] = useState({});
    const [FormData, setFormData] = useState('');
    const [SearchValue, setSearchValue] = useState('');


    // const update = () => {
    //     setRefresh((prev) => !prev);
    // }



    const Search = (e) => {

        e.preventDefault();
        // console.log(Coctails);
        setSearchValue(FormData);

    }


    useEffect(() => {

        if (SearchValue !== '') {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${SearchValue}`)
                .then(res => res.json())
                .then(data => setCoctails(data.drinks))
                .catch(err => console.log(err));
        }
    }, [SearchValue])

    const Listing = () => {
        try {
            return (
                <div className='justify-center items-center grid lg:grid-cols-4 md:grid-cols-1 gap-8'>
                    {Coctails.map((coctails, index) => (<ByIngredientNameResults key={index} coctails={coctails} />))}
                </div>
            )
        }
        catch {
            return (<div>Nincs ilyen hozzávaló.</div>)
        }
    }

    // console.log(Coctails);

    return (
        <div>
            <div className="text-2xl mb-8">Összetevő szerint</div>
            <form onSubmit={Search}>
                <input id='searchValue' type="text" onChange={(e) => { setFormData(e.target.value) }} value={FormData} placeholder="Összetevő neve" className="input input-bordered input-primary w-full max-w-xs mb-20" />
                <button className="btn btn-secondary ml-5" type="submit">Keresés</button>
            </form>


            {
                Listing()
                //MŰKÖDIKK GECCCIIII
            }

        </div>
    )
}

export default ByIngredientName