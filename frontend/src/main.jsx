import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {WorkoutContextProvider} from "./context/WorkoutContext.jsx";
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <WorkoutContextProvider>
          <BrowserRouter>
                    <App />
          </BrowserRouter>
      </WorkoutContextProvider>
  </StrictMode>,
)
