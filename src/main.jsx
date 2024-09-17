import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HooksApp } from './HooksApp'
import { FormsApp } from './components/FormsApp'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HooksApp/>
    <FormsApp/>
  </StrictMode>,
)
