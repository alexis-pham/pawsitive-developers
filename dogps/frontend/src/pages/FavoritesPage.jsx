import React, { useEffect, useState } from 'react';
import DogTile from '../components/DogTile';

function FavoritesPage() {
    const [dogs, setDogs] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));
    const userEmail = user.email;
    
    useEffect(() => {
        fetch(`http://localhost:3001/dogs/favorites?userEmail=${userEmail}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            setDogs(data.dogs);
        })
        .catch(error => {
            console.error('Getting favorites failed:', error);
            navigate('/');
        });
    }, [userEmail]);
    

  return (
    <div>
      <div className="dog-grid">
        {dogs.map((dog) => (
            <DogTile key={dog.id} dog={dog} />
          ))}
      </div>
    </div>
  )
}

export default FavoritesPage;

