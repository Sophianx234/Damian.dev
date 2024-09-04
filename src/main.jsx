import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TriggerProvider } from './contexts/StatesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TriggerProvider>
    <App />
    </TriggerProvider>
  </StrictMode>,

)
