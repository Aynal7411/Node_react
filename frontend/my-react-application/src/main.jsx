import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Student from "./components/Student";
import Bird from "./components/Bird";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bird />
    <App />
     <Student />
  </StrictMode>,
)
