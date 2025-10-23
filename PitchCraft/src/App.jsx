import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import CreatePitch from './pages/CreatePitch'
import HomePage from './pages/HomePage'
import Register from './pages/Register'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/create' element={<CreatePitch />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
