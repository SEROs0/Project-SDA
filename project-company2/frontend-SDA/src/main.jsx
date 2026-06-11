import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashbord from './page/Dashbord/Dashbord'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dashbord />
  </StrictMode>,
)
