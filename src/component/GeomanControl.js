import { createControlComponent } from "@react-leaflet/core";
import * as L from "leaflet";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";

class GeomanControl extends L.Control {
  onAdd(map) {
    map.pm.addControls({
      position: 'topleft',
      drawCircle: true,
      drawPolygon: true,
      cutPolygon:true,
      customControls:true
      // Add more options as needed, all are available on : https://geoman.io/docs/toolbar
    });
    map.on('pm:create', (event) => {
        event.layer.on('click', () => {
          // Perform your action here
          console.log(event.layer)
          console.log('Shape clicked!');
          console.log("Geojson", event.layer.toGeoJSON());
          console.log("Coords", event.layer.getLatLngs());
        });
      });
    return L.DomUtil.create('div');
  }
}

const createGeomanControl = (props) => new GeomanControl(props);
export const Geoman = createControlComponent(createGeomanControl);
