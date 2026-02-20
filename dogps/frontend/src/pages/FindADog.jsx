import { useState } from 'react';

import './FindADog.css';

function FindADog() {
    const [searched, setSearched] = useState(false);

    return (
        <>
            {!searched ? (
                <div>
                    <h1>Find your <span className="orange-text">best friend</span> today</h1>
                    <p>Use our search feature to find the newest addition to your home. Sort by location, age, and breed and sign in to save your favorites for later.</p>
                </div>            
            ) : (
                <div>
                    <h1>Find a Dog</h1>
                </div>     
            )}
        </>
    );
}

export default FindADog;