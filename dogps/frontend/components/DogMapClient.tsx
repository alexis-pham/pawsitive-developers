"use client";
import dynamic from "next/dynamic";

const DogMapView = dynamic(() => import("./DogMapView"), {
  ssr: false,
  loading: () => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", fontSize: 18, color: "#555" }}>
      Loading map...
    </div>
  ),
});

type DogMarker = {
  zip: string;
  lat: number;
  lng: number;
  city: string;
  state: string;
  dogs: any[];
};

export default function DogMapClient({ markers }: { markers: DogMarker[] }) {
  return <DogMapView markers={markers} />;
}
