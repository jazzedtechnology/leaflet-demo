import React, { useState } from "react";
import Map from "./component/Map";
import MapInstructions from "./component/MapInstructions";
import "./style.css";

function App() {
  const basemaps = [
    {
      id: 1,
      name: "OpenStreetMap",
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    },
    {
      id: 2,
      name: "Google Map",
      attribution: '&copy; Google Maps contributors',
      url: "https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}",
    },
    {
      id: 3,
      name: "Google Maps Satelite",
      attribution: '&copy; Google Maps',
      url: "https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}",
    },
  ];

  const [selectedBasemap, setSelectedBasemap] = useState(basemaps[0]);

  const handleBasemapChange = (event) => {
    const selectedId = parseInt(event.target.value);
    const selected = basemaps.find((basemap) => basemap.id === selectedId);
    setSelectedBasemap(selected);
  };

  return (
    <div className="">
      <div className="row align-items-center">
        <div className="col-2 text-center">
          <img
            src="https://maps.forsite.ca/BCID_H_rgb_pos.png"
            alt="BC Logo"
            width="165"
            height="64"
          />
        </div>
        <div className="col-10 text-center">
          <div className="display-6">RESULTS Mapping Tool</div>
          <p>This tool allows users to draw the polygons on Map in an interactive way</p>
        </div>
      </div>
      <div className="row bg-gray">
        <div className="col-4">
          <div className="h4 mt-4">Map Instructions</div>
          <MapInstructions />
        </div>
        <div className="col-8 position-relative">
          <Map selectedBasemap={selectedBasemap} />
          <div
            className="button-container"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "white",
              padding: "5px",
              borderRadius: "5px",
              zIndex: 1000,
            }}
          >
            <label htmlFor="basemapSelect"><i class="bi bi-globe-europe-africa"></i>:</label>
            <select
              id="basemapSelect"
              onChange={handleBasemapChange}
              value={selectedBasemap.id}
            >
              {basemaps.map((basemap) => (
                <option key={basemap.id} value={basemap.id}>
                  {basemap.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
