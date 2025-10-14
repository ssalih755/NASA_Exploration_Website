import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './views/App/App.jsx'
import './views/NasaCollection/NasaCollectionView.css' // temp: confirm CSS loads

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
