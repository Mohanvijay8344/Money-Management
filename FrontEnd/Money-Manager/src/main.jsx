import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalProvider } from './GlobalContext'
import './index.css'
import { GlobalStyle } from "./styles/globalStyle"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
      <GlobalProvider>
        <App />
      </GlobalProvider>
  </React.StrictMode>
);
