import { useState, useEffect } from 'react'
import DogTile from './components/DogTile';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [dogs, setDogs] = useState([]);
  const [backendStatus, setBackendStatus] = useState("Backend status unknown, maybe it's not running?");
  const [ageFilter, setAgeFilter] = useState("");
  const [breedFilter, setBreedFilter] = useState("");

  // Prints out dog data to the console
  const getDogs = async () => {
    try {
      const response = await fetch("http://localhost:3001/dogs");
      const data = await response.json();
      setDogs(data);
      console.log(data);
    } catch(error) {
      console.error(error);
    }
  };

  const getBackendStatus = async () => {
    try{
      const response = await fetch("http://localhost:3001/api/health");
      const data = await response.json();
      if (data.ok) {
        setBackendStatus("Backend is running!");
      }
      console.log(data);
    } catch(error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBackendStatus();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>{backendStatus}</p>
      <button onClick={getDogs}>Click here to see the dogs available! (P.S. Check the console)</button>

      {/* Filter for age */}
      <div className="filter-container">
        <label htmlFor="age-filter">Filter by Age: </label>
        <select id="age-filter" value={ageFilter} onChange={(e) => setAgeFilter(e.target.value)}>
          <option value="">All Ages</option>
          <option value="Young">Young</option>
          <option value="Adult">Adult</option>
          <option value="Senior">Senior</option>
        </select>
      </div>

      {/* Filter for breed */}
      <div className="filter-container">
        <label htmlFor="breed-filter">Filter by Breed: </label>
        <select id="breed-filter" value={breedFilter} onChange={(e) => setBreedFilter(e.target.value)}>
          <option value="">All Breeds</option>
          <option value="Basset Hound">Basset Hound</option>
          <option value="Black Labrador Retriever / American Staffordshire Terrier / Mixed">Black Labrador Retriever / American Staffordshire Terrier / Mixed</option>
          <option value="Chihuahua">Chihuahua</option>
          <option value="Dachshund">Dachshund</option>
          <option value="Dachshund / Beagle / Mixed (short coat)">Dachshund / Beagle / Mixed (short coat)</option>
          <option value="German Shepherd Dog / Mixed">German Shepherd Dog / Mixed</option>
          <option value="Great Pyrenees (long coat)">Great Pyrenees (long coat)</option>
          <option value="Hound">Hound</option>
          <option value="Jack Russell Terrier">Jack Russell Terrier</option>
          <option value="Labrador Retriever">Labrador Retriever</option>
          <option value="Labrador Retriever (short coat)">Labrador Retriever (short coat)</option>
          <option value="Labrador Retriever / Mixed">Labrador Retriever / Mixed</option>
          <option value="Manchester Terrier / Mixed (short coat)">Manchester Terrier / Mixed (short coat)</option>
          <option value="Mastiff">Mastiff</option>
          <option value="Pit Bull Terrier">Pit Bull Terrier</option>
          <option value="Shar Pei">Shar Pei</option>
          <option value="Shepherd / Beagle / Mixed">Shepherd / Beagle / Mixed</option>
          <option value="Terrier">Terrier</option>
          <option value="Terrier / Cocker Spaniel / Mixed">Terrier / Cocker Spaniel / Mixed</option>
          <option value="Terrier / Mixed (short coat)">Terrier / Mixed (short coat)</option>
          <option value="Unknown breed">Unknown breed</option>
          <option value="Wirehaired Fox Terrier / Chihuahua / Mixed">Wirehaired Fox Terrier / Chihuahua / Mixed</option>
        </select>
      </div>

      <div className="dog-grid">
        {dogs
          .filter((dog) => !ageFilter || dog.animalGeneralAge === ageFilter)
          .filter((dog) => !breedFilter || dog.animalPrimaryBreed === breedFilter)
          .map((dog) => (
            <DogTile key={dog.id} dog={dog} />
          ))}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
