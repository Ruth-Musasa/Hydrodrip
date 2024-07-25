import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const center = {
    lat: -26.2041,
    lng: 28.0473,
  };

function Map() {
    return (
        <MapContainer className='w-full h-96 md:h-[650px] '
            center={center}
            zoom={15}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center}>
                <Popup>
                   1010 Avenue  <br /> Jouhanesbourg, RSA.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default React.memo(Map);
