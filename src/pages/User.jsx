import React from 'react'
import UserPage from '../components/userPage/UserPage'
import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom'
import HomeUser from '../components/sidebar/HomeUser'
import Style from '../style/content.module.css'
function User() {
  return (
    

      <Routes>

          <Route path='/' element={<HomeUser />}>
              <Route path="dashboard" />
              <Route path='account'  />
              <Route path="book" />
          </Route>

      </Routes>
  )
    

}



// bodyHome
// }
export default User
