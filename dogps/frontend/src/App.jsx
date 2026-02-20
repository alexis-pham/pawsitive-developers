import { useState, useEffect } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FindADog from './pages/FindADog';
import Favorites from './pages/Favorites';
import FindShelters from './pages/FindShelters';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-a-dog" element={<FindADog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/find-shelters" element={<FindShelters />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
