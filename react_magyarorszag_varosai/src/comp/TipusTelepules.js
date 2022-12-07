import React, { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom'
import TipusContext from '../context/TipusContex';
import Vissza from './Vissza';

function TipusTelepules() {


    const { JogallasTelepulesek, setKivalasztottJogallas } = useContext(TipusContext);

    const location = useLocation();
    let jogallas = "";
    const { state } = location;
    if (state) {
        jogallas = state.jogallas;
        setKivalasztottJogallas(jogallas);
    }


    return (
        <div>
            <Vissza />
            <section className="bg-gray-900 text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl my-10">{jogallas} jogállású települések</h2>

                        <ul>
                            {
                                JogallasTelepulesek.map((elem, index) => (<li><Link to={'/telepulesadatok'} state={{telepules:elem.név}} className='link link-primary'>{elem.nev}</Link></li>))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TipusTelepules