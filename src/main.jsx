import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import './styles/globals.css'
import './styles/animations.css'
import './styles/navbar.css'
import './styles/footer.css'
import './styles/auth.css'

import Router from './router.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>,
)

