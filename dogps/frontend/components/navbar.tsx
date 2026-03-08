"use client";
import { useRouter } from "next/navigation";
import "./Navbar.css";

function Navbar() {
  const router = useRouter();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <div className="navbar">
      <div className="logo">
        <p>Pawsitive Developers</p>
      </div>
      <div className="nav-links">
        <a href="/find-a-dog">Find a Dog</a>
        <a href="/find-shelters">Find Shelters</a>
        <a href="/favorites">Favorites</a>
        <a href="/about-us">About Us</a>
      </div>

      <button className="sign-in" onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Navbar;
