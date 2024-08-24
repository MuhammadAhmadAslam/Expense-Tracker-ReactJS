import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ExpenseTracker from './ExpenseTracker'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ExpenseTracker/>
  </StrictMode>,
)