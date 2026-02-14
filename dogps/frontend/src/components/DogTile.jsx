import './DogTile.css';

function DogTile({ dog }) {
    return (
        <div className="dog-tile">
            <h3>{dog.name}</h3>
            <p>Breed: {dog.breed ? dog.breed : "Unknown"}</p>
            <p>Age: {dog.age ? dog.age : "Unknown"}</p>
        </div>
    )
}

export default DogTile;