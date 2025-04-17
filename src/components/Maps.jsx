import React from 'react'
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import RoutingMachine from './RoutingMachine';
import MyLocMarker from "./Markers/MyLocMarker"

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center,13);

  return null;
}


function Maps({start,end}) {
  
  const center = end ? [end.lat, end.lng] : start;

  return (
    <MapContainer center={center} zoom={13}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <ChangeView center={center}/>
     {end && <RoutingMachine start={start} end={end}/>}
     {!end && <MyLocMarker Geoloc={start} Message={start.name}/>}
  </MapContainer>
  )
}

export default Maps;