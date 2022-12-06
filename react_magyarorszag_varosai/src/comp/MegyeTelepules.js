import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import MegyeContext from '../context/MegyeContext';

function MegyeTelepules() {

    const { setKivalasztottMegye, MegyeTelepules } = useContext(MegyeContext);

    const location = useLocation();
    let megyenev = "";
    const { state } = location;
    if (state) {
        megyenev = state.megyenev;
        setKivalasztottMegye(megyenev);
    }




    return (
        <div className='text-white'>

            <h1>{megyenev}</h1>
            <h3>{MegyeTelepules.length}</h3>

        </div>
    )
}

export default MegyeTelepules