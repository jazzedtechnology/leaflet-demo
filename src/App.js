import './style.css';
import Map from './component/Map';
import 'leaflet/dist/leaflet.css';
import MapInstructions from './component/MapInstructions';


function App() {
  return (
    <div className="">
      <div className="row align-items-center ">
        <div className="col-2 text-center">
          <img src="https://maps.forsite.ca/BCID_H_rgb_pos.png" alt="BC Logo" width="165" height="64" />
        </div>
        <div className="col-10 text-center ">
          <div className="display-6 ">RESULTS Mapping Tool</div>
          <p>This tool allows users to draw the polygons on Map in a interactive way</p>
        </div>
      </div>
      <div className="row bg-gray">
        <div className="col-4">
          <div className="h4 mt-4">Map Instructions</div>
          <MapInstructions/>
        </div>
        <div className="col-8">
          <Map/>
        </div>
      </div>
    </div>
  );
}

export default App;
