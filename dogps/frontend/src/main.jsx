import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from
'react-router-dom'
import Login from './pages/Login.jsx'
import Callback from './pages/Callback.jsx'
import FavoritesPage from './pages/FavoritesPage.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/app" element={<App />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)