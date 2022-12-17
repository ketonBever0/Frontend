import React, { useEffect, useState } from 'react';


function Main() {


    const [distance, setDistance] = useState([]);
    const [refresh, setRefresh] = useState(false)






    useEffect(() => {

        //fetch('https://www.distance24.org/route.json?stops=Sopron|Szeged').catch(err=>console.log(err));
        const fetchData = async () => {
            await fetch('http://localhost:8000/distance')
                .then(res => res.json())
                .then(data => setDistance(data));
            //.catch(err => console.log(err));
        }
        fetchData().catch(err => console.log(err));
    }, []);




    // {distance.stops[0].city} {distance.stops[1].city}




    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {/* {distance.stops.map(s=><li key={s.city}>{s.city}</li>)} */}
                        {/* {distance.stops[0].city} és {distance.stops[1].city} */}


                        {distance.first_stop} és {distance.last_stop}
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