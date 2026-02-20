import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo"> 
                <p>Pawsitive Developers</p>
            </div>
            <div className="nav-links"> 
                <a href="/find-a-dog">Find a Dog</a>
                <a href="/find-shelters">Find Shelters</a>
                <a href="/favorites">Favorites</a>
                <a href="/about">About Us</a>
            </div>

            <button className="sign-in">Sign In</button>
        </div>
    );
}

export default Navbar;