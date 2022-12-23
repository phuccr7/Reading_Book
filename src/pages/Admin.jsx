import React from 'react'
import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom'
import SidebarAdmin from '../components/sidebar/SidebarAdmin'
import { ReactDOM } from 'react'
import Dashboard from '../components/admin/Dashboard'
import HomeAdmin from '../components/sidebar/HomeAdmin'
import ManagerAccount from '../components/admin/ManagerAccount'
import ManagerBook from '../components/admin/ManagerBook'
function Admin() {



    return (

        <Routes>

            <Route path='/' element={<HomeAdmin />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path='account/*' element={<ManagerAccount />} />
                <Route path='book/*' element={<ManagerBook />} />
            </Route>

        </Routes>
    )




}

export default Admin
