import React, { useState, useEffect, useContext } from 'react';
import TelepulesContext from '../context/TelepulesContext';
import Terkep from './Terkep';
import { Link } from 'react-router-dom'

function Telepules() {


    const { Telepulesnevek } = useContext(TelepulesContext);
    const [SelectedTelepules, setSelectedTelepules] = useState("");

    const [Telepules, setTelepules] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8000/api/telepulesek/${SelectedTelepules}`)
            .then(res => res.json())
            .then(adat => setTelepules(adat))
            .catch(err => console.log(err));
    }, [SelectedTelepules])






    var jogallasText = "";
    var megyeText = "";
    var teruletText = "";


    if (SelectedTelepules.név) {
        jogallasText = "Jogállása:";
        megyeText = "Megye:";
        teruletText = "Területe:";
    }





    return (
        <div>

            <section className="bg-gray-900 text-white">
                <div className="mx-auto max-w-screen-xl max-h-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg text-center">

                    <Link to={'/'} className="btn my-10">Vissza</Link>

                        <h2 className='text-3xl font-bold sm:text-4xl'>Település adatok</h2>

                        <select className='select select-secondary w-full max-w-xs text-white my-10' onChange={(e) => setSelectedTelepules(e.target.value)}>
                            <option disabled selected>Vállasszon települést...</option>
                            {
                                Telepulesnevek.map((varos, index) => (<option key={index} value={varos.név}>{varos.név}</option>))
                            }
                        </select>


                        <Terkep long={Telepules.long} lat={Telepules.lat} szeles={"700ox"} magassag={"600px"} zoom={12} />


                        <div className='my-10'>
                            <p><b>{jogallasText}</b> {Telepules.jogállás}</p>
                            <p><b>{megyeText}</b> {Telepules.megyenév}</p>
                            <p><b>{teruletText}</b> {Telepules.terület}</p>
                        </div>



                    </div>
                </div>
            </section>



        </div>
    )
}

export default Telepules