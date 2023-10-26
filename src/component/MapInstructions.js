import React from "react";

const MapInstructions = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12">
          <h4>Creating a Polygon:</h4>
          <ol>
            <li><strong>Draw a Collection Area:</strong> To create a new collection area, click the "Draw Polygon" tool.</li>
            <li><strong>Draw:</strong> Click on the map to start drawing your polygon. Click to add points and close the shape.</li>
            <li><strong>Requirements:</strong> Ensure your collection area meets the requirements in section 5.2 of the Chief Forester's Standards for Seed Use.</li>
            <li><strong>Save:</strong> Click "Submit" to save your polygon.</li>
          </ol>
        </div>
        <div className="col-12">
          <h4>Editing a Polygon:</h4>
          <ol>
            <li><strong>Edit a Collection Area:</strong> To edit an existing shape, use the "Edit Polygon" tool.</li>
            <li><strong>Edit:</strong> Click on an existing polygon to select it for editing.</li>
            <li><strong>Requirements:</strong> Ensure your changes still meet the requirements in section 5.2 of the Chief Forester's Standards for Seed Use.</li>
            <li><strong>Save:</strong> Click "Submit" to save your edits.</li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h4>Navigating the Map:</h4>
          <ol>
            <li><strong>Pan:</strong> Hold the "Shift" key and drag the map to move around.</li>
            <li><strong>Zoom:</strong> Click the "+" or "-" buttons, or hold "Shift" and drag a box on the map to zoom in and out.</li>
            <li><strong>Switch Basemap:</strong> Select a different base map from the options.</li>
            <li><strong>Identify:</strong> Click on a polygon to view additional information.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MapInstructions;
