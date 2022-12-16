import React from 'react'
import SidebarAdmin from './SidebarAdmin'
import UserPage from '../userPage/UserPage'
import "./homeUser.css"
import HeaderUser from '../../components/header/HeaderUser'

import { Outlet } from 'react-router-dom'
function HomeUser() {
    return (
        <div className='homeUserAll'>
            <HeaderUser />
            <div className='homeUser'>


                <div className='sidebarUser' >

                    < UserPage/>
                </div>
                <div className="contentUser">

                    <Outlet />
                </div>

            </div>
        </div>
    )
}

export default HomeUser
