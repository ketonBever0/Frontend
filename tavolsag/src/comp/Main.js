import React, { useEffect, useState } from 'react';


function Main() {


    const [distance, setDistance] = useState([]);



    useEffect(() => {
        //fetch('https://www.distance24.org/route.json?stops=Sopron|Szeged').catch(err=>console.log(err));
        fetch('http://192.168.10:8000/distance')
            .then(res => res.json())
            .then(data => setDistance(data))
            .catch(err => console.log(err));
    }, []);









    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {distance.stops[0].city} és {distance.stops[1].city} távolsága
                    </h2>
                    <p>{distance.distance}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{ }</div>
                        <div className="badge badge-outline"></div>
                    </div>
                </div>
            </div>



        </div>







    )
}

export default Main