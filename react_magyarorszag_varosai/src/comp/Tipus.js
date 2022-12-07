import React from 'react';
import { useContext } from 'react';
import TipusContext from '../context/TipusContex';
import Vissza from './Vissza';
import { Link } from 'react-router-dom';

function Tipus() {


    const { Jogallasok } = useContext(TipusContext);


    return (
        <div>
            <Vissza />

            <section className="bg-gray-900 text-white">
                <div className="mx-auto max-w-screen-xl max-h-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg text-center">

                        <br />
                        <h2 className='text-3xl font-bold sm:text-4xl my-10 block'>Egyes jogállások települései</h2>
                        <ul>
                            {
                                Jogallasok.map((elem, index) => (<li className='my-5' key={index}><Link to={'/jogallastelepules'} state={elem}>{elem.jogallas}</Link></li>))
                            }
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Tipus