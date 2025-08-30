import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Student from "./components/Student";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     <Student />
  </StrictMode>,
)
