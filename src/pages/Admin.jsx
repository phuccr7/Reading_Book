import React from 'react'
import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom'
import SidebarAdmin from '../components/sidebar/SidebarAdmin'
import { ReactDOM } from 'react'
import Dashboard from '../components/admin/Dashboard'
import HomeAdmin from '../components/sidebar/HomeAdmin'
import ManagerAccount from '../components/admin/ManagerAccount'
import ManagerBook from '../components/admin/ManagerBook'
function Admin() {

    // let element = useRoutes([
    //     {

    //         path: "/",
    //         element: <SidebarAdmin />,
    //         children: [
    //             {
    //                 path: "db",
    //                 element: < Dashboard />,
    //             },
    //             // { path: "tasks", element: <Dashboard /> },
    //         ],
    //     },
    //     // { path: "team", element: <AboutPage /> },
    // ]);

    // return element;


    return (

        <Routes>

            <Route path='/' element={<HomeAdmin />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path='account' element={<ManagerAccount />} />
                <Route path="book" element={<ManagerBook />} />
            </Route>

        </Routes>
    )




}

export default Admin
