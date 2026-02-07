import './DogTile.css';

function DogTile({ dog }) {
    return (
        <div className="dog-tile">
            <h3>{dog.name}</h3>
            <p>Breed: {dog.breed}</p>
            <p>Age: {dog.age}</p>
        </div>
    )
}

export default DogTile;