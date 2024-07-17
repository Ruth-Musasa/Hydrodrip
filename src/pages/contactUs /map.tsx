import React, { useEffect, useRef } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: -3.745, // Remplacez par la latitude de l'adresse souhaitée
    lng: -38.523 // Remplacez par la longitude de l'adresse souhaitée
};

const MapSection: React.FC = () => {
    const mapRef = useRef<google.maps.Map | null>(null);
    const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(null);

    useEffect(() => {
        if (mapRef.current) {
            const marker = new google.maps.marker.AdvancedMarkerElement({
                position: center,
                map: mapRef.current,
                title: 'Your Location',
            });
            markerRef.current = marker;
        }
    }, [mapRef.current]);

    return (
        <div className="w-full h-auto py-16 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
            <div className="w-11/12 md:w-10/12 m-auto">
                <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={15}
                        onLoad={map => (mapRef.current = map)}
                    >
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default MapSection;
