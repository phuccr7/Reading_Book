import React from 'react'
import UserPage from '../components/userPage/UserPage'
import MyLibrary from '../components/user/MyLibrary'
import UpdateProfile from '../components/user/UpdateProfile'
import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom'
import HomeUser from '../components/sidebar/HomeUser'
import Style from '../style/content.module.css'
function User() {
  return (
    

      <Routes>

          <Route path='/' element={<HomeUser />}>
              <Route path="/library" element={<MyLibrary />}/>
              <Route path='/favorite'  />
              <Route path="/update" element={<UpdateProfile/>}/>
          </Route>

      </Routes>
  )
    

}



// bodyHome
// }
export default User
