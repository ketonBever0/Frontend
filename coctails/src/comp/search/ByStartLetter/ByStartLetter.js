import React, { useState, useEffect } from 'react';


function ByStartLetter() {


  const [SelectedLetter, setSelectedLetter] = useState('A')
  const [Coctails, setCoctails] = useState({});



  // fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${SelectedLetter}`)
  //   .then(res => res.json())
  //   .then(data => setCoctails(data))
  //   .catch(err => console.log(err));



  const engABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";




  return (
    <div>
      <div className="text-2xl mb-8">Kezdőbetű szerint</div>

      <select name="letters">



      </select>





    </div>
  )
}

export default ByStartLetter