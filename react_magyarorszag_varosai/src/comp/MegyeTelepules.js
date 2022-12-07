import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom'
import MegyeContext from '../context/MegyeContext';
import { Link } from 'react-router-dom'
import Vissza from './Vissza';

function MegyeTelepules() {

    const { setKivalasztottMegye, MegyeTelepulesek } = useContext(MegyeContext);

    const location = useLocation();
    let megyenev = "";
    const { state } = location;
    if (state) {
        megyenev = state.megyenev;
        setKivalasztottMegye(megyenev);
    }




    return (


        <div className='text-white'>

            <Vissza />

            <section className="bg-gray-900 text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl my-10">{megyenev} megye</h2>

                        {
                            MegyeTelepulesek.map((elem, index) => (<li className='text-left'><Link className='link link-primary' to={'/telepulesadatok'} state={elem}>{elem.nev} ({elem.jogállás})</Link></li>))
                        }


                    </div>
                </div>
            </section>


        </div>

    )
}

export default MegyeTelepules