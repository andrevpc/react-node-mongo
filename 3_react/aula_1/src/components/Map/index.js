import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import './style.css'
import L from 'leaflet';

export default function Map() {
  const position = [8.1386, 5.1026];
  const zoomLevel = 1;
  const icon = L.icon({ iconUrl: "https://static-00.iconduck.com/assets.00/map-marker-icon-342x512-gd1hf1rz.png",
  iconSize:     [38, 95],
  shadowSize:   [50, 64],
  iconAnchor:   [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor:  [-3, -76]
});

  return (
    <MapContainer zoom={zoomLevel} center={position} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position} icon={icon}>
        <Popup>
          Omu-Aran the Head Post of Igbomina land,
          is a town in the Nigerian state of Kwara.
          It originated from Ife and currently the local
          government headquarters of Irepodun local government.
        </Popup>
      </Marker>
    </MapContainer>
  );
};