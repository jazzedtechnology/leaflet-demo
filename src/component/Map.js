import React, { useRef } from "react";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { FeatureLayer } from "react-esri-leaflet";
import EditFeature from "./EditFeature";
import { Geoman } from "./GeomanControl";

export default function Map({ selectedBasemap }) {
  const position = [49.11941257871176, -122.83461402566606];
  const lastClickedLayerRef = useRef(null);

  const onEachFeature = (feature, layer) => {
    // Customize the popup content with the provided fields
    const popupContent = `
      <strong>Opening ID:</strong> ${feature.properties.OPENING_ID}<br>
      <strong>Opening Location Name:</strong> ${feature.properties.OPENING_LOCATION_NAME}<br>
      <strong>Opening Category Code:</strong> ${feature.properties.OPENING_CATEGORY_CODE}<br>
      <strong>Opening Status Code:</strong> ${feature.properties.OPENING_STATUS_CODE}<br>
      <strong>Max Allow Permit Access (%):</strong> ${feature.properties.MAX_ALLOW_PERMNT_ACCESS_PCT}<br>
      <strong>Approve Date:</strong> ${new Date(feature.properties.APPROVE_DATE).toDateString()}<br>
      <strong>Client Name:</strong> ${feature.properties.CLIENT_NAME}<br>
      <strong>Feature Area (sqm):</strong> ${feature.properties.FEATURE_AREA_SQM}<br>
      <strong>Mapsheet Grid:</strong> ${feature.properties.MAPSHEET_GRID}<br>
      <strong>Mapsheet Letter:</strong> ${feature.properties.MAPSHEET_LETTER}<br>
      <strong>Mapsheet Square:</strong> ${feature.properties.MAPSHEET_SQUARE}<br>
      <strong>Mapsheet:</strong> ${feature.properties.MAPSHEET}<br>
      <strong>Opening Number:</strong> ${feature.properties.OPENING_NUMBER}<br>
      <strong>Map Label:</strong> ${feature.properties.MAP_LABEL}<br>
      <strong>Opening Category Code:</strong> ${feature.properties.OPENING_CATEGORY_CODE}<br>
      <strong>Opening Status Code:</strong> ${feature.properties.OPENING_STATUS_CODE}<br>
      <strong>Opening Location Name:</strong> ${feature.properties.OPENING_LOCATION_NAME}<br>
      <strong>District Admin Zone:</strong> ${feature.properties.DISTRICT_ADMIN_ZONE}<br>
      <strong>Licensee Opening ID:</strong> ${feature.properties.LICENSEE_OPENING_ID}<br>
      <strong>Max Allow Permit Access (%):</strong> ${feature.properties.MAX_ALLOW_PERMNT_ACCESS_PCT}<br>
      <strong>Approve Date:</strong> ${new Date(feature.properties.APPROVE_DATE).toDateString()}<br>
      <strong>TSB Number Code:</strong> ${feature.properties.TSB_NUMBER_CODE}<br>
      <strong>Amendment Indicator:</strong> ${feature.properties.AMENDMENT_IND}<br>
      <strong>Previous Tree Species 1 Code:</strong> ${feature.properties.PREV_TREE_SPECIES1_CODE}<br>
      <strong>Previous Tree Species 2 Code:</strong> ${feature.properties.PREV_TREE_SPECIES2_CODE}<br>
      <strong>Previous Stocking Status Code:</strong> ${feature.properties.PREV_STOCKING_STATUS_CODE}<br>
      <strong>Previous Age Class Code:</strong> ${feature.properties.PREV_AGE_CLASS_CODE}<br>
      <strong>Previous Height Class Code:</strong> ${feature.properties.PREV_HEIGHT_CLASS_CODE}<br>
      <strong>Previous Site Index:</strong> ${feature.properties.PREV_SITE_INDEX}<br>
      <strong>Previous Site Index Source Code:</strong> ${feature.properties.PREV_SITE_INDEX_SOURCE_CODE}<br>
      <strong>Results Submission ID:</strong> ${feature.properties.RESULTS_SUBMISSION_ID}<br>
      <strong>Region Code:</strong> ${feature.properties.REGION_CODE}<br>
      <strong>Region Name:</strong> ${feature.properties.REGION_NAME}<br>
      <strong>District Code:</strong> ${feature.properties.DISTRICT_CODE}<br>
      <strong>District Name:</strong> ${feature.properties.DISTRICT_NAME}<br>
      <strong>BCTS Code:</strong> ${feature.properties.BCTS_CODE}<br>
      <strong>BCTS Name:</strong> ${feature.properties.BCTS_NAME}
    `;

    const scrollablePopupContent = `<div style="max-height: 200px; overflow-y: auto;">${popupContent}</div>`;

    layer.bindPopup(scrollablePopupContent);
    

    // Add click event to highlight the polygon in red
    layer.on('click', () => {
      if (lastClickedLayerRef.current) {
        lastClickedLayerRef.current.setStyle({ color: 'blue' });
      }

      layer.setStyle({ color: 'red' });
      layer.openPopup();
      lastClickedLayerRef.current = layer;
    });

  };

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution={selectedBasemap.attribution}
        url={selectedBasemap.url}
      />
      <FeatureGroup>
        {/* Using the GeoMan Features that we imported from GeoMan */}
        <Geoman />
      </FeatureGroup>
      <EditFeature />
      {/* Add the FeatureLayer with the onEachFeature prop */}
      <FeatureLayer
        url="https://maps.gov.bc.ca/arcgis/rest/services/whse/bcgw_pub_whse_forest_vegetation/MapServer/26"
        onEachFeature={onEachFeature}
        minZoom={10}  // Set the minimum zoom level for the layer to be visible
        maxZoom={15}  // Set the maximum zoom level for the layer to be visible
      />
    </MapContainer>
  );
}
