import mapboxgl from 'mapbox-gl';
import React from 'react'
import { markerColor } from '../../interfaces/component-interfaces';

export const Navbar = () => {

    const markers: markerColor[] = [];

    const addMarker = () => {

        const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
        
        const newMarker= new mapboxgl.Marker({
            draggable: true,
            color: color
          })

        // .setLngLat(this.mapCenter)
        // .addTo(this.map);



    }



    return (
        <div className="navbar__big-container mt-4 mb-4 ml-4">
            <div className="navbar__container animate__animated animate__fadeIn animate__slower">
                <i className="fas fa-route mr-4"></i>
                <h1 className="navbar__title"> Easy Route </h1>
            </div>
            <div className="navbar_container_addmarker animate__animated animate__fadeIn animate__slower mr-4 pointer"
            onClick={addMarker}
            >
                <i className="fas fa-map-marker-alt mr-4"></i>
                <h3>Add a marker</h3>
            </div>
        </div>
    )
}
