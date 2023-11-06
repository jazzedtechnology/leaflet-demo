import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import EditFeature from "./EditFeature"; 
import { FeatureGroup } from "react-leaflet";
import { Geoman } from "./GeomanControl";

export default function Map({ selectedBasemap }) {
  const position = [49.11941257871176, -122.83461402566606];

  return (

    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution={selectedBasemap.attribution}
      url={selectedBasemap.url}
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable. This is a fixed Marker on Map load
      </Popup>
    </Marker>
    <FeatureGroup>
      {/* Using the GeoMan Features that we importeed form GeoMan */}
      <Geoman />
    </FeatureGroup>
    <EditFeature/>
    </MapContainer>

  );
}
