// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// const center = {
//   lat: -11.6869,
//   lng: 27.4857,
// };

// function Map() {
//   return (
//     <MapContainer center={center} zoom={15} style={{ width: '100%', height: '750px' }}>
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={center}>
//         <Popup>
//           Avenue Fatuma, Lubumbashi <br /> (9F52+WRQ)
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// }

// export default React.memo(Map);
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const center = {
  lat: -11.6869,
  lng: 27.4857,
};

function Map() {
  return (
    <MapContainer className='w-full h-96 md:h-[700px] '>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          Avenue Fatuma, Lubumbashi <br /> (9F52+WRQ)
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default React.memo(Map);
