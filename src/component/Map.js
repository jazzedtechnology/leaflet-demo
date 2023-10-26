import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      // Create the map with the ref's DOM node
      const map = L.map(mapRef.current, {
        center: [51.505, -0.09], // Coordinates for London
        zoom: 13,
        layers: [
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }),
        ],
      });

      // Add a marker to the map
      L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
    }
  }, []);

  return <div id="map" ref={mapRef} style={{ height: "100vh", width: "100%" }} />;
};

export default Map;
