import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Password } from './Password/Password.jsx'
// import './style.css'
createRoot(document.getElementById('root')).render(
    <>
    <App />
    <Password />
    </>
)
