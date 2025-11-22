import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Root from './components/Root'
import Login from './components/Login'
import Register from './components/Register'
import ForgotPass from './components/ForgotPass'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" index element={<Root />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/forgotpass" element={<ForgotPass/>}/>
      </Routes>
    </StrictMode>
  </BrowserRouter>
  
)
