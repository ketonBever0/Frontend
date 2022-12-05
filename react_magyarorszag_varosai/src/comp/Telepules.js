import React, { useState, useEffect, useContext } from 'react';
import TelepulesContext from '../context/TelepulesContext';


function Telepules() {


    const { Telepulesnevek } = useContext(TelepulesContext);
    const [SelectedTelepules, setSelectedTelepules] = useState("");

    const [Telepules, setTelepules] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:8000/api/telepulesek/${SelectedTelepules}`)
        .then(res=>res.json())
        .then(adat=>setTelepules(adat))
        .catch(err=>console.log(err));
    },[SelectedTelepules])


    return (
        <div>

            <section className="bg-gray-900 text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className='text-3xl font-bold sm:text-4xl'>Település adatok</h2>

                        <select className='select select-secondary w-full max-w-xs text-white' onChange={(e) => setSelectedTelepules(e.target.value)}>
                        <option unselectable>Vállasszon települést...</option>
                            {
                                Telepulesnevek.map((varos, index) => (<option key={index} value={varos.név}>{varos.név}</option>))
                            }
                        </select>

                        <div className='my-10'>
                            <p>Jogállás: {Telepules.jogállás}</p>
                            <p>{Telepules.megyenév} megye</p>
                            <p>Területe: {Telepules.terület}</p>
                        </div>

                    </div>
                </div>
            </section>



        </div>
    )
}

export default Telepules