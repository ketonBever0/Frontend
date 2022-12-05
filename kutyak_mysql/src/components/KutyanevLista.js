import { useState, useEffect } from 'react';

import KutyanevRender from './KutyanevRender';

function KutyanevLista() {
    const [kutyanevek, setKutyanevek] = useState([]);
    const [refresh, setRefresh] = useState(false);


    const update = () => {
        setRefresh((prev) => !prev);
    }

    useEffect(() => {
        fetch('http://localhost:8000/api/rendelo/kutyanevek')
            .then(res => res.json())
            .then(adat => setKutyanevek(adat))
            .catch(err => console.log(err));
    }, [refresh]);
    return (
        <div className='flex justify-center items-center'>
            <div className='flex-column'>
                {
                    kutyanevek.map((kutyanev, index) => (<KutyanevRender key={index} kutyanev={kutyanev} update={update} />))
                }
            </div>
        </div>
    )
}

export default KutyanevLista