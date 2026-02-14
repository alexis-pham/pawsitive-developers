import './DogTile.css';

function DogTile({ dog }) {
    return (
        <div className="dog-tile">
            <h3>{dog.animalName}</h3>
            <p>Breed: {dog.animalBreed ? dog.animalBreed : "Unknown"}</p>
            <p>Age: {dog.animalGeneralAge ? dog.animalGeneralAge : "Unknown"}</p>
        </div>
    )
}

export default DogTile;