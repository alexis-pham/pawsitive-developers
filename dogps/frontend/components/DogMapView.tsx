"use client";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

type DogMarker = {
  zip: string;
  lat: number;
  lng: number;
  city: string;
  state: string;
  dogs: {
    id: number;
    animalID: string;
    animalName: string;
    animalPrimaryBreed: string;
    animalSex: string;
    animalGeneralAge: string;
    animalThumbnailUrl: string;
  }[];
};

export default function DogMapView({ markers }: { markers: DogMarker[] }) {
  return (
    <MapContainer
      center={[37.8, -96]}
      zoom={4}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker key={marker.zip} position={[marker.lat, marker.lng]}>
          <Popup maxWidth={280}>
            <div style={{ fontFamily: "sans-serif" }}>
              <p style={{ fontWeight: 700, marginBottom: 6, fontSize: 14 }}>
                {marker.city}, {marker.state} ({marker.zip})
              </p>
              <p style={{ color: "#555", fontSize: 12, marginBottom: 8 }}>
                {marker.dogs.length} dog{marker.dogs.length !== 1 ? "s" : ""} available
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, maxHeight: 200, overflowY: "auto" }}>
                {marker.dogs.map((dog) => (
                  <li
                    key={dog.animalID}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 6,
                      borderBottom: "1px solid #eee",
                      paddingBottom: 6,
                    }}
                  >
                    {dog.animalThumbnailUrl && (
                      <img
                        src={dog.animalThumbnailUrl}
                        alt={dog.animalName}
                        style={{ width: 36, height: 36, borderRadius: 4, objectFit: "cover", flexShrink: 0 }}
                      />
                    )}
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 13 }}>{dog.animalName}</div>
                      <div style={{ fontSize: 11, color: "#777" }}>
                        {dog.animalPrimaryBreed} &middot; {dog.animalGeneralAge} &middot; {dog.animalSex}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
