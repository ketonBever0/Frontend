import React, { useState, useEffect } from 'react';

function ByIngredientNameResults(ingredients) {

    // console.log(ingredients);

    return (
        <div>{ingredients.ingredients.strIngredient}</div>




    )
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