import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
