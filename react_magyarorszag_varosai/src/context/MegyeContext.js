import React, { useContext, useState, useEffect } from 'react';
import { createContext } from 'react';


const MegyeContext = createContext();

export const MegyeProvider = ({ children }) => {

    const [Megyek, setMegyek] = useState([]);
    const [KivalasztottMegye, setKivalasztottMegye] = useState("");
    const [MegyeTelepulesek, setMegyeTelepulesek] = useState([]);


    useEffect(() => {
        fetch('http://localhost:8000/api/megyek/megyelista')
            .then(res => res.json())
            .then(adat => setMegyek(adat))
            .catch(err => console.log(err));

    }, [])

    useEffect(() => {
        if (KivalasztottMegye !== "") {
            fetch(`http://localhost:8000/api/megyek/megyektelepulesei/${KivalasztottMegye}`)
                .then(res => res.json())
                .then(adat => setMegyeTelepulesek(adat))
                .catch(err => console.log(err));
        }
    }, [KivalasztottMegye])


    return <MegyeContext.Provider value={{
        Megyek,
        KivalasztottMegye,
        setKivalasztottMegye,
        MegyeTelepulesek
    }}>{children}</MegyeContext.Provider>
}

export default MegyeContext;