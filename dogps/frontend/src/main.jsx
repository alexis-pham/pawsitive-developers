import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from
'react-router-dom'
import Login from './pages/Login.jsx'
import Callback from './pages/Callback.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/app" element={<App />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)