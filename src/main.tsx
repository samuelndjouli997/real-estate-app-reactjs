import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// import router
import { BrowserRouter as Router } from "react-router-dom";

// import HouseContextProvider
import { HouseContextProvider, useMyContext } from './components/HouseContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HouseContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </HouseContextProvider>

)
