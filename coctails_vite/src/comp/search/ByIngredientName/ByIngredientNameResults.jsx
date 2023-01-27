import React, { useState, useEffect } from 'react';

function ByIngredientNameResults({ coctails }) {

    const [CoctailData, setCoctailData] = useState([]);

    try {


        const Category = () => {
            try {

                fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURI(coctails.strDrink)}`)
                    .then(res => res.json())
                    .then(data => setCoctailData(data.drinks))
                    .catch(err => console.log(err));

                console.log(CoctailData);

                return `${CoctailData.strCategory}`

            }
            catch {
                return <></>
            }
        }



        return (


            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={coctails.strDrinkThumb} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {coctails.strDrink}
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <p></p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline"></div>
                        {/* <div className="badge badge-outline">{Category()}</div> */}
                    </div>
                </div>
            </div>
        )
    }
    catch {
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