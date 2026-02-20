import './DogTile.css';

function DogTile({ dog }) {
    return (
        <div className="dog-tile">
            <h3>{dog.animalName}</h3>
            <img src={dog.animalThumbnailUrl} alt="Animal Picture" />
            <p>Breed: {dog.animalPrimaryBreed ? dog.animalPrimaryBreed : "Unknown"}</p>
            <p>Age: {dog.animalGeneralAge ? dog.animalGeneralAge : "Unknown"}</p>
        </div>
    )
}

export default DogTile;