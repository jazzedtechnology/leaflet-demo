import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import EditFeature from "./EditFeature"; // Import the EditFeature component

export default function Map() {
  const position = [49.11941257871176, -122.83461402566606];

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable. This is a fixed Marker on Map load
        </Popup>
      </Marker>

      {/* Add the EditFeature component to enable drawing and editing */}
      <EditFeature />
    </MapContainer>
  );
}
