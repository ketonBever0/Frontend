import React, { useState, useEffect, createContext } from 'react';


const TipusContext = createContext();

export const TipusProvider = ({ children }) => {

    const [Jogallasok, setJogallasok] = useState([]);
    const [KivalasztottJogallas, setKivalasztottJogallas] = useState("");
    const [JogallasTelepulesek, setJogallasTelepulesek] = useState([]);


    useEffect(() => {
        fetch('http://localhost:8000/api/telepulestipus')
            .then(res => res.json())
            .then(adat => setJogallasok(adat))
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        if (KivalasztottJogallas !== "") {
            fetch(`http://localhost:8000/api/telepulestipus/jogallas/${KivalasztottJogallas}`)
                .then(res => res.json())
                .then(adat => setJogallasTelepulesek(adat))
                .catch(err => console.log(err));
        }
    }, [KivalasztottJogallas])





    return <TipusContext.Provider value={{
        Jogallasok,
        JogallasTelepulesek,
        KivalasztottJogallas,
        setKivalasztottJogallas
    }}>{children}</TipusContext.Provider>
}

export default TipusContext;