import mapboxgl from 'mapbox-gl';
import React, { useEffect, useState } from 'react'

export const MapView = () => {

    const [map, setMap] = useState(undefined);
    
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9 // starting zoom
            });
        // return () => {
        //     cleanup
        // }
    }, [setMap]);

    return (
        // <div style={{
        //             backgroundColor: "red",
        //             height: "100vh",
        //             width: "100vw",
        //             position: "fixed",
        //             top: 0,
        //             left: 0
        //              }}>
        <div className="map__container" id="map">    
        </div>
    )
}
