import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss'
import App from './App';
import mapboxgl from 'mapbox-gl';
 
mapboxgl.accessToken = 'pk.eyJ1Ijoic2VyZ2lvZ29yZGlsbG9kZXYiLCJhIjoiY2t1bjVuZndxMHFmeDJvcGZhM251bnh4ZCJ9.Bm39bFmtdksYFmd78hILCw'; 



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
