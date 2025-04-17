import { Icon } from 'leaflet'
import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import custompng from "./../../Assets/placeholder.png"


function MyLocMarker({Geoloc,Message}) {
    const customIcon = new Icon({
        iconUrl: custompng,
        iconSize:[40,40],
    })

    return (
    <Marker position={Geoloc} icon={customIcon}>
      <Popup>
        {Message}
      </Popup>
    </Marker>
  )
}

export default MyLocMarker