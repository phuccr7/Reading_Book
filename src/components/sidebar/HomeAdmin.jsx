import React from 'react'
import SidebarAdmin from './SidebarAdmin'
import "./homeAdmin.css"
import { Outlet } from 'react-router-dom'
function HomeAdmin() {
    return (
        <div className='homeAdmin'>
            <div className="contentAdmin">

                <Outlet />
            </div>
            <div className='sidebarAdmin' >

                <SidebarAdmin />
            </div>

        </div>
    )
}

export default HomeAdmin
