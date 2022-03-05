import React, {useEffect} from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'

import './css/style.scss'
import './charts/ChartjsConfig'

// Import pages
import Dashboard from './pages/Dashboard'
import ManageDevice from './pages/MangaDevice'
import Login from './pages/Login'

export default function App() {
    const location = useLocation()

    useEffect(() => {
        document.querySelector('html').style.scrollBehavior = 'auto'
        window.scroll({top: 0})
        document.querySelector('html').style.scrollBehavior = ''
    }, [location.pathname]) // triggered on route change

    return (
        <>
            <Routes>
                <Route exact path='/' element={<ManageDevice />} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/device' element={<Dashboard />} />
            </Routes>
        </>
    )
}
