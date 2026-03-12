"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./Navbar.css";

function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const user = localStorage.getItem('user');
      setIsLoggedIn(!!user);
    };

    checkAuth();

    window.addEventListener('authChange', checkAuth);
    window.addEventListener('focus', checkAuth);

    return () => {
      window.removeEventListener('authChange', checkAuth);
      window.removeEventListener('focus', checkAuth);
    };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    window.dispatchEvent(new Event('authChange'));
    router.push('/');
  };

  const handleSignIn = () => {
    router.push('/login');
  };

  return (
    <div className="navbar">
      <div className="logo">
        <p>Pawsitive Developers</p>
      </div>
      <div className="nav-links">
        <a href="/find-a-dog">Find a Dog</a>
        <a href="/dog-map">Dog Map</a>
        <a href="/favorites">Favorites</a>
        <a href="/personal-survey">Personal Survey</a>
        <a href="/donate">Donate</a>
      </div>

      <button className="sign-in" onClick={isLoggedIn ? handleSignOut : handleSignIn}>
        {isLoggedIn ? "Sign Out" : "Sign In"}
      </button>
    </div>
  );
}

export default Navbar;
