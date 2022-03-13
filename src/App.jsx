import React from 'react'
import {Routes, Route} from 'react-router-dom'

// import css and config
import './css/style.scss'
import './charts/ChartjsConfig'

// import pages
import Dashboard from './pages/Dashboard'
import ManageDevice from './pages/MangaDevice'
import Login from './pages/Login'

import RequireAuth from './partials/RequireAuth'

export default function App() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />

            {/* Route need to login */}
            <Route element={<RequireAuth />}>
                <Route path='/' element={<ManageDevice />} />
                <Route path='/home' element={<ManageDevice />} />
                <Route path='/device' element={<Dashboard />} />
            </Route>
        </Routes>
    )
}
