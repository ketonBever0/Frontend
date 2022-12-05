import React, { useState, useEffect, createContext } from 'react';



const TelepulesContext = createContext();

export const TelepulesProvider = ({ children }) => {

    const [Telepulesnevek, setTelepulesnevek] = useState([])


    useEffect(() => {
        fetch('http://localhost:8000/api/telepulesek')
            .then(res => res.json())
            .then(adat => setTelepulesnevek(adat))
            .catch(err => console.log(err));
    }, [])


    return <TelepulesContext.Provider value={{ Telepulesnevek }}>{children}</TelepulesContext.Provider>
}
export default TelepulesContext;