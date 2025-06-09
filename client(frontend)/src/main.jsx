import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/css/index.css'
import './assets/css/App.css'
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <React.StrictMode>
        <BrowserRouter>
    <GlobalProvider>
        <App />
    </GlobalProvider>
    </BrowserRouter>
    </React.StrictMode>
    )
