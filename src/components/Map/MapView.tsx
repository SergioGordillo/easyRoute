import mapboxgl from 'mapbox-gl';
import React, { useEffect, useState } from 'react'
import { markerColor } from '../../interfaces/component-interfaces';

export const MapView = () => {

    const [map, setMap] = useState(undefined);

    const markers: markerColor[] = [];

    const addMarker = () => {

        const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
        
        const newMarker= new mapboxgl.Marker({
            draggable: true,
            color: color
          })

        // .setLngLat(map)
        // .addTo(this.map);



    }

    
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [ 2.15899, 41.38879], // starting position [lng, lat]
            zoom:11 // starting zoom
            });
        // return () => {
        //     cleanup
        // }
    }, [setMap]);

    return (
        <div className="map__container" id="map" onClick={addMarker}>    
        </div>
    )
}
