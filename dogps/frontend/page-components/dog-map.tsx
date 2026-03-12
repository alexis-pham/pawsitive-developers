// eslint-disable-next-line @typescript-eslint/no-require-imports
const zipcodes = require("zipcodes") as {
  lookup: (zip: string) => { latitude: number; longitude: number; city: string; state: string } | undefined;
};
import DogMapClient from "@/components/DogMapClient";

export default async function DogMapPage() {
  const res = await fetch("http://localhost:3001/dogs");
  const dogs: any[] = await res.json();

  // Group dogs by ZIP code
  const byZip = new Map<string, any[]>();
  for (const dog of dogs) {
    const zip = dog.animalLocation?.trim();
    if (!zip) continue;
    if (!byZip.has(zip)) byZip.set(zip, []);
    byZip.get(zip)!.push(dog);
  }

  // Resolve each ZIP code to lat/lng using the offline zipcodes database
  const markers = [];
  for (const [zip, zipDogs] of byZip.entries()) {
    const info = zipcodes.lookup(zip);
    if (info?.latitude && info?.longitude) {
      markers.push({
        zip,
        lat: info.latitude,
        lng: info.longitude,
        city: info.city,
        state: info.state,
        dogs: zipDogs.map((d) => ({
          id: d.id,
          animalID: d.animalID,
          animalName: d.animalName,
          animalPrimaryBreed: d.animalPrimaryBreed,
          animalSex: d.animalSex,
          animalGeneralAge: d.animalGeneralAge,
          animalThumbnailUrl: d.animalThumbnailUrl,
          animalLocation: d.animalLocation,
        })),
      });
    }
  }

  return (
    <div style={{ height: "calc(100vh - 100px)", width: "100%" }}>
      <DogMapClient markers={markers} />
    </div>
  );
}
