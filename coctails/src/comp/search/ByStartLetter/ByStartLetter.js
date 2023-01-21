import React, { useState, useEffect } from 'react';


function ByStartLetter() {


  const [SelectedLetter, setSelectedLetter] = useState('A')
  const [Coctails, setCoctails] = useState({});



  // fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${SelectedLetter}`)
  //   .then(res => res.json())
  //   .then(data => setCoctails(data))
  //   .catch(err => console.log(err));



  const engABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



  return (
    <div>
      <div className="text-2xl mb-8">Kezdőbetű szerint</div>

      <select name="letters">
        {engABC.map((letter, index) => (<option key={index} value={letter}>{letter}</option>))}
      </select>





    </div>
  )
}

export default ByStartLetter