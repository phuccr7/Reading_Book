import { Routes, Route } from 'react-router-dom'
import Header from "./components/header/Header";
import Admin from './pages/Admin';
import Home from "./pages/Home";
import User from "./pages/User";
import SidebarAdmin from './components/sidebar/SidebarAdmin';
import BookDetail from "./pages/BookDetail";
import Comment from "./components/comment/Comment"

import "./style/GlobalStyle.js"
import { StoreContext } from "./utils/Store";
function App() {
  return (

    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />

        <Route path='/user' element={<div><Header/><User/> </div> } />
        {/* <Route path='/ad' element={<SidebarAdmin />} /> */}
        <Route path='/admin/*' element={<Admin />} />
        <Route path='/book' element={ <div><Header/> <BookDetail/><Comment/></div> }/>

      </Routes>
    </>
  );
}

export default App;
