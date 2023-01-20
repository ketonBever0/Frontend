import React, { useState, useEffect } from 'react';

function ByIngredientNameResults({ coctails }) {

    // console.log(ingredients);

    try {
        return (


            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={coctails.strDrinkThumb} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {coctails.strDrink}
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <p></p>
                    {/* <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div> */}
                </div>
            </div>
        )
    }
    catch (e) {
        return (
            <div>Valami hiba történt!</div>
        )
    }
}


export default ByIngredientNameResults
/* 
const [Coctails, setCoctails] = useState([]);


    useEffect(() => {
        if (SearchValue.SearchValue !== '') {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${SearchValue.SearchValue}`;
            console.log(url);
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setCoctails(data);
                    console.log(data);
                    console.log(SearchValue.SearchValue);
                })
                .catch(err => console.log(err));
        }
    }, [SearchValue, update]);




    if (FormData !== '') {
        return (
            <div>{SearchValue.SearchValue}</div>
        ) */