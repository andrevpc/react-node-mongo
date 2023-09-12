import React, { useContext } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import './style.css'
import L from 'leaflet';
import { DarkModeContext } from "../../context/darkMode";

export default function Map({ position }) {
  const { isDarkMode } = useContext(DarkModeContext)

  const icon = L.icon({
    iconUrl: "https://static-00.iconduck.com/assets.00/map-marker-icon-342x512-gd1hf1rz.png",
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
  });
  const zoomLevel = 4.5;

  return (
    <MapContainer zoom={zoomLevel} center={position} scrollWheelZoom={true} className={isDarkMode ? 'darkmap' : ''} key={isDarkMode}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <Marker position={position} icon={icon}>
        <Popup>
          Capital
        </Popup>
      </Marker>
    </MapContainer>
  );
};