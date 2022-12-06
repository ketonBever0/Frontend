import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css"
import React, { useEffect } from 'react';


function Terkep(props) {

    const { long, lat, szeles, magas, zoom } = props;

    mapboxgl.accessToken = "pk.eyJ1Ijoic3phamJlcnBpcmF0eSIsImEiOiJja3drd25vbTAxd2YyMnBuc3IxenhqMHNvIn0.c55V1Z3GlPscRZjxsWZYrQ";

    useEffect(() => {
        if (long && lat) {


            let map = new mapboxgl.Map(

                {
                    container: "mapContainer",
                    style: "mapbox://styles/mapbox/streets-v11",
                    center: [long, lat],
                    //center:[19.0399, 47.339],
                    zoom: zoom

                }
            )
            new mapboxgl.Marker().setLngLat([long, lat]).addTo(map);
        }
    }, [long, lat, zoom]);



    return (
        <div>
            <div id='mapContainer' style={{ width: szeles, height: magas }} />
        </div>
    )
}

export default Terkep