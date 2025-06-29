import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from './pages/landingPage/LandingPage.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
