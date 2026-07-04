import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import SettingsPage from './pages/SettingsPage.tsx'
import PillsPage from './pages/PillsPage.tsx'
import Layout from './components/layouts/Layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/settings' element={<SettingsPage />} />
          <Route path='/pills' element={<PillsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)
