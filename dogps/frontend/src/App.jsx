import { useState, useEffect } from 'react'
import DogTile from './components/DogTile';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [dogs, setDogs] = useState([]);
  const [backendStatus, setBackendStatus] = useState("Backend status unknown, maybe it's not running?");

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
      <div className="dog-grid">
        {dogs.map((dog) => (
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
