import React, { useContext } from 'react';
// import { Link } from 'react-router-dom'
import MegyeContext from '../context/MegyeContext';
import NavButton from './NavButton';
import Vissza from './Vissza';


function Megye() {


    const { Megyek } = useContext(MegyeContext);






    return (
        <div>

            <Vissza />

            <section className="bg-gray-900 text-white">
                <div className="mx-auto max-w-screen-xl max-h-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-lg text-center">

                        <br />
                        <h2 className='text-3xl font-bold sm:text-4xl my-10 block'>Egyes megyék települései</h2>
                        {
                            Megyek.map((elem, index) => (<NavButton key={index} megyenev={elem.megyenev} />))
                        }

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Megye;